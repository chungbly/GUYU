/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ParagrahpModel } from '@/models/paragraph';
import { ArrowRight, CheckIcon, RefreshCw } from 'lucide-react';
import moment from 'moment';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { v4 } from 'uuid';
import { fireWorks } from '../ui/confetti';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import QuizCompletionModal from './quiz-complete-modal';

const TIMER_DURATION = 60; // 60 seconds per sentence

export default function EnhancedFillInTheBlank({ data }: { data: ParagrahpModel[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session');
  const limit = searchParams.get('limit');
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
      [key: number]: Record<number, string>;
    };
  }>({
    defaultValues: {
      answer: {},
    },
  });
  const [errors, setErrors] = useState<{
    [key: string]: {
      [key: number]: boolean;
    };
  }>({});

  const sentence = data[currentSentence].paragraph;
  const userInputRef = useRef<{
    [key: number]: string;
  }>({});

  const handleSubmit = (currentSentence: number, isTimeout = false) => {
    const userAnswers = getValues('answer')[currentSentence];
    const error: {
      [key: number]: boolean;
    } = {};
    let correctCount = 0;
    data[currentSentence].correctAnswer.forEach((answer, index) => {
      if (userAnswers[index] === answer) {
        correctCount += 1;
      } else {
        error[index] = true;
      }
    });
    const newErrors = {
      ...errors,
      [currentSentence]: error,
    };
    setErrors(newErrors);
    if (!Object.keys(newErrors).length) {
      fireWorks();
    }
    setShowResult(true);
    setAnsweredSentences((prev) => {
      prev[currentSentence.toString()] = {
        userAnswers,
        score: correctCount,
        checked: true,
        remainingTime: isTimeout ? 0 : timeLeft,
      };
      handleSaveAnswers(
        prev,
        score + (data[currentSentence].correctAnswer.length / 10) * correctCount,
        newErrors
      );
      return prev;
    });
  };

  const nextSentence = () => {
    
    const nextUnanswered = data.findIndex(
      (_, index) => answeredSentences[index]?.userAnswers === undefined && index > currentSentence
    );
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
    // setShowResult(isShowResult);
    if (isShowResult) return;
    // const timer = setInterval(() => {
    //   setTimeLeft((prevTime) => {
    //     if (prevTime <= 1) {
    //       clearInterval(timer);
    //       handleSubmit(currentSentence, true);
    //       return 0;
    //     }
    //     return prevTime - 1;
    //   });
    // }, 1000);

    // return () => clearInterval(timer);
  }, [currentSentence, answeredSentences]);

  const resetGame = () => {
    sessionStorage.removeItem(`userAnswers-${sessionId}`);
    setValue('answer', {});
    setAnsweredSentences({});
    setScore(0);
    setErrors({});
    setShowResult(false);
  };

  useEffect(() => {
    if (!limit) return;
    if (!sessionId) {
      const now = moment().unix();
      router.push(`/van-dung?session=${now}&limit=${limit}`);
      return;
    }

    const savedAnswers = sessionStorage.getItem(`userAnswers-${sessionId}`);
    if (savedAnswers) {
      const parsedAnswers = JSON.parse(savedAnswers);
      setAnsweredSentences(parsedAnswers.answeredSentences);
      setValue('answer', parsedAnswers.answeredSentences[currentSentence]?.userAnswers || {});
      setScore(parsedAnswers.score);
      setErrors(parsedAnswers.errors || {});
    }
  }, [sessionId, limit]);

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
    score: number,
    errors: {
      [key: string]: {
        [key: number]: boolean;
      };
    }
  ) => {
    sessionStorage.setItem(
      `userAnswers-${sessionId}`,
      JSON.stringify({
        answeredSentences,
        score,
        errors,
      })
    );
  };
  if (!limit) {
    return (
      <Dialog open={!limit}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Chọn bộ câu hỏi</DialogTitle>
            <DialogDescription>Chọn bộ câu hỏi phù hợp với bạn</DialogDescription>
            <div className="grid grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-md shadow-md cursor-pointer"
                  onClick={() => {
                    router.push(`/van-dung?limit=${(index + 1) * 5}`);
                  }}
                >
                  <h3 className="text-lg text-center font-bold">Bộ {index + 1}</h3>
                  <p className="text-sm text-center text-muted-foreground">{(index + 1) * 5} câu hỏi</p>
                </div>
              ))}
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-6 text-center">完成含有惯用语的短文</h1>
      <p className="text-muted-foreground text-center mb-2">Hoàn thành đoạn văn chứa quán dụng ngữ</p>
      <p className="text-muted-foreground text-center mb-6 text-xs">
        Chọn đáp án đúng để hoàn thành đoạn văn. Nhấn <strong>Kiểm tra</strong> để xem kết quả. Nếu đúng đáp
        án sẽ chuyển màu
        <strong className="text-green-500"> xanh</strong>, nếu sai đáp án sẽ chuyển màu
        <strong className="text-red-500"> đỏ</strong>. Nhấn <strong>Tiếp theo</strong> để chuyển sang câu kế
        tiếp
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              Câu {currentSentence + 1} / {data.length}
              {/* <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                <span>{timeLeft}s</span>
              </div> */}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-2 pt-0 sm:p-6 sm:pt-0">
            {/* <Progress value={(timeLeft / TIMER_DURATION) * 100} className="mb-4" /> */}
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
                            value={field.value?.[currentSentence]?.[index]}
                          >
                            {answers.map((answer) => {
                              const isChecked = field.value?.[currentSentence]?.[index] === answer;
                              const isCorrect =
                                showResult && data[currentSentence].correctAnswer[index] === answer;
                              const isWrong = showResult && !isCorrect && isChecked;
                              return (
                                <div
                                  key={answer}
                                  className="flex items-center space-x-2 col-span-1"
                                  onClick={() => {
                                    if (answeredSentences[currentSentence]?.checked) return;
                                    setValue('answer', {
                                      ...field.value,
                                      [currentSentence]: {
                                        ...field.value[currentSentence],
                                        [index]: answer,
                                      },
                                    });
                                  }}
                                >
                                  <RadioGroupItem
                                    className={cn(
                                      'min-w-4',
                                      isCorrect ? 'bg-green-500' : isWrong ? 'bg-red-500' : ''
                                    )}
                                    value={answer}
                                    id="option-one"
                                  />
                                  <Label
                                    htmlFor="option-one"
                                    className={cn(
                                      'cursor-pointer',
                                      isCorrect ? 'text-green-500' : isWrong ? 'text-red-500' : ''
                                    )}
                                  >
                                    {answer}
                                  </Label>
                                </div>
                              );
                            })}
                          </RadioGroup>
                        </div>
                        {/* {errors[currentSentence]?.[index] && (
                          <p className="text-red-500 text-sm">
                            Đáp án đúng là: {data[currentSentence].correctAnswer[index]}{' '}
                          </p>
                        )} */}
                      </div>
                    );
                  })}
                </div>
              )}
            />
            <div className="flex justify-between mt-4">
              <Controller
                name="answer"
                control={control}
                defaultValue={{}}
                render={({ field }) => {
                  return (
                    <Button
                      disabled={
                        Object.keys(field.value[currentSentence] || {}).length !==
                        data[currentSentence].answers.length
                      }
                      onClick={() => handleSubmit(currentSentence, false)}
                      className="bg-green-500 hover:bg-green-600"
                    >
                      <CheckIcon className="mr-2 h-4 w-4" />
                      Kiểm tra
                    </Button>
                  );
                }}
              />
              <Button
                onClick={nextSentence}
                // disabled={!showResult}
              >
                Tiếp theo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="w-full flex justify-end">
              <Button onClick={resetGame} variant="destructive" className="mb-2 ">
                <RefreshCw className="mr-2 h-4 w-4" />
                Làm lại
              </Button>
            </div>

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
      {/* <p className="text-center mt-4">
        Your Score: {score} / {10 * data.length}
      </p> */}
      <QuizCompletionModal
        isOpen={Object.keys(answeredSentences).length === data.length}
        onClose={() => null}
        score={score}
        totalQuestions={data.length}
        onRetry={resetGame}
        onContinue={() => {
          window.location.replace(`/van-dung?session=${moment().unix()}&limit=${limit}`);
        }}
      />
    </div>
  );
}
