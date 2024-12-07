import { callAPI } from '@/clients/API';
import IdiomWordOrderGameDnD from '@/components/games/OrderTheWord';
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
  const questions = idioms
    .map((idiom) => {
      if (!idiom?.examples?.length) {
        return [];
      }
      return idiom.examples
        .map((example) => {
          if (example.question) {
            return {
              question: example.question,
              answer: example.chinese,
            };
          }
          return null;
        })
        .filter((f) => !!f);
    })

    .flat();
  return <IdiomWordOrderGameDnD questions={questions!} />;
}

export default Page;
