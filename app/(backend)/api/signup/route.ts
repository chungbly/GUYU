export const dynamic = 'force-dynamic'; // defaults to auto
import dbConnect from '@/lib/db-connect';
import { createHashPassword } from '@/lib/hash-password';
import { sendActivationLinkToEmail } from '@/lib/send-mail';
import { API_STATUS } from '@/models/API';
import User, { UserModel } from '@/models/User';
import moment from 'moment';

export async function POST(request: Request) {
  await dbConnect();

  const { username, email, password } = await request.json();
  const userRes = await User.findOne<UserModel>({ email });
  if (userRes) {
    return Response.json({
      message: 'Email đã tồn tại',
      status: API_STATUS.ERROR,
      errorCode: 'email',
    });
  } else {
    const user = new User({
      name: username,
      email,
      password: createHashPassword(password),
      isEmailVerified: false,
      activationLinkExpiresAt: moment().add(30, 'minute').unix(),
    });
    await user.save();
  }
  const isOK = await sendActivationLinkToEmail(email);
  if (isOK === null) {
    return Response.json(
      { message: 'COULD NOT SEND MESSAGE', status: API_STATUS.ERROR },
      {
        status: 500,
      }
    );
  }
  if (isOK) {
    return Response.json({ message: 'Success: email was sent', status: API_STATUS.OK });
  } else {
    return Response.json({ message: 'Failed: email was not sent', status: API_STATUS.ERROR });
  }
}
