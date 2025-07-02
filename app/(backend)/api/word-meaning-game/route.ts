export const dynamic = 'force-dynamic';
import dbConnect from '@/lib/db-connect';
import { errorResp, successResp } from '@/lib/server-json';
import wordMeaningGame from '@/models/word-meaning-game';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    const index = Number(request.nextUrl.searchParams.get('index')) || 1;
    const letter = request.nextUrl.searchParams.get('letter') || 'A';

    const games = await wordMeaningGame
      .find({
        letter,
      })
      .skip(index)
      .limit(10);

    if (!games) return errorResp('Không tìm thấy dữ liệu', 404);
    return successResp(games);
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
