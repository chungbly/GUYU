'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { MultipleChoiceModel } from '@/models/multiple-choice';
import { CheckCircle, Shuffle, XCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { fireWorks } from '../ui/confetti';
import QuizCompletionModal from './quiz-complete-modal';

export default function MultipleChoiceQuiz({ data }: { data: MultipleChoiceModel[] }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [questions, setQuestions] = useState(data);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);

  useEffect(() => {
    shuffleQuestions();
  }, []);

  const shuffleQuestions = () => {
    const shuffled = [...data].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setAnsweredQuestions([]);
  };

  const handleAnswerClick = (answer: string) => {
    if (!selectedAnswer) {
      setAnsweredQuestions([...answeredQuestions, currentQuestion]);
    }
    setSelectedAnswer(answer);
    setShowResult(true);
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      fireWorks();
    }
  };

  const handleNextQuestion = () => {
    const nextUnanswered = questions.findIndex((_, index) => !answeredQuestions.includes(index));
    if (nextUnanswered !== -1) {
      setCurrentQuestion(nextUnanswered);
      setShowResult(false);
      setSelectedAnswer(null);
    }
  };

  const selectQuestion = (index: number) => {
    setCurrentQuestion(index);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  const isQuizFinished = answeredQuestions.length === questions.length;

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">选择正确的答案</h1>
      <p className="text-muted-foreground text-center mb-2">Chọn đáp án đúng</p>
      <p className="text-muted-foreground text-center mb-6 text-xs">
        Chọn đáp án đúng để hoàn thành câu có sẵn. Nếu chưa đúng, bạn có thể thử lại. Nếu sai, bạn có thể chọn
        lại. Chọn Tiếp theo để tiếp tục.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              Câu {currentQuestion + 1} / {questions.length}
              <Button onClick={shuffleQuestions} size="sm">
                <Shuffle className="mr-2 h-4 w-4" />
                随机打乱顺序
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">{questions[currentQuestion].question}</p>
            <div className="grid grid-cols-2 gap-4">
              {questions[currentQuestion].answers.map((answer, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswerClick(answer)}
                  variant="secondary"
                  className={cn(
                    'h-24 text-lg hover:bg-blue-100',
                    selectedAnswer === answer ? 'bg-blue-100' : '',
                    selectedAnswer === questions[currentQuestion].correctAnswer ? 'pointer-events-none' : ''
                  )}
                >
                  {`${String.fromCharCode(65 + index)}. ${answer}`}
                </Button>
              ))}
            </div>
            {showResult && (
              <div
                className={`mt-4 p-4 rounded-md ${
                  selectedAnswer === questions[currentQuestion].correctAnswer ? 'bg-green-100' : 'bg-red-100'
                }`}
              >
                {selectedAnswer === questions[currentQuestion].correctAnswer ? (
                  <div className="flex items-center text-green-700">
                    <CheckCircle className="mr-2" />
                    Chính xác!
                  </div>
                ) : (
                  <div className="flex items-center text-red-700">
                    <XCircle className="mr-2" />
                    Sai rồi!!.
                  </div>
                )}
              </div>
            )}
            {showResult && !isQuizFinished && (
              <Button onClick={handleNextQuestion} className="mt-4 w-full">
                Câu tiếp theo
              </Button>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Câu hỏi</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-2">
              {questions.map((_, index) => (
                <Button
                  key={index}
                  onClick={() => selectQuestion(index)}
                  variant={currentQuestion === index ? 'default' : 'outline'}
                  className={`w-full ${answeredQuestions.includes(index) ? 'opacity-50' : ''}`}
                >
                  {index + 1}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <QuizCompletionModal
        isOpen={isQuizFinished}
        onClose={() => null}
        score={score}
        totalQuestions={questions.length}
        onRetry={shuffleQuestions}
        onContinue={() => {
          window.location.reload();
        }}
      />
    </div>
  );
}
