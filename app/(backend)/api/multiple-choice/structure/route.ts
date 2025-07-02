export const dynamic = 'force-dynamic';
import dbConnect from '@/lib/db-connect';
import { errorResp, successResp } from '@/lib/server-json';
import MultipleChoice from '@/models/multiple-choice';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const multipleChoices = await MultipleChoice.find({}).lean();

    if (!multipleChoices) return errorResp('Không tìm thấy dữ liệu', 404);
    const structure = multipleChoices.reduce((acc, cur) => {
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
