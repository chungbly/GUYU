import EnhancedFillInTheBlank from '@/components/games/FillInBlank';
import { Suspense } from 'react';

function Page() {
  return (
    <Suspense>
      <EnhancedFillInTheBlank />;
    </Suspense>
  );
}

export default Page;
