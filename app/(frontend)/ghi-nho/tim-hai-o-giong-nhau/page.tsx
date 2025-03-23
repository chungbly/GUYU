import { callAPI } from '@/clients/API';
import FlipAndConnect from '@/components/games/FlipAndConnect';
import { API_STATUS } from '@/models/API';
import { IdiomModel } from '@/models/Idioms';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Tìm mảnh ghép Quán dụng ngữ giống nhau',
  description: 'Tìm mảnh ghép Quán dụng ngữ giống nhau',
};

const getRandomIdioms = async (limit: number) => {
  const res = await callAPI<IdiomModel[]>(`${process.env.WEB_URL}/api/idioms/random?limit=${limit}`);
  if (res.status === API_STATUS.OK && res.data?.length) {
    return res.data;
  }
  return [];
};

async function Page({
  searchParams,
}: {
  searchParams: {
    limit: number;
  };
}) {
  const limit = searchParams.limit || 10;
  const idioms = await getRandomIdioms(limit);
  const data = idioms.map((idiom) => ({
    id: idiom._id,
    content: idiom.simplified,
  }));
  return <FlipAndConnect data={data} />;
}

export default Page;
