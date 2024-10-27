import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
export const sendActivationLinkToEmail = async (email: string) => {
  const token = jwt.sign(
    {
      email: email,
    },
    process.env.PRIVATE_KEY!,
    { algorithm: 'HS256' }
  );
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    tls: {
      ciphers: 'SSLv3',
      rejectUnauthorized: false,
    },

    auth: {
      user: 'websiteguyu@gmail.com',
      pass: process.env.GMAIL_PASSWORD,
    },
  });
  try {
    const mail = await transporter.sendMail({
      from: 'Guyu with love <3',
      to: email,
      replyTo: 'websiteguyu@gmail.com',
      subject: `Website activity from ${email}`,
      html: `
                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 0;">
                            <table role="presentation" style="width: 602px; margin: 0 auto; background-color: #ffffff; padding: 40px; border-radius: 8px; margin-top: 40px; margin-bottom: 40px;">
                                <tr>
                                    <td style="padding: 0;">
                                        <h1 style="color: #333333; font-size: 24px; margin-bottom: 20px;">Chào mừng bạn đến với GUYU</h1>
                                        <p style="color: #666666; font-size: 16px; margin-bottom: 20px;">
                                            Cảm ơn bạn đã đăng ký tài khoản trên hệ thống GUYU. Chúng tôi rất vui mừng khi chào đón bạn vào cộng đồng của chúng tôi.
                                            Dưới đây là link active tài khoản của bạn:

                                        </p>
                                        <p style="color: #666666; font-size: 16px; margin-bottom: 30px;">
                                            Nhấp vào nút bên dưới để kích hoạt tài khoản của bạn, sau đó bạn sẽ được chuyển hướng đến trang web của chúng tôi.
                                            Nếu hành động này không phải là của bạn, vui lòng bỏ qua email này.
                                        </p>
                                        <table role="presentation" style="margin: 0 auto;">
                                            <tr>
                                                <td style="border-radius: 4px; background-color: #007bff;" align="center">
                                                    <a href="${process.env.WEB_URL}/api/signup/active?token=${token}" target="_blank" style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 14px 20px; border-radius: 4px; display: inline-block; font-weight: bold;">Kích hoạt tài khoản</a>
                                                </td>
                                            </tr>
                                        </table>
                                        <p style="color: #666666; font-size: 16px; margin-top: 30px;">
                                            Nếu bạn có bất kỳ câu hỏi nào, đừng ngần ngại <a href="mailto:websiteguyu@gmail.com" style="color: #007bff; text-decoration: underline;">liên hệ với đội ngũ hỗ trợ của chúng tôi</a>.
                                        </p>
                                        <p style="color: #666666; font-size: 16px; margin-top: 30px;">
                                            Trân trọng,<br>
                                            Đội ngũ GUYU
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                `,
    });
    return mail?.accepted?.length;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    console.log("error", e);
    return null;
  }
};
