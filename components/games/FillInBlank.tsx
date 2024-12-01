/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ParagrahpModel } from '@/models/paragraph';
import { Clock } from 'lucide-react';
import moment from 'moment';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { v4 } from 'uuid';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

const TIMER_DURATION = 60; // 60 seconds per sentence

export default function EnhancedFillInTheBlank({ data }: { data: ParagrahpModel[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session');

  const [currentSentence, setCurrentSentence] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answeredSentences, setAnsweredSentences] = useState<{
    [key: string]: {
      userAnswers: {
        [key: number]: string;
      };
      score: number;
      checked: boolean;
      remainingTime: number;
    };
  }>({});
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);
  const { control, setValue, getValues } = useForm<{
    answer: {
      [key: number]: string;
    };
  }>({
    defaultValues: {
      answer: {},
    },
  });
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  const sentence = data[currentSentence].paragraph;
  const userInputRef = useRef<{
    [key: number]: string;
  }>({});

  const handleSubmit = (currentSentence: number, isTimeout = false) => {
    const userAnswers = getValues('answer');
    const errors: {
      [key: number]: boolean;
    } = {};
    const correctCount = Object.entries(userAnswers).reduce((acc, [index, answer]) => {
      if (answer === data[currentSentence].correctAnswer[Number(index)]) {
        return acc + 1;
      }
      errors[Number(index)] = true;
      return acc;
    }, 0);
    setErrors(errors);
    setShowResult(true);
    setAnsweredSentences((prev) => {
      prev[currentSentence.toString()] = {
        userAnswers,
        score: correctCount,
        checked: true,
        remainingTime: isTimeout ? 0 : timeLeft,
      };
      handleSaveAnswers(prev, score + (data[currentSentence].correctAnswer.length / 10) * correctCount);
      return prev;
    });
  };

  const nextSentence = () => {
    setErrors({});
    const nextUnanswered = data.findIndex((_, index) => answeredSentences[index]?.userAnswers === undefined);
    if (nextUnanswered !== -1) {
      setCurrentSentence(nextUnanswered);
      userInputRef.current = answeredSentences[nextUnanswered]?.userAnswers || '';
    }
    setShowResult(!!userInputRef.current);
    setTimeLeft(TIMER_DURATION);
  };

  const selectSentence = (index: number) => {
    setCurrentSentence(index);
    userInputRef.current = answeredSentences[index]?.userAnswers || '';
    setShowResult(!!userInputRef.current);
    setTimeLeft(TIMER_DURATION);
  };

  useEffect(() => {
    userInputRef.current = answeredSentences[currentSentence]?.userAnswers || '';
    const remainingTime = answeredSentences[currentSentence]?.remainingTime;
    if (remainingTime !== undefined) {
      setTimeLeft(remainingTime);
    }
    const isShowResult =
      !!userInputRef.current || (remainingTime !== undefined && remainingTime !== TIMER_DURATION);
    setShowResult(isShowResult);
    if (isShowResult) return;
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleSubmit(currentSentence, true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentSentence, answeredSentences]);

  useEffect(() => {
    if (!sessionId) {
      const now = moment().unix();
      router.push(`/games/dien-vao-cho-trong?session=${now}`);
      return;
    }

    const savedAnswers = sessionStorage.getItem(`userAnswers-${sessionId}`);
    if (savedAnswers) {
      const parsedAnswers = JSON.parse(savedAnswers);
      setAnsweredSentences(parsedAnswers.answeredSentences);
      setValue('answer', parsedAnswers.answeredSentences[currentSentence]?.userAnswers || {});
      setScore(parsedAnswers.score);
    }
  }, [sessionId]);

  const handleSaveAnswers = (
    answeredSentences: {
      [key: string]: {
        userAnswers: {
          [key: number]: string;
        };
        score: number;
        remainingTime: number;
      };
    },
    score: number
  ) => {
    sessionStorage.setItem(
      `userAnswers-${sessionId}`,
      JSON.stringify({
        answeredSentences,
        score,
      })
    );
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-6 text-center">Luyện tập điền từ vào chỗ trống</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              Câu {currentSentence + 1} / {data.length}
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                <span>{timeLeft}s</span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={(timeLeft / TIMER_DURATION) * 100} className="mb-4" />
            <p className="text-lg mb-4">{sentence}</p>
            <Controller
              name="answer"
              control={control}
              defaultValue={{}}
              render={({ field }) => (
                <div className="flex flex-col gap-2">
                  {data[currentSentence].answers.map((answers, index) => {
                    return (
                      <div key={v4()} className="flex flex-col ">
                        <div className="flex gap-2">
                          <p className="w-4">{index + 1}.</p>
                          <RadioGroup
                            disabled={answeredSentences[currentSentence]?.checked}
                            className="grid grid-cols-4 flex-1 gap-2"
                            value={field.value?.[index]}
                          >
                            {answers.map((answer) => {
                              return (
                                <div
                                  key={answer}
                                  className="flex items-center space-x-2 col-span-1"
                                  onClick={() => {
                                    if (answeredSentences[currentSentence]?.checked) return;
                                    setValue('answer', {
                                      ...field.value,
                                      [index]: answer,
                                    });
                                  }}
                                >
                                  <RadioGroupItem value={answer} id="option-one" />
                                  <Label htmlFor="option-one" className="cursor-pointer">
                                    {answer}
                                  </Label>
                                </div>
                              );
                            })}
                          </RadioGroup>
                        </div>
                        {errors[index] && (
                          <p className="text-red-500 text-sm">
                            Đáp án đúng là: {data[currentSentence].correctAnswer[index]}{' '}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            />
            <div className="flex justify-between mt-4">
              <Button
                disabled={answeredSentences[currentSentence]?.checked}
                onClick={() => handleSubmit(currentSentence, false)}
              >
                Kiểm tra
              </Button>
              <Button onClick={nextSentence} disabled={!showResult}>
                Tiếp theo
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="grid grid-cols-4 gap-2">
              {data.map((_, index) => (
                <Button
                  key={index}
                  variant={currentSentence === index ? 'default' : 'outline'}
                  className={`w-full ${answeredSentences[index]?.userAnswers ? 'opacity-50' : ''}`}
                  onClick={() => selectSentence(index)}
                >
                  {index + 1}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <p className="text-center mt-4">
        Your Score: {score} / {10 * data.length}
      </p>
    </div>
  );
}
