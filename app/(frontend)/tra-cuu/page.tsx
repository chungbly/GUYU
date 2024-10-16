'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  AlertTriangle,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Play,
  Search,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Levels = ['Nhận biết', 'Vận dụng', 'Thông hiểu', 'Tổng hợp'];

// Mock data for demonstration
const idiomData = {
  simplified: '吃闭门羹',
  traditional: '吃閉門羹',
  pinyin: 'chī bì mén gēng',
  meaning: 'đóng cửa không tiếp; cấm cửa không tiếp; không được tiếp đón',
  explanation:
    '羹：流汁食品吃闭门羹，比喻串门时，主人不在家，被拒绝进门或受其冷遇【羹：流汁食品吃閉門羹，比喻串門時，主人不在家，被拒絕進門或受其冷遇】',
  example: {
    chinese: '拒绝客人进门叫做让客人吃闭门羹。【拒絕客人進門叫做讓客人吃閉門羹。】',
    pinyin: 'jùjué kèrén jìnmén jiàozuò ràng kèrén chībìméngēng.',
    translation: 'Từ chối, không để khách vào nhà có thể gọi là đóng cửa không tiếp.',
  },
  stats: {
    lookups: 417,
    notebooks: 16,
    hanziiCode: '#17913',
  },
};

const Result = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const toggleAudio = () => setIsAudioPlaying(!isAudioPlaying);

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Chi tiết từ "{idiomData.simplified}"</h1>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div>
              <span className="text-3xl text-red-600 mr-2">{idiomData.simplified}</span>
              <span className="text-3xl text-blue-600">【{idiomData.traditional}】</span>
            </div>
            <div>
              <Button variant="ghost" size="icon" onClick={toggleAudio}>
                {isAudioPlaying ? <Volume2 className="h-6 w-6" /> : <VolumeX className="h-6 w-6" />}
              </Button>
              <Button variant="ghost" size="icon">
                <Bookmark className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon">
                <AlertTriangle className="h-6 w-6" />
              </Button>
            </div>
          </CardTitle>
          <p className="text-lg">【{idiomData.pinyin} 】</p>
        </CardHeader>
        <CardContent>
          <div>
            <h2 className="font-semibold mb-2">Từ loại: Thành ngữ</h2>
            <ol className="list-decimal list-inside">
              <li>{idiomData.meaning}</li>
            </ol>
            <p className="mt-2 text-sm">{idiomData.explanation}</p>
          </div>
          <div>
            <h2 className="font-semibold mb-2">Ví dụ:</h2>
            <div className="bg-gray-100 p-3 rounded">
              <p className="flex items-center">
                <Button variant="ghost" size="icon" className="mr-2">
                  <Play className="h-4 w-4" />
                </Button>
                <span className="text-red-600">{idiomData.example.chinese}</span>
              </p>
              <p className="text-gray-600 mt-1">{idiomData.example.pinyin}</p>
              <p className="mt-1">{idiomData.example.translation}</p>
            </div>
          </div>
          <div className="mt-6 text-sm text-gray-600">
            <p>Độ phổ biến trên Guyu: {idiomData.stats.hanziiCode}</p>
            <p>Được tra cứu {idiomData.stats.lookups} lần</p>
            <p>Được thêm trong {idiomData.stats.notebooks} sổ tay</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

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
            câu "Hỏi gì hỏi vô duyên vậy?", "Có tý miếng duyên nào không?".
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

export default function Component() {
  const [searchResults, setSearchResults] = useState(null);
  const { register, handleSubmit } = useForm<{
    searchTerm: string;
  }>();

  const handleSearch = ({ searchTerm }: { searchTerm: string }) => {
    // In a real application, this would trigger an API call to search for the idiom
    console.log('Searching for:', searchTerm);
    setSearchResults(searchTerm);
  };

  return (
    <div className="container mx-auto">
      <Card className="my-6">
        <CardHeader>
          <CardTitle>Tìm kiếm thành ngữ, cụm từ, chữ Hán.</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(handleSearch)} className="flex gap-6">
            <Input {...register('searchTerm')} placeholder="Nhập vào ô tra cứu Tiếng Trung, pinyin" />
            <Button type="submit">
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </form>
          <p className="text-sm text-gray-600 mt-2">Ví dụ: 吃闭门羹, chībìméngēng.</p>
        </CardContent>
      </Card>
      {searchResults ? <Result /> : <InitialUI />}
    </div>
  );
}
