import { callAPI } from '@/clients/API';
import { API_STATUS } from '@/models/API';
import { Metadata } from 'next';
import ApplicationLevelPage from './container';

export const metadata: Metadata = {
  title: 'Luyện tập - Thông hiểu',
  description: 'Luyện tập mức độ thông hiểu',
};

const getParagraphStructure = async () => {
  const res = await callAPI<Record<string, number>>(`${process.env.WEB_URL}/api/paragraph/structure`);
  if (res.status === API_STATUS.OK) {
    return res.data;
  }
  return {};
};

const getRearrangeWordsStructure = async () => {
  const res = await callAPI<Record<string, number>>(`${process.env.WEB_URL}/api/rearrange-words/structure`);
  if (res.status === API_STATUS.OK) {
    return res.data;
  }
  return {};
};

async function Page() {
  const [paragraphStructure, rearrangeWordsStructure] = await Promise.all([
    getParagraphStructure(),
    getRearrangeWordsStructure(),
  ]);
  return (
    <ApplicationLevelPage
      paragraphStructure={paragraphStructure}
      rearrangeWordsStructure={rearrangeWordsStructure}
    />
  );
}
export default Page;
