import { callAPI } from '@/clients/API';
import FlipAndConnect from '@/components/games/FlipAndConnect';
import { API_STATUS } from '@/models/API';
import { MatchingGameModel } from '@/models/matching-game';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Tìm mảnh ghép Quán dụng ngữ giống nhau',
  description: 'Tìm mảnh ghép Quán dụng ngữ giống nhau',
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
  const res = await callAPI<MatchingGameModel[]>(
    `${process.env.WEB_URL}/api/word-meaning-game?index=${index}&letter=${letter}`
  );
  if (res.status !== API_STATUS.OK) return <div>Không tìm thấy dữ liệu</div>;
  const games = res.data;
  const data = games.map((idiom) => ({
    id: idiom._id,
    content: idiom.simplified,
  }));
  return <FlipAndConnect data={data} />;
}

export default Page;
