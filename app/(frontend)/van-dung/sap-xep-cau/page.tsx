import { callAPI } from '@/clients/API';
import IdiomWordOrderGameDnD from '@/components/games/OrderTheWord';
import { API_STATUS } from '@/models/API';
import { IdiomModel } from '@/models/Idioms';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sắp xếp câu',
  description: 'Luyện tập mức độ thông hiểu',
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
  const limit = searchParams.limit || 15;
  const idioms = await getRandomIdioms(limit);
  const questions = idioms
    .map((idiom) => {
      if (!idiom?.examples?.length) {
        return [];
      }
      return idiom.examples
        .map((example) => {
          if (example.question) {
            return {
              question: example.question,
              answer: example.chinese,
              hint: example.vietnamese,
            };
          }
          return null;
        })
        .filter((f) => !!f);
    })

    .flat()
    .filter((_, index) => index < limit);
  return <IdiomWordOrderGameDnD questions={questions!} />;
}

export default Page;
