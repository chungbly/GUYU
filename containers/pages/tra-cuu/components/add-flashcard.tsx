import { Bookmark } from 'lucide-react';

import { callAPI } from '@/clients/API';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { API_METHOD, API_STATUS } from '@/models/API';
import { IdiomModel } from '@/models/Idioms';
import { useUser } from '@/stores/user';
import { useEffect, useState } from 'react';

function AddFlashCard({ idiom }: { idiom: IdiomModel }) {
  const [isSaved, setIsSaved] = useState(false);
  const user = useUser((s) => s.user);
  const handleAddFlashCard = async () => {
    if (!user || isSaved) return;
    const res = await callAPI('/api/idioms/flashcard', API_METHOD.POST, {
      body: {
        idiomId: idiom._id,
      },
    });
    if (res.status !== API_STATUS.OK) {
      return setIsSaved(false);
    } else {
      return setIsSaved(true);
    }
  };

  const handleRemoveFlashCard = async () => {
    if (!user || !isSaved) return;
    const res = await callAPI('/api/idioms/flashcard', API_METHOD.DELETE, {
      body: {
        idiomId: idiom._id,
      },
    });
    if (res.status !== API_STATUS.OK) {
      return setIsSaved(true);
    } else {
      return setIsSaved(false);
    }
  };

  useEffect(() => {
    if (isSaved) return;
    const checkSaved = async () => {
      const res = await callAPI<IdiomModel[]>(`/api/idioms/flashcard?idiomId=${idiom._id}`);
      if (res.status === API_STATUS.OK && res.data?.length) {
        setIsSaved(true);
      } else {
        setIsSaved(false);
      }
    };
    checkSaved();
  }, [idiom._id]);
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => (isSaved ? handleRemoveFlashCard() : handleAddFlashCard())}
          >
            <Bookmark className={cn('w-6 h-6', isSaved ? 'text-yellow-400' : 'text-inherit')} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>
            {user ? (isSaved ? 'Đã thêm flashcard' : 'Thêm flashcard') : 'Đăng nhập để sử dụng chức năng này'}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default AddFlashCard;
