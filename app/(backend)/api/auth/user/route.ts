import { auth } from '@/auth';
import dbConnect from '@/lib/db-connect';
import { errorResp, successResp } from '@/lib/server-json';
import { API_STATUS } from '@/models/API';
import User from '@/models/User';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export const GET = auth(async function GET(req) {
  if (req.auth) {
    return NextResponse.json({
      status: API_STATUS.OK,
      message: '',
      data: req.auth.user,
    });
  } else {
    await dbConnect();
    const sessionToken = cookies().get('session-token');
    if (!sessionToken?.value) return errorResp('Not authenticated', 401);

    const decoded = jwt.verify(sessionToken.value, process.env.PRIVATE_KEY!) as { email: string };
    if (!decoded) return errorResp('Not authenticated', 401);

    const userResp = await User.findOne({
      email: decoded.email,
    });
    if (!userResp) return errorResp('Not authenticated', 401);
    return successResp(userResp);
  }
});
