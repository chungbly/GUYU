'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { callAPI } from '@/clients/API';
import { API_METHOD, API_STATUS } from '@/models/API';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  simplified: z.string().min(1, 'Simplified Chinese is required'),
  pinyin: z.string().min(1, 'Pinyin is required'),
  meaning: z.string().min(1, 'Vietnamese meaning is required'),
  explanation: z.string().min(1, 'Chinese explanation is required'),
  explanationPinyin: z.string().min(1, 'Explanation pinyin is required'),
});

interface Example {
  chinese: string;
  pinyin: string;
  vietnamese: string;
  question: string;
}

export default function WordEntryForm() {
  const { toast } = useToast();
  const [examples, setExamples] = useState<Example[]>([
    {
      chinese: '',
      pinyin: '',
      vietnamese: '',
      question: '',
    },
  ]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      simplified: '',
      pinyin: '',
      meaning: '',
      explanation: '',
      explanationPinyin: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = {
      ...values,
      examples,
    };
    console.log(formData);
    try {
      const res = await callAPI('/api/idioms', API_METHOD.POST, {
        body: formData,
      });
      console.log('res: ', res);
      if (res.status === API_STATUS.OK) {
        toast({
          title: 'Success',
          description: 'Word entry submitted successfully!',
        });
        form.reset();
      } else {
        toast({
          title: 'Error',
          description: res.message || 'Word entry submission failed!',
          variant: 'error',
        });
      }
    } catch (err) {
      toast({
        title: 'Error',
        description:
          (
            err as {
              message: string;
            }
          ).message || 'Word entry submission failed!',
        variant: 'error',
      });
    }
  }

  const addExample = () => {
    setExamples([
      ...examples,
      {
        chinese: '',
        pinyin: '',
        vietnamese: '',
        question: '',
      },
    ]);
  };

  const updateExample = (index: number, field: keyof Example, value: string) => {
    const newExamples = [...examples];
    newExamples[index] = { ...newExamples[index], [field]: value };
    setExamples(newExamples);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-8">Insert New Idiom Entry</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="simplified"
            rules={{ required: 'Simplified Chinese is required' }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Simplified Chinese</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="pinyin"
            rules={{ required: 'Pinyin is required' }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pinyin</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="meaning"
            rules={{ required: 'Vietnamese meaning is required' }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Vietnamese Meaning</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="explanation"
            rules={{ required: 'Chinese explanation is required' }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Chinese Explanation</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="explanationPinyin"
            rules={{ required: 'Explanation pinyin is required' }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Explanation Pinyin</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Examples</h2>
              <Button type="button" onClick={addExample}>
                Add Example
              </Button>
            </div>

            {examples.map((example, index) => (
              <div key={index} className="p-4 border rounded-lg space-y-4">
                <div>
                  <Input
                    placeholder="Chinese"
                    value={example.chinese}
                    onChange={(e) => updateExample(index, 'chinese', e.target.value)}
                  />
                  <span>VD: 妈妈说过我考试考满分就带我去海南岛旅游一次，可现在她怎么不认账了呢？</span>
                </div>
                <div>
                  <Input
                    placeholder="Pinyin"
                    value={example.pinyin}
                    onChange={(e) => updateExample(index, 'pinyin', e.target.value)}
                  />
                  <span>
                    VD: Māmā shuōguò wǒ kǎo mǎnfēn jiù dài wǒ qù Hǎinán dǎo lǚyóu yīcì, kě xiànzài tā zěnme bù
                    rèn zhàng le ne?.
                  </span>
                </div>
                <div>
                  <Input
                    placeholder="Vietnamese"
                    value={example.vietnamese}
                    onChange={(e) => updateExample(index, 'vietnamese', e.target.value)}
                  />
                  <span>
                    VD: Mẹ đã nói nếu tôi thi được điểm tối đa thì sẽ đưa tôi đi du lịch đảo Hải Nam một lần,
                    vậy mà giờ bà sao không giữ lời hứa? .
                  </span>
                </div>
                <div>
                  <Input
                    placeholder="Question"
                    value={example.question}
                    onChange={(e) => updateExample(index, 'question', e.target.value)}
                  />
                  <span>
                    Ví dụ question (dùng cho trò sắp xếp câu) : 说过 / 妈妈 / 我 / 考试考满分 / 就 / 带我 / 去
                    / 旅游一次，/ 可 / 现在 / 海南岛 / 她 / 怎么 / 不认账了 / 呢？/
                  </span>
                </div>
              </div>
            ))}
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
