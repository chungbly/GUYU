import { callAPI } from '@/clients/API';
import TwoColumnConnectFlashcards from '@/components/games/TwoColumnConnectCard';
import { API_STATUS } from '@/models/API';
import { IdiomModel } from '@/models/Idioms';

const getRandomIdioms = async () => {
  const res = await callAPI<IdiomModel[]>(`${process.env.WEB_URL}/api/idioms/random?limit=5`);
  if (res.status === API_STATUS.OK && res.data?.length) {
    return res.data;
  }
  return [];
};

async function Page() {
  const idioms = await getRandomIdioms();
  const data = idioms.map((idiom) => ({
    id: idiom._id,
    left: idiom.simplified,
    right: idiom.explanation,
  }));
  return <TwoColumnConnectFlashcards data={data} />;
}

export default Page;
