import { callAPI } from '@/clients/API';
import { API_STATUS } from '@/models/API';
import { Metadata } from 'next';
import UnderstandingLevelPage from './container';

export const metadata: Metadata = {
  title: 'Luyện tập - Thông hiểu',
  description: 'Luyện tập mức độ thông hiểu',
};

const getWordMeaningGameStructure = async () => {
  const res = await callAPI<Record<string, number>>(`${process.env.WEB_URL}/api/word-meaning-game/structure`);
  if (res.status === API_STATUS.OK) {
    return res.data;
  }
  return {};
};

const getMultipleChoiceStructure = async () => {
  const res = await callAPI<Record<string, number>>(`${process.env.WEB_URL}/api/multiple-choice/structure`);
  if (res.status === API_STATUS.OK) {
    return res.data;
  }
  return {};
};

const Page = async () => {
  const [wordMeaningGameStructure, multipleChoiceStructure] = await Promise.all([
    getWordMeaningGameStructure(),
    getMultipleChoiceStructure(),
  ]);
  return (
    <UnderstandingLevelPage
      wordMeaningGameStructure={wordMeaningGameStructure}
      multipleChoiceStructure={multipleChoiceStructure}
    />
  );
};
export default Page;
