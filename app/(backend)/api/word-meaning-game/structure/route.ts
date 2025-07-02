export const dynamic = 'force-dynamic';
import dbConnect from '@/lib/db-connect';
import { errorResp, successResp } from '@/lib/server-json';
import WordMeaningGame from '@/models/word-meaning-game';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const games = await WordMeaningGame.find({}).lean();
    console.log('games', games);
    if (!games) return errorResp('Không tìm thấy dữ liệu', 404);
    const structure = games.reduce((acc, cur) => {
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
