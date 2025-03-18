export const fetchCache = 'force-no-store';
import { callAPI } from '@/clients/API';
import { API_STATUS } from '@/models/API';
import { IdiomModel } from '@/models/Idioms';
import { Metadata } from 'next';
import Lookup from './container';

export const metadata: Metadata = {
  title: 'Tra cứu Quán dụng ngữ',
  description: 'Tra cứu Quán dụng ngữ theo từ khóa',
};

const getIdiom = async (search: string) => {
  if (!search) return;
  const res = await callAPI<IdiomModel[]>(`${process.env.WEB_URL}/api/idioms?text=${search}`);
  if (res.status === API_STATUS.OK && res.data?.length) {
    return res.data;
  }
};

async function Page({
  searchParams,
}: {
  searchParams: {
    search: string;
  };
}) {
  const searchTerm = searchParams.search;
  const idioms = searchTerm ? await getIdiom(searchTerm) : null;
  return <Lookup search={searchTerm} data={idioms} />;
}

export default Page;
