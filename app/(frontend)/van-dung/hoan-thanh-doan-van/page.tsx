import { callAPI } from '@/clients/API';
import EnhancedFillInTheBlank from '@/components/games/FillInBlank';
import { API_STATUS } from '@/models/API';
import { ParagrahpModel } from '@/models/paragraph';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Điền từ vào chỗ trống',
  description: 'Luyện tập mức độ vận dụng',
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
  const res = await callAPI<ParagrahpModel[]>(
    `${process.env.WEB_URL}/api/paragraph?index=${index}&letter=${letter}`
  );
  if (res.status !== API_STATUS.OK) return <div>Không tìm thấy dữ liệu</div>;
  const paragraphs = res.data;
  return (
    <Suspense>
      <EnhancedFillInTheBlank data={paragraphs.sort((a, b) => a.paragraph.length - b.paragraph.length)} />;
    </Suspense>
  );
}

export default Page;
