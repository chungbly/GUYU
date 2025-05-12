import { Metadata } from 'next';
import UnderstandingLevelPage from './container';
import ApplicationLevelPage from './container';

export const metadata: Metadata = {
  title: 'Luyện tập - Thông hiểu',
  description: 'Luyện tập mức độ thông hiểu',
};

const Page = () => {
  return <ApplicationLevelPage />;
};
export default Page;
