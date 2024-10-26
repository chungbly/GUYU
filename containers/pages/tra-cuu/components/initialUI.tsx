import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Levels = ['Nhận biết', 'Vận dụng', 'Thông hiểu', 'Tổng hợp'];

const InitialUI = () => {
  const TopicCategories = [
    { name: 'Pháp luật và Công lý', icon: '⚖️', total: 299 },
    { name: 'Địa lý', icon: '🌎' },
    { name: 'Vận chuyển đường thủy', icon: '🚢' },
    { name: 'Màu sắc và Hình dạng', icon: '🔶' },
    { name: 'Chim', icon: '🐦' },
  ];

  return (
    <>
      <h1 className="text-2xl font-bold flex items-center mb-4">Tips học tập</h1>
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Chủ đề: Giao tiếp</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-2">你懂吗？</p>
          <p className="text-sm text-gray-600">
            Đừng để trả lời khi bị hỏi những câu hỏi bất lịch sự mà đáng nhẽ không nên hỏi. Tương đương với
            câu &quot;Hỏi gì hỏi vô duyên vậy?&quot;, &quot;Có tý miếng duyên nào không?&quot;.
          </p>
        </CardContent>
      </Card>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Cấp độ học tập</h2>
        <div className="flex flex-wrap gap-2">
          {Levels.map((level) => (
            <Button key={level} variant="outline">
              {level}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2 flex items-center justify-between">
          Học theo chủ đề
          <div>
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {TopicCategories.map((category) => (
            <Card key={category.name}>
              <CardContent className="flex items-center p-4">
                <span className="text-4xl mr-4">{category.icon}</span>
                <div>
                  <h3 className="font-semibold">{category.name}</h3>
                  {category.total && <p className="text-sm text-gray-600">Total: {category.total}</p>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default InitialUI;
