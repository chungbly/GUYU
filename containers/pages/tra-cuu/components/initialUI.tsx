import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const levels = ['Ghi nhớ', 'Thông hiểu', 'Vận dụng'];

const InitialUI = () => {
  return (
    <>
      <h1 className="text-2xl font-bold flex items-center mb-4">Tips học tập</h1>
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Sử dụng flashcards</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            <li>
              <span className='text-green-600'>Ưu điểm</span>: Flashcards là một công cụ hữu ích để học từ vựng nói chung và quán dụng
              ngữ nói riêng. Bạn có thể viết quán dụng ngữ ở một mặt, mặt còn lại viết phiên âm, ý nghĩa và ví
              dụ.
            </li>
            <li>
              Ví dụ:
              <ul className="list-disc list-inside ml-3">
                <li>Mặt trước: 炒鱿鱼</li>
                <li>Mặt sau: chǎo yóu yú (bị sa thải), 他今天被老板炒鱿鱼了。</li>
              </ul>
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Cấp độ học tập</h2>
        <div className="flex flex-wrap gap-2">
          {levels.map((level) => (
            <Button key={level} variant="outline">
              {level}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

export default InitialUI;
