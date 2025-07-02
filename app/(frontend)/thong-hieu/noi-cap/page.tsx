import { callAPI } from '@/clients/API';
import TwoColumnConnectFlashcards from '@/components/games/TwoColumnConnectCard';
import { API_STATUS } from '@/models/API';
import { WordMeaningGame } from '@/models/word-meaning-game';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nối quán dụng và định nghĩa',
  description: 'Nối Quán dụng ngữ và định nghĩa',
};

async function Page({
  searchParams,
}: {
  searchParams: {
    index: number;
    letter: string;
  };
}) {
  const index = searchParams.index || 1;
  const letter = searchParams.letter || 'A';
  const res = await callAPI<WordMeaningGame[]>(
    `${process.env.WEB_URL}/api/word-meaning-game?index=${index}&letter=${letter}`
  );
  if (res.status !== API_STATUS.OK) return <div>Không tìm thấy dữ liệu</div>;
  const games = res.data;
  const data = games.map((g) => ({
    id: g._id,
    left: g.simplified,
    right: g.meaning,
  }));
  return <TwoColumnConnectFlashcards data={data} />;
}

export default Page;
