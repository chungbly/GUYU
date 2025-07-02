import { callAPI } from '@/clients/API';
import { API_STATUS } from '@/models/API';
import { Metadata } from 'next';
import MemorizePage from './container';

export const metadata: Metadata = {
  title: 'Luyện tập - Ghi nhớ',
  description: 'Luyện tập và ghi nhớ Quán dụng ngữ',
};

const getMatchingGameStructure = async () => {
  const res = await callAPI<Record<string, number>>(`${process.env.WEB_URL}/api/matching-game/structure`);
  if (res.status === API_STATUS.OK) {
    return res.data;
  }
  return {};
};

const Page = async () => {
  const matchingGameStructure = await getMatchingGameStructure();
  return <MemorizePage matchingGameStructure={matchingGameStructure} />;
};

export default Page;
