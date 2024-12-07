import { callAPI } from '@/clients/API';
import MultipleChoiceQuiz from '@/components/games/Quiz';
import { API_STATUS } from '@/models/API';
import { MultipleChoiceModel } from '@/models/multiple-choice';

async function Page({
  searchParams,
}: {
  searchParams: {
    limit: number;
  };
}) {
  const limit = searchParams.limit || 15;
  const res = await callAPI<MultipleChoiceModel[]>(
    `${process.env.WEB_URL}/api/multiple-choice?limit=${limit}`
  );
  if (res.status !== API_STATUS.OK) return <div>Không tìm thấy dữ liệu</div>;
  const multipleChoices = res.data;
  return <MultipleChoiceQuiz data={multipleChoices} />;
}

export default Page;
