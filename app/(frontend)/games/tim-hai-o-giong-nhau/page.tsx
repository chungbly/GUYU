import { callAPI } from '@/clients/API';
import FlipAndConnect from '@/components/games/FlipAndConnect';
import { API_STATUS } from '@/models/API';
import { IdiomModel } from '@/models/Idioms';

const getRandomIdioms = async () => {
  const res = await callAPI<IdiomModel[]>(`${process.env.WEB_URL}/api/idioms/random?limit=10`);
  if (res.status === API_STATUS.OK && res.data?.length) {
    return res.data;
  }
  return [];
};

async function Page() {
  const idioms = await getRandomIdioms();
  const data = idioms.map((idiom) => ({
    id: idiom._id,
    content: idiom.simplified,
  }));
  return <FlipAndConnect data={data} />;
}

export default Page;
