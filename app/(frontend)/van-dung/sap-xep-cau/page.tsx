import { callAPI } from '@/clients/API';
import IdiomWordOrderGameDnD from '@/components/games/OrderTheWord';
import { API_STATUS } from '@/models/API';
import { RearrangeWord } from '@/models/rearrange-word';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sắp xếp câu',
  description: 'Luyện tập mức độ thông hiểu',
};

const getParagraphs = async (index: number, letter: string) => {
  const res = await callAPI<RearrangeWord[]>(
    `${process.env.WEB_URL}/api/rearrange-words?letter=${letter || 'A'}&index=${index || 1}`
  );
  if (res.status === API_STATUS.OK && res.data?.length) {
    return res.data;
  }
  return [];
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
  const paras = await getParagraphs(index, letter);
  const questions = paras.map((p) => ({
    question: p.question,
    answer: p.answer,
    hint: p.meaning,
  }));

  return <IdiomWordOrderGameDnD questions={questions!} />;
}

export default Page;
