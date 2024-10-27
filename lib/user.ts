import { auth } from '@/auth';
import User from '@/models/User';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const getUserInfo = async (email: string) => {
  const userResp = await User.findOne({
    email: email,
  });
  if (!userResp) return null;
  return JSON.parse(JSON.stringify(userResp));
};

export const handleGetUser = async () => {
  const sessionNextAuth = await auth();
  if (sessionNextAuth?.user?.email) {
    return await getUserInfo(sessionNextAuth.user.email);
  }
  const sessionToken = cookies().get('session-token');
  if (!sessionToken) return null;
  const decoded = jwt.verify(sessionToken.value, process.env.PRIVATE_KEY!) as { email: string };
  if (!decoded) return null;
  return await getUserInfo(decoded.email);
};
