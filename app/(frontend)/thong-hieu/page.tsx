import { Metadata } from 'next';
import UnderstandingLevelPage from './container';

export const metadata: Metadata = {
  title: 'Luyện tập - Thông hiểu',
  description: 'Luyện tập mức độ thông hiểu',
};

const Page = () => {
  return <UnderstandingLevelPage />;
};
export default Page;
