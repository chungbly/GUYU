/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, XCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { restrictToHorizontalAxis } from '@dnd-kit/modifiers';
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export function SortableItem({
  children,
  id,
  onClick,
}: {
  children: React.ReactNode;
  id: string;
  onClick: () => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
  };

  return (
    <div
      className="p-3 bg-neutral-200 rounded-md"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

type Word = {
  word: string;
  id: string;
};

export default function IdiomWordOrderGameDnD({
  questions,
}: {
  questions: {
    answer: string;
    question: string;
    hint?: string;
  }[];
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [shuffledWords, setShuffledWords] = useState<Word[]>([]);
  const [selectedWords, setSelectedWords] = useState<Word[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const shuffleIdiom = () => {
    const words = questions[currentQuestion].question.split('/').filter((w) => w.trim() !== '');
    const shuffled = [...words].sort(() => Math.random() - 0.5);
    setShuffledWords(
      shuffled.map((word, index) => ({
        word,
        id: `${word}-${index}`,
      }))
    );
    setSelectedWords([]);
    setShowResult(false);
  };

  const handleWordClick = (word: Word) => {
    if (shuffledWords.some((w) => w.id === word.id)) {
      setSelectedWords([...selectedWords, word]);
      setShuffledWords(shuffledWords.filter((w) => w.id !== word.id));
    } else {
      setSelectedWords(selectedWords.filter((w) => w.id !== word.id));
      setShuffledWords([...shuffledWords, word]);
    }
  };

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setSelectedWords((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over?.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  const checkAnswer = () => {
    const correct = selectedWords.map((s) => s.word.trim()).join('') === questions[currentQuestion].answer;
    setIsCorrect(correct);
    setShowResult(true);
    if (correct) {
      setScore(score + 1);
    }
  };

  const nextIdiom = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Game finished
      setShowResult(true);
    }
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    shuffleIdiom();
  };

  useEffect(() => {
    shuffleIdiom();
  }, [currentQuestion]);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-6 text-center">排列含有惯用语的句子</h1>
      <p className="text-muted-foreground text-center mb-2">Sắp xếp câu có chứa quán dụng ngữ</p>
      <p className="text-muted-foreground text-center mb-6 text-xs">
        Chọn câu hỏi bất kỳ → Sắp xếp các cụm từ xáo trộn thành câu hoàn chỉnh. Nếu chưa đúng, bạn có thể thử
        lại. Nhấn <strong>Kiểm tra đáp án</strong> để kiểm tra kết quả.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <Card className="col-span-1 sm:col-span-2">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              Câu {currentQuestion + 1} / {questions.length}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* <div className="mb-4">
              <p className="font-semibold">Gợi ý:</p>
              <p>{questions[currentQuestion].hint}</p>
            </div> */}

            <DndContext
              sensors={sensors}
              modifiers={[restrictToHorizontalAxis]}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext items={selectedWords} strategy={horizontalListSortingStrategy}>
                <div className="p-4 bg-gray-100 min-h-[60px] rounded-md flex flex-wrap gap-2 mb-4">
                  {selectedWords.map((selected) => (
                    <SortableItem
                      id={selected.id}
                      key={selected.id}
                      onClick={() => handleWordClick(selected)}
                    >
                      {selected.word}
                    </SortableItem>
                  ))}
                </div>
              </SortableContext>
            </DndContext>

            <div className="flex gap-3 flex-wrap">
              {shuffledWords.map((word) => (
                <Button key={word.id} variant="outline" onClick={() => handleWordClick(word)}>
                  {word.word}
                </Button>
              ))}
            </div>
            <p className="my-2 text-xs text-muted-foreground">{questions[currentQuestion].hint}</p>
            {!showResult && (
              <Button onClick={checkAnswer} className="mt-4 w-full">
                Kiểm tra đáp án
              </Button>
            )}
            {showResult && (
              <div className={`mt-2 p-4 rounded-md ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
                {isCorrect ? (
                  <div className="flex items-center text-green-700">
                    <CheckCircle className="mr-2" />
                    Chính xác! Câu đúng là: {questions[currentQuestion].answer}
                  </div>
                ) : (
                  <div className="flex items-center text-red-700">
                    <XCircle className="mr-2" />
                    Sai. Câu đúng là: {questions[currentQuestion].answer}
                  </div>
                )}
              </div>
            )}
            {showResult && currentQuestion < questions.length - 1 && (
              <Button onClick={nextIdiom} className="mt-4 w-full">
                Tiếp theo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
            {currentQuestion === questions.length - 1 && showResult && (
              <div className="mt-4 p-4 rounded-md bg-blue-100 text-blue-700">
                <h2 className="text-xl font-bold">Game Completed!</h2>
                <p>
                  Điểm của bạn: {score} trên tổng số {questions.length}
                </p>
                <Button onClick={resetGame} className="mt-2 w-full">
                  Làm lại
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Câu hỏi</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-2">
              {questions.map((_, index) => (
                <Button
                  key={index}
                  onClick={() => setCurrentQuestion(index)}
                  variant={currentQuestion === index ? 'default' : 'outline'}
                  // className={`w-full ${answeredQuestions.includes(index) ? 'opacity-50' : ''}`}
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
