import { callAPI } from '@/clients/API';
import TwoColumnConnectFlashcards from '@/components/games/TwoColumnConnectCard';
import { API_STATUS } from '@/models/API';
import { IdiomModel } from '@/models/Idioms';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nối quán dụng và định nghĩa',
  description: 'Nối quán dụng ngữ và định nghĩa',
};

const getRandomIdioms = async (limit:number) => {
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
  const limit = searchParams.limit || 5;
  const idioms = await getRandomIdioms(limit);
  const data = idioms.map((idiom) => ({
    id: idiom._id,
    left: idiom.simplified,
    right: idiom.explanation,
  }));
  return <TwoColumnConnectFlashcards data={data} />;
}

export default Page;
