export const dynamic = 'force-dynamic';
import dbConnect from '@/lib/db-connect';
import { errorResp, successResp } from '@/lib/server-json';
import MultipleChoice from '@/models/multiple-choice';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    const limit = Number(request.nextUrl.searchParams.get('limit')) || 25;

    const multipleChoices = await MultipleChoice.aggregate([
      {
        $sample: { size: limit }
      }
    ])
    if (!multipleChoices) return errorResp('Không tìm thấy dữ liệu', 404);
    return successResp(multipleChoices);
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
