'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MultipleChoiceModel } from '@/models/multiple-choice';
import { CheckCircle, Shuffle, XCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

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
    setSelectedAnswer(answer);
    setShowResult(true);
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setAnsweredQuestions([...answeredQuestions, currentQuestion]);
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
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6 text-center">Enhanced Multiple Choice Quiz</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              Question {currentQuestion + 1} of {questions.length}
              <Button onClick={shuffleQuestions} size="sm">
                <Shuffle className="mr-2 h-4 w-4" />
                Shuffle
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
                  className="h-24 text-lg"
                  variant={selectedAnswer === answer ? 'secondary' : 'outline'}
                  disabled={showResult}
                >
                  {answer}
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
                    Correct!
                  </div>
                ) : (
                  <div className="flex items-center text-red-700">
                    <XCircle className="mr-2" />
                    Incorrect. The correct answer is: {questions[currentQuestion].correctAnswer}
                  </div>
                )}
              </div>
            )}
            {showResult && !isQuizFinished && (
              <Button onClick={handleNextQuestion} className="mt-4 w-full">
                Next Question
              </Button>
            )}
            {isQuizFinished && (
              <div className="mt-4 p-4 rounded-md bg-blue-100 text-blue-700">
                <h2 className="text-xl font-bold">Quiz Completed!</h2>
                <p>
                  Your final score: {score} out of {questions.length}
                </p>
                <Button onClick={shuffleQuestions} className="mt-2 w-full">
                  Restart Quiz
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Question List</CardTitle>
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
    </div>
  );
}
