import dbConnect from '@/lib/db-connect';
import User from '@/models/User';
import jwt from 'jsonwebtoken';
import moment from 'moment';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  await dbConnect();
  const token = request.nextUrl.searchParams.get('token') || '';
  const decode = jwt.verify(token!, process.env.PRIVATE_KEY!) as { email: string };
  const email = decode.email;
  const userResp = await User.findOne({
    email: decode.email,
  });

  if (!userResp || !email) {
    redirect('/link-expired');
  }
  if (userResp) {
    const expriedTime = userResp.activationLinkExpiresAt;
    const diff = expriedTime - moment().unix();
    if (diff < 0) {
      redirect(`/link-expired?email=${email}`);
    } else {
      await User.updateOne(
        {
          email: email,
        },
        {
          $set: { isEmailVerified: true },
          $unset: { activationLinkExpiresAt: '' },
        }
      );
    }
  }

  const newToken = jwt.sign(
    {
      id: userResp._id,
      email: userResp.email,
    },
    process.env.PRIVATE_KEY!,
    { algorithm: 'HS256' }
  );
  cookies().set({
    name: 'session-token',
    value: newToken,
    maxAge: 60 * 60 * 24 * 7,
    secure: true,
    httpOnly: true,
  });
  redirect('/');
}
