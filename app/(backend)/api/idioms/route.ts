export const dynamic = 'force-dynamic';
import dbConnect from '@/lib/db-connect';
import { errorResp, successResp } from '@/lib/server-json';
import Idioms from '@/models/Idioms';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    const text = request.nextUrl.searchParams.get('text');
    if (!text) return errorResp('Vui lòng nhập từ khóa', 400);

    const idioms = await Idioms.find(
      {
        $text: { $search: text },
      },
      {
        score: { $meta: 'textScore' },
      }
    )
      .limit(5)
      .sort({
        score: { $meta: 'textScore' },
      });

    if (!idioms) return errorResp('Không tìm thấy thành ngữ', 404);
    return successResp(idioms);
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
