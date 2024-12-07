export const dynamic = 'force-dynamic';
import dbConnect from '@/lib/db-connect';
import { errorResp, successResp } from '@/lib/server-json';
import Idioms from '@/models/Idioms';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    const limit = Number(request.nextUrl.searchParams.get('limit')) || 5;

    const idioms = await Idioms.aggregate([
      {
        $sample: { size: limit },
      },
    ]);
    if (!idioms) return errorResp('Không tìm thấy quán dụng', 404);
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
