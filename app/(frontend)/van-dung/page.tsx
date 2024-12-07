import { callAPI } from '@/clients/API';
import EnhancedFillInTheBlank from '@/components/games/FillInBlank';
import { API_STATUS } from '@/models/API';
import { ParagrahpModel } from '@/models/paragraph';
import { Suspense } from 'react';

async function Page() {
  const res = await callAPI<ParagrahpModel[]>(`${process.env.WEB_URL}/api/paragraph`);
  if (res.status !== API_STATUS.OK) return <div>Không tìm thấy dữ liệu</div>;
  const paragraphs = res.data;
  return (
    <Suspense>
      <EnhancedFillInTheBlank data={paragraphs.sort((a, b) => a.paragraph.length - b.paragraph.length)} />;
    </Suspense>
  );
}

export default Page;
