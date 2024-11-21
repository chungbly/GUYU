/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { callAPI } from '@/clients/API';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FormField } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { API_STATUS } from '@/models/API';
import { IdiomModel } from '@/models/Idioms';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { Control, useForm, UseFormGetValues, useWatch } from 'react-hook-form';

const InitialUI = dynamic(() => import('@/containers/pages/tra-cuu/components/initialUI'));
const Result = dynamic(() => import('@/containers/pages/tra-cuu/components/result'));

const SearchBtn = ({
  getValues,
  handleSearch,
  control,
}: {
  getValues: UseFormGetValues<{
    searchTerm: string;
  }>;
  control: Control<
    {
      searchTerm: string;
      isLoading: boolean;
    },
    any
  >;
  handleSearch: (text: string) => void;
}) => {
  const isLoading = useWatch({ control, name: 'isLoading' });
  return (
    <Button
      type="submit"
      onClick={() => {
        const text = getValues('searchTerm');
        handleSearch(text);
      }}
    >
      {isLoading ? (
        <motion.div
          className="h-4 w-4 rounded-full border-4 border-primary border-t-white"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          aria-label="Loading"
        />
      ) : (
        <Search className=" sm:mr-2 h-4 w-4" />
      )}

      <span className="hidden sm:inline">Tìm kiếm</span>
    </Button>
  );
};

export default function Lookup({ search, data }: { search: string; data: IdiomModel[] | null | undefined }) {
  const [searchResults, setSearchResults] = useState<IdiomModel[] | null | undefined>(data);
  const router = useRouter();
  const methods = useForm<{
    searchTerm: string;
    isLoading: boolean;
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
      const audioInput = document.getElementById('simplified-audio') as HTMLAudioElement;
      audioInput?.pause();
      router.push(`/tra-cuu?search=${searchTerm}`);
      if (!searchTerm) {
        setSearchResults(null);
        clearErrors('searchTerm');
        return;
      }
      setValue('isLoading', true);
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
      setValue('isLoading', false);
    }),
    []
  );

  useEffect(() => {
    if (search) {
      setValue('searchTerm', search);
    }
  }, [search, setValue]);
  return (
    <div className="container mx-auto">
      <Card className="my-6">
        <CardHeader className="p-3 sm:p-6">
          <CardTitle>Tìm kiếm thành ngữ, cụm từ, chữ Hán.</CardTitle>
        </CardHeader>
        <CardContent className="p-3 sm:p-6">
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
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        const text = getValues('searchTerm');
                        handleSearch(text);
                      }
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
            <SearchBtn getValues={getValues} handleSearch={handleSearch} control={control} />
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
