/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { IdiomModel } from '@/models/Idioms';
import { UseFormSetValue } from 'react-hook-form';

import { callAPI } from '@/clients/API';
import { createAudioStreamFromText } from '@/lib/text-to-speech';
import { API_METHOD, API_STATUS } from '@/models/API';
import { Volume2, VolumeX } from 'lucide-react';
import { ofetch } from 'ofetch';
import { useEffect, useState } from 'react';
import AddFlashCard from './add-flashcard';

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
      setAudioSrc(src);
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
      try {
        if (!audioId) return setAudioSrc(null);
        const buffer = await ofetch(`/api/google/getAudio?id=${audioId}`).then((res) => res.arrayBuffer());
        if (!buffer) return setAudioSrc(null);
        setAudioSrc(URL.createObjectURL(new Blob([buffer], { type: 'audio/mpeg' })));
      } catch (e) {
        console.log(e);
      }
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
        <CardHeader className="p-3 sm:p-6">
          <CardTitle className="flex items-center justify-between">
            <span className="text-3xl text-red-600 mr-2 font-[Simsun]">{thebestResult.simplified}</span>
            <div>
              <PlayAudioButton
                idiomId={thebestResult._id}
                text={thebestResult.simplified}
                audioId={thebestResult.audioId}
              />
              <AddFlashCard idiom={thebestResult} />
            </div>
          </CardTitle>
          <p className="text-lg ">【{thebestResult.pinyin}】</p>
        </CardHeader>
        <CardContent className="p-3 sm:p-6">
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
                <div key={index} className="mt-2 flex">
                  <span className="text-gray-600 mr-2 relative top-[6px]">{`${index + 1})`}</span>
                  <div>
                    <p className="flex items-center">
                      <PlayAudioButton
                        idiomId={thebestResult._id}
                        text={example.chinese}
                        audioId={example.audioId}
                        exampleId={example._id}
                      />
                      <span className="text-red-500 font-[Simsun]">{example.chinese}</span>
                    </p>
                    <p className="text-gray-600 mt-1 ">{example.pinyin}</p>
                    <p className="mt-1">{example.vietnamese}</p>
                  </div>
                </div>
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
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-2">
                {idioms.map((idiom, index) => {
                  if (index === 0) return null;
                  return (
                    <div
                      key={index}
                      className="col-span-1 text-sm text-primary bg-neutral-100 p-2 rounded-md cursor-pointer"
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
export default Result;
