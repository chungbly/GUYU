import dbConnect from '@/lib/db-connect';
import { errorResp } from '@/lib/server-json';
import { API_STATUS } from '@/models/API';
import User from '@/models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  await dbConnect();
  const { email, password } = await request.json();
  const user = await User.findOne({ email });
  if (!user) return errorResp('Email không tồn tại', 400);

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return errorResp('Mật khẩu không đúng', 400);

  const newToken = jwt.sign(
    {
      id: user._id,
      email: user.email,
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
  return Response.json({
    status: API_STATUS.OK,
    message: 'Đăng nhập thành công',
    data: user,
  });
}
