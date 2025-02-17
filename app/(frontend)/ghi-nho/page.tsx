import { Metadata } from 'next';
import MemorizePage from './container';

export const metadata: Metadata = {
  title: 'Luyện tập - Ghi nhớ',
  description: 'Luyện tập và ghi nhớ quán dụng ngữ',
};

const Page = () => {
  return <MemorizePage />;
};

export default Page;
