import dbConnect from '@/lib/db-connect';
import { API_ERROR_CODE, API_STATUS } from '@/models/API';
import User from '@/models/User';
import moment from 'moment';
import { sendActivationLinkToEmail } from '../route';

export async function POST(request: Request) {
  await dbConnect();
  const { email } = await request.json();
  const userResp = await User.findOne({
    email,
  });
  if (!userResp) {
    return Response.json({
      message: 'Email not found',
      status: API_STATUS.ERROR,
      errorCode: API_ERROR_CODE.EMAIL_NOT_FOUND,
    });
  } else {
    await User.updateOne(
      {
        email,
      },
      {
        activationLinkExpiresAt: moment().add(30, 'minute').unix(),
      }
    );
    const isOk = await sendActivationLinkToEmail(email);
    if (isOk) {
      return Response.json({
        message: 'Activation link was sent',
        status: API_STATUS.OK,
      });
    }
    return Response.json({
      message: 'Could not send message',
      status: API_STATUS.ERROR,
      errorCode: API_ERROR_CODE.EMAIL_ALREADY_EXISTS,
    });
  }
}
