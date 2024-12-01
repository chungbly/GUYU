export const dynamic = 'force-dynamic';
import dbConnect from '@/lib/db-connect';
import { errorResp, successResp } from '@/lib/server-json';
import Paragraph from '@/models/paragraph';

export async function GET() {
  try {
    await dbConnect();

    const paragraphs = await Paragraph.find();

    if (!paragraphs) return errorResp('Không tìm thấy dữ liệu', 404);
    return successResp(paragraphs);
  } catch (e) {
    return errorResp(
      (
        e as unknown as {
          message: string;
        }
      ).message
    );
  }
}
