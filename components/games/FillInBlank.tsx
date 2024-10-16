/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { AlertCircle, CheckCircle2, Clock } from 'lucide-react';
import moment from 'moment';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const sentences = [
  { id: 1, text: 'The quick brown ___ jumps over the lazy dog.', answer: 'fox' },
  { id: 2, text: 'To be or not to ___, that is the question.', answer: 'be' },
  { id: 3, text: 'An ___ a day keeps the doctor away.', answer: 'apple' },
  { id: 4, text: "Where there's a ___, there's a way.", answer: 'will' },
  { id: 5, text: 'Actions speak louder than ___.', answer: 'words' },
  { id: 6, text: 'A picture is worth a thousand ___.', answer: 'words' },
  { id: 7, text: "Don't judge a book by its ___.", answer: 'cover' },
  { id: 8, text: 'The early ___ catches the worm.', answer: 'bird' },
];

const TIMER_DURATION = 10; // 30 seconds per sentence

const UserInput = ({
  value,
  onChange,
  disabled,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
}) => {
  const [userInput, setUserInput] = useState(value);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
    onChange(e);
  };

  useEffect(() => {
    setUserInput(value);
  }, [value]);

  return (
    <Input
      type="text"
      value={userInput}
      onChange={handleChange}
      placeholder="Type your answer here"
      disabled={disabled}
    />
  );
};

export default function EnhancedFillInTheBlank() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session');

  const [currentSentence, setCurrentSentence] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [answeredSentences, setAnsweredSentences] = useState<{
    [key: string]: {
      userInput: string;
      isCorrect: boolean;
      remainingTime: number;
    };
  }>({});
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);

  const sentence = sentences[currentSentence].text;
  const parts = sentence.split('___');
  const userInputRef = useRef('');

  const handleSubmit = (isTimeout = false) => {
    const userInput = userInputRef.current;
    console.log('isTimeout', isTimeout, 'userInput', userInput);
    const correct = userInput.toLowerCase() === sentences[currentSentence].answer.toLowerCase();
    setIsCorrect(correct);
    setShowResult(true);
    if (correct) {
      setScore(score + 1);
    }
    setAnsweredSentences((prev) => {
      prev[currentSentence.toString()] = {
        userInput,
        isCorrect: correct,
        remainingTime: isTimeout ? 0 : timeLeft,
      };
      handleSaveAnswers(prev, correct ? score + 1 : score);
      return prev;
    });
  };

  const nextSentence = () => {
    const nextUnanswered = sentences.findIndex(
      (_, index) => answeredSentences[index]?.userInput === undefined
    );
    if (nextUnanswered !== -1) {
      setCurrentSentence(nextUnanswered);
      userInputRef.current = answeredSentences[nextUnanswered]?.userInput || '';
    }
    setShowResult(!!userInputRef.current);
    setTimeLeft(TIMER_DURATION);
  };

  const selectSentence = (index: number) => {
    setCurrentSentence(index);
    userInputRef.current = answeredSentences[index]?.userInput || '';
    setShowResult(!!userInputRef.current);
    setTimeLeft(TIMER_DURATION);
  };

  useEffect(() => {
    userInputRef.current = answeredSentences[currentSentence]?.userInput || '';
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
          handleSubmit(true);
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
      setScore(parsedAnswers.score);
    }
  }, [sessionId]);

  const handleSaveAnswers = (
    answeredSentences: {
      [key: string]: {
        userInput: string;
        isCorrect: boolean;
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
              Câu {currentSentence + 1} / {sentences.length}
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                <span>{timeLeft}s</span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={(timeLeft / TIMER_DURATION) * 100} className="mb-4" />
            <p className="text-lg mb-4">
              {parts[0]}
              <span className="font-bold tracking-widest">____</span>
              {parts[1]}
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              className="space-y-4"
            >
              <UserInput
                value={userInputRef.current}
                onChange={(e) => (userInputRef.current = e.target.value)}
                disabled={showResult}
              />
              <div className="flex justify-between">
                <Button type="submit" disabled={showResult}>
                  Kiểm tra
                </Button>
                <Button onClick={nextSentence} disabled={!showResult}>
                  Tiếp theo
                </Button>
              </div>
            </form>
            {showResult && (
              <div className={`mt-4 p-4 rounded-md ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
                {isCorrect ? (
                  <div className="flex items-center text-green-700">
                    <CheckCircle2 className="mr-2" />
                    Chính xác rồi! 👏
                  </div>
                ) : (
                  <div className="flex items-center text-red-700">
                    <AlertCircle className="mr-2" />
                    Rất tiếc, đáp án đúng là: {sentences[currentSentence].answer}
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="grid grid-cols-4 gap-2">
              {sentences.map((_, index) => (
                <Button
                  key={index}
                  variant={currentSentence === index ? 'default' : 'outline'}
                  className={`w-full ${answeredSentences[index]?.userInput ? 'opacity-50' : ''}`}
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
        Your Score: {score} / {sentences.length}
      </p>
    </div>
  );
}
