import { callAPI } from '@/clients/API';
import Flashcard from '@/containers/pages/flash-cards/components/flashcard';
import { handleGetUser } from '@/lib/user';
import { API_STATUS } from '@/models/API';
import { IdiomModel } from '@/models/Idioms';

const fetchFlashCards = async () => {
  const user = await handleGetUser();
  const res = await callAPI<IdiomModel[]>(`${process.env.WEB_URL}/api/idioms/flashcard?userId=${user._id}`);
  if (res.status === API_STATUS.OK && res.data?.length) {
    return res.data;
  }
};

export default async function Page() {
  const flashcards = await fetchFlashCards();
  return (
    <div className="container mx-auto ">
      {flashcards?.length ? (
        <Flashcard cards={flashcards} />
      ) : (
        <div className="text-center">
          <h1 className="text-2xl font-bold">Không có flashcard nào</h1>
          <p className="text-gray-500">Hãy thêm flashcard mới bằng cách sử dụng chức năng tra cứu</p>
        </div>
      )}
    </div>
  );
}