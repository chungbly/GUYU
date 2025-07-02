export const dynamic = 'force-dynamic';
import dbConnect from '@/lib/db-connect';
import { errorResp, successResp } from '@/lib/server-json';
import RearrangeWord from '@/models/rearrange-word';

export async function GET() {
  try {
    await dbConnect();

    const rearrangeWords = await RearrangeWord.find({}).lean();

    if (!rearrangeWords) return errorResp('Không tìm thấy dữ liệu', 404);
    const structure = rearrangeWords.reduce((acc, cur) => {
      if (acc[cur.letter]) {
        acc[cur.letter] += 1;
        return acc;
      }
      acc[cur.letter] = 1;
      return acc;
    }, {} as Record<string, number>);
    return successResp(structure);
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
