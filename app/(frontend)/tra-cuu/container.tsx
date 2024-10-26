/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { callAPI } from '@/clients/API';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FormField } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { createAudioStreamFromText } from '@/lib/text-to-speech';
import { API_METHOD, API_STATUS } from '@/models/API';
import { IdiomModel } from '@/models/Idioms';
import { AlertTriangle, Bookmark, ChevronLeft, ChevronRight, Search, Volume2, VolumeX } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ofetch } from 'ofetch';
import { Fragment, useCallback, useEffect, useState } from 'react';
import { useForm, UseFormSetValue } from 'react-hook-form';

const Levels = ['Nhận biết', 'Vận dụng', 'Thông hiểu', 'Tổng hợp'];

export const handleUploadAudio = async ({
  src,
  id,
  exampleId,
}: {
  src: Blob;
  id: string;
  exampleId?: string;
}) => {
  const formData = new FormData();
  formData.append('file', src);
  formData.append('id', id);
  const res = await callAPI<{
    id: string;
  }>('/api/google/upload', API_METHOD.POST, {
    body: formData,
  });
  if (res.status !== API_STATUS.OK) {
    return;
  }
  const data = {} as {
    simplifiedAudio?: string;
    examplesAudio?: Record<number, string>;
  };
  if (exampleId) {
    data.examplesAudio = {
      [exampleId]: res.data.id,
    };
  } else {
    data.simplifiedAudio = res.data.id;
  }
  callAPI('/api/idioms/audio', API_METHOD.POST, {
    body: { id, ...data },
  });
};

const PlayAudioButton = ({
  idiomId,
  text,
  audioId,
  exampleId,
}: {
  idiomId: string;
  text: string;
  audioId?: string;
  exampleId?: string;
}) => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioSrc, setAudioSrc] = useState<string | null>(null);
  const toggleAudio = async () => {
    const audioInput = document.getElementById('simplified-audio') as HTMLAudioElement;
    if (!audioInput) return;
    if (isAudioPlaying) {
      audioInput.pause();
      setIsAudioPlaying(false);
      return;
    }
    setIsAudioPlaying((prev) => !prev);
    let buffer: ArrayBuffer | null = null;
    let src: string | null = audioSrc;
    if (!src) {
      if (audioId) {
        buffer = await ofetch(`/api/google/getAudio?id=${audioId}`).then((res) => res.arrayBuffer());
      } else {
        buffer = await createAudioStreamFromText(text);
        handleUploadAudio({
          src: new Blob([buffer], { type: 'audio/mpeg' }),
          id: idiomId,
          exampleId,
        });
      }

      if (!buffer) return;
      src = URL.createObjectURL(new Blob([buffer], { type: 'audio/mpeg' }));
      if (!src) return;
    }
    audioInput.src = src;
    audioInput.play();
    audioInput.onended = () => {
      setIsAudioPlaying(false);
    };
  };

  useEffect(() => {
    const fetchAudio = async () => {
      if (!audioId) return;
      const buffer = await ofetch(`/api/google/getAudio?id=${audioId}`).then((res) => res.arrayBuffer());
      if (!buffer) return;
      setAudioSrc(URL.createObjectURL(new Blob([buffer], { type: 'audio/mpeg' })));
    };
    fetchAudio();
  }, [audioId]);

  return (
    <Button variant="ghost" size="icon" onClick={toggleAudio}>
      {isAudioPlaying ? <Volume2 className="h-6 w-6 text-primary" /> : <VolumeX className="h-6 w-6" />}
    </Button>
  );
};

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
  const thebestResult = idioms[0];

  return (
    <>
      <div className="text-2xl font-bold mb-4">
        Chi tiết câu
        <span className="font-[Simsun] ml-2">&quot;{thebestResult.simplified}&quot;</span>
      </div>
      <audio crossOrigin="anonymous" id="simplified-audio" hidden />
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="text-3xl text-red-600 mr-2 font-[Simsun]">{thebestResult.simplified}</span>
            <div>
              <PlayAudioButton
                idiomId={thebestResult._id}
                text={thebestResult.simplified}
                audioId={thebestResult.audioId}
              />

              <Button variant="ghost" size="icon">
                <Bookmark className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon">
                <AlertTriangle className="h-6 w-6" />
              </Button>
            </div>
          </CardTitle>
          <p className="text-lg ">【{thebestResult.pinyin} 】</p>
        </CardHeader>
        <CardContent>
          <div>
            <ol className="list-decimal list-inside">
              <li className="font-[Simsun]">{thebestResult.explanation}</li>
            </ol>
            <p className="mt-2 text-sm">{thebestResult.meaning}</p>
          </div>
          <div>
            <h2 className="font-semibold mb-2">Ví dụ:</h2>
            <div className="bg-gray-100 p-3 rounded">
              {thebestResult.examples.map((example, index) => (
                <Fragment key={index}>
                  <p className="flex items-center">
                    <PlayAudioButton
                      idiomId={thebestResult._id}
                      text={example.chinese}
                      audioId={example.audioId}
                      exampleId={example._id}
                    />
                    <span className="text-red-600 font-[Simsun]">{example.chinese}</span>
                  </p>
                  <p className="text-gray-600 mt-1 ">{example.pinyin}</p>
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
                    <div
                      key={index}
                      className="text-sm text-primary bg-neutral-100 p-2 rounded-md cursor-pointer"
                      onClick={() => {
                        setValue('searchTerm', idiom.simplified);
                        handleSearch(idiom.simplified);
                      }}
                    >
                      <span className="font-[Simsun] mr-2">{idiom.simplified}</span>({idiom.pinyin})
                    </div>
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

export default function Lookup({ search, data }: { search: string; data: IdiomModel[] | null | undefined }) {
  const [searchResults, setSearchResults] = useState<IdiomModel[] | null | undefined>(data);
  const router = useRouter();
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
      router.push(`/tra-cuu?search=${searchTerm}`);
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

  useEffect(() => {
    if (search) {
      setValue('searchTerm', search);
    }
  }, []);
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
              <Search className=" sm:mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Tìm kiếm</span>
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
