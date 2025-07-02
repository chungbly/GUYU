import { callAPI } from '@/clients/API';
import MultipleChoiceQuiz from '@/components/games/Quiz';
import { API_STATUS } from '@/models/API';
import { MultipleChoiceModel } from '@/models/multiple-choice';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trắc nghiệm',
  description: 'Luyện tập mức độ thông hiểu',
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
  const res = await callAPI<MultipleChoiceModel[]>(
    `${process.env.WEB_URL}/api/multiple-choice?index=${index}&letter=${letter}`
  );
  if (res.status !== API_STATUS.OK) return <div>Không tìm thấy dữ liệu</div>;
  const multipleChoices = res.data;
  return <MultipleChoiceQuiz data={multipleChoices} />;
}

export default Page;
