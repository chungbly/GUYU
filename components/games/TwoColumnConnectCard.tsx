'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Shuffle, XCircle } from 'lucide-react';
import { useState } from 'react';
import QuizCompletionModal from './quiz-complete-modal';

export default function TwoColumnConnectFlashcards({
  data,
}: {
  data: { id: string; left: string; right: string }[];
}) {
  const [leftCards, setLeftCards] = useState<typeof data>([...data].sort(() => Math.random() - 0.5));
  const [rightCards, setRightCards] = useState<typeof data>([...data].sort(() => Math.random() - 0.5));
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [selectedRight, setSelectedRight] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);

  const shuffleCards = () => {
    const shuffledLeft = [...data].sort(() => Math.random() - 0.5);
    const shuffledRight = [...data].sort(() => Math.random() - 0.5);
    setLeftCards(shuffledLeft);
    setRightCards(shuffledRight);
    setSelectedLeft(null);
    setSelectedRight(null);
    setScore(0);
  };

  const handleCardClick = (side: 'left' | 'right', index: number) => {
    if (side === 'left') {
      setSelectedLeft(index);
    } else {
      setSelectedRight(index);
    }

    if (selectedLeft !== null && side === 'right') {
      checkMatch(selectedLeft, index);
    } else if (selectedRight !== null && side === 'left') {
      checkMatch(index, selectedRight);
    }
  };

  const checkMatch = (leftIndex: number, rightIndex: number) => {
    const leftCard = leftCards[leftIndex];
    const rightCard = rightCards[rightIndex];

    if (leftCard.id === rightCard.id) {
      setScore(score + 1);
      setIsCorrect(true);
      // Remove matched cards
      setLeftCards(leftCards.filter((_, index) => index !== leftIndex));
      setRightCards(rightCards.filter((_, index) => index !== rightIndex));
    } else {
      setIsCorrect(false);
    }
    setShowFeedback(true);

    setTimeout(() => {
      setSelectedLeft(null);
      setSelectedRight(null);
      setShowFeedback(false);
    }, 1000);
  };

  const isGameComplete = leftCards.length === 0 && rightCards.length === 0 && data.length > 0;

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-2xl font-bold text-center">连线惯用语与定义</h1>
      <p className="text-muted-foreground text-center mb-2"> Nối quán dụng ngữ và định nghĩa</p>
      <p className="text-muted-foreground text-center mb-6 text-xs">
        Nhấn chọn một quán dụng ngữ bất kỳ ở cột trái → nhấn chọn nghĩa tương ứng ở cột phải . Nếu đúng, quán
        dụng ngữ và nghĩa sẽ mất đi. Nếu chưa đúng, hệ thống sẽ cho bạn thử lại. Chọn lần lượt hết các cặp
        quán dụng ngữ và nghĩa để hoàn thành bài tập. Nếu muốn làm lại bạn chọn “随机打乱顺序” hiển thị trên
        màn hình.
      </p>
      <div className="flex justify-between items-center mb-4">
        <p>
          Score: {score} / {data.length}
        </p>
        <Button onClick={shuffleCards} className="flex items-center">
          <Shuffle className="mr-2 h-4 w-4" />
          随机打乱顺序
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          {leftCards.map((card, index) => (
            <Card
              key={`left-${card.id}`}
              className={`cursor-pointer transition-all duration-300 transform ${
                selectedLeft === index ? 'bg-blue-100' : 'hover:scale-[1.01]'
              }`}
              onClick={() => handleCardClick('left', index)}
            >
              <CardContent className="flex items-center justify-center min-h-16 p-2 h-max">
                <p className="text-center font-bold">{card.left}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="space-y-4">
          {rightCards.map((card, index) => (
            <Card
              key={`right-${card.id}`}
              className={`cursor-pointer transition-all duration-300 transform ${
                selectedRight === index ? 'bg-blue-100' : 'hover:scale-[1.01]'
              }`}
              onClick={() => handleCardClick('right', index)}
            >
              <CardContent className="flex items-center justify-center min-h-16 p-2 h-max">
                <p className="text-center font-bold">{card.right}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {showFeedback && (
        <div className={`mt-4 p-4 rounded-md ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
          {isCorrect ? (
            <div className="flex items-center text-green-700">
              <CheckCircle className="mr-2" />
              Chính xác!
            </div>
          ) : (
            <div className="flex items-center text-red-700">
              <XCircle className="mr-2" />
              Sai rồi!
            </div>
          )}
        </div>
      )}

      <QuizCompletionModal
        isOpen={isGameComplete}
        onClose={() => null}
        isShowScore={false}
        onContinue={() => {
          window.location.reload();
        }}
      />
    </div>
  );
}
