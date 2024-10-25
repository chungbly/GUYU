/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { callAPI } from '@/clients/API';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FormField } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { API_STATUS } from '@/models/API';
import { IdiomModel } from '@/models/Idioms';
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
import { Fragment, useCallback, useState } from 'react';
import { useForm, UseFormSetValue } from 'react-hook-form';

const Levels = ['Nhận biết', 'Vận dụng', 'Thông hiểu', 'Tổng hợp'];

const Result = ({
  idioms,
  setValue,
  handleSearch,
}: {
  idioms: IdiomModel[];
  setValue: UseFormSetValue<{
    searchTerm: string;
  }>;
  handleSearch: (searchTerm: string) => void;
}) => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const toggleAudio = () => setIsAudioPlaying(!isAudioPlaying);
  const thebestResult = idioms[0];
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Chi tiết câu &quot;{thebestResult.simplified}&quot;</h1>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="text-3xl text-red-600 mr-2">{thebestResult.simplified}</span>
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
          <p className="text-lg">【{thebestResult.pinyin} 】</p>
        </CardHeader>
        <CardContent>
          <div>
            <h2 className="font-semibold mb-2">Từ loại: Thành ngữ</h2>
            <ol className="list-decimal list-inside">
              <li>{thebestResult.explanation}</li>
            </ol>
            <p className="mt-2 text-sm">{thebestResult.meaning}</p>
          </div>
          <div>
            <h2 className="font-semibold mb-2">Ví dụ:</h2>
            <div className="bg-gray-100 p-3 rounded">
              {thebestResult.examples.map((example, index) => (
                <Fragment key={index}>
                  <p className="flex items-center">
                    <Button variant="ghost" size="icon" className="mr-2">
                      <Play className="h-4 w-4" />
                    </Button>
                    <span className="text-red-600">{example.chinese}</span>
                  </p>
                  <p className="text-gray-600 mt-1">{example.pinyin}</p>
                  <p className="mt-1">{example.vietnamese}</p>
                </Fragment>
              ))}
            </div>
          </div>

          {/* <div className="mt-6 text-sm text-gray-600">
            <p>Độ phổ biến trên Guyu: {idiomData.stats.hanziiCode}</p>
            <p>Được tra cứu {idiomData.stats.lookups} lần</p>
            <p>Được thêm trong {idiomData.stats.notebooks} sổ tay</p>
          </div> */}
          {idioms.length > 1 && (
            <>
              <p className="font-semibold mt-5">Các kết quả khác</p>
              <div className=" p-2 flex gap-2 ">
                {idioms.map((idiom, index) => {
                  if (index === 0) return null;
                  return (
                    <p
                      key={index}
                      className="text-sm text-primary bg-neutral-100 p-2 rounded-md cursor-pointer"
                      onClick={() => {
                        setValue('searchTerm', idiom.simplified);
                        handleSearch(idiom.simplified);
                      }}
                    >
                      {idiom.simplified} ({idiom.pinyin})
                    </p>
                  );
                })}
              </div>
            </>
          )}
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

export default function Component() {
  const [searchResults, setSearchResults] = useState<IdiomModel[] | null>(null);
  const methods = useForm<{
    searchTerm: string;
  }>();
  const {
    control,
    getValues,
    setError,
    clearErrors,
    setValue,
    formState: { errors },
  } = methods;

  const debounce = useCallback((func: (...args: any[]) => void) => {
    let timeout: ReturnType<typeof setTimeout>;
    return function (...args: any[]) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), 300);
    };
  }, []);

  const handleSearch = useCallback(
    debounce(async (searchTerm: string) => {
      if (!searchTerm) {
        setSearchResults(null);
        clearErrors('searchTerm');
        return;
      }
      const res = await callAPI<IdiomModel[]>(`/api/idioms?text=${searchTerm}`);
      if (res.status === API_STATUS.OK && res.data?.length) {
        setSearchResults(res.data);
        clearErrors('searchTerm');
      } else {
        setSearchResults([]);
        setError('searchTerm', {
          type: 'manual',
        });
      }
    }),
    []
  );

  return (
    <div className="container mx-auto">
      <Card className="my-6">
        <CardHeader>
          <CardTitle>Tìm kiếm thành ngữ, cụm từ, chữ Hán.</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <FormField
              control={control}
              name="searchTerm"
              render={({ field }) => (
                <div className="flex flex-col w-full">
                  <Input
                    value={field.value}
                    onChange={(e) => {
                      field.onChange(e.target.value);
                      handleSearch(e.target.value);
                    }}
                    placeholder="Nhập vào ô tra cứu Tiếng Trung, pinyin"
                  />
                  {errors.searchTerm && (
                    <p className="text-red-500 text-sm mt-4">
                      Không tìm thấy kết quả tương ứng với {field.value}
                    </p>
                  )}
                </div>
              )}
            />
            <Button
              type="submit"
              onClick={() => {
                const text = getValues('searchTerm');
                handleSearch(text);
              }}
            >
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </div>

          <p className="text-sm text-gray-600 mt-2">Ví dụ: 吃闭门羹, chī bì mén gēnɡ.</p>
        </CardContent>
      </Card>
      {!!searchResults?.length ? (
        <Result idioms={searchResults} handleSearch={handleSearch} setValue={setValue} />
      ) : (
        <InitialUI />
      )}
    </div>
  );
}
