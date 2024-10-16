'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, XCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

import {
  closestCenter,
  DndContext,
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

const idioms = [
  { id: 1, idiom: 'A piece of cake', meaning: 'Something that is very easy to do' },
  {
    id: 2,
    idiom: 'Hit the nail on the head',
    meaning: 'To describe exactly what is causing a situation or problem',
  },
  { id: 3, idiom: 'When pigs fly', meaning: 'Something that will never happen' },
  { id: 4, idiom: 'Break a leg', meaning: 'Good luck' },
  { id: 5, idiom: 'Bite off more than you can chew', meaning: 'To take on a task that is way too big' },
];

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

export default function IdiomWordOrderGameDnD() {
  const [currentIdiom, setCurrentIdiom] = useState(0);
  const [shuffledWords, setShuffledWords] = useState<Word[]>([]);
  const [selectedWords, setSelectedWords] = useState<Word[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);

  console.log('shuffledWords', shuffledWords);
  console.log('selectedWords', selectedWords);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const shuffleIdiom = () => {
    const words = idioms[currentIdiom].idiom.split(' ');
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

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setSelectedWords((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  const checkAnswer = () => {
    const correct = selectedWords.map((s) => s.word).join(' ') === idioms[currentIdiom].idiom;
    setIsCorrect(correct);
    setShowResult(true);
    if (correct) {
      setScore(score + 1);
    }
  };

  const nextIdiom = () => {
    if (currentIdiom < idioms.length - 1) {
      setCurrentIdiom(currentIdiom + 1);
    } else {
      // Game finished
      setShowResult(true);
    }
  };

  const resetGame = () => {
    setCurrentIdiom(0);
    setScore(0);
    shuffleIdiom();
  };

  useEffect(() => {
    shuffleIdiom();
  }, [currentIdiom]);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-6 text-center">Luyện tập sắp xếp thành ngữ</h1>
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            Câu {currentIdiom + 1} / {idioms.length}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <p className="font-semibold">Gợi ý:</p>
            <p>{idioms[currentIdiom].meaning}</p>
          </div>

          <DndContext
            sensors={sensors}
            modifiers={[restrictToHorizontalAxis]}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext items={selectedWords} strategy={horizontalListSortingStrategy}>
              <div className="p-4 bg-gray-100 min-h-[60px] rounded-md flex flex-wrap gap-2 mb-4">
                {selectedWords.map((selected) => (
                  <SortableItem id={selected.id} key={selected.id} onClick={() => handleWordClick(selected)}>
                    {selected.word}
                  </SortableItem>
                ))}
              </div>
            </SortableContext>
          </DndContext>

          <div className="flex gap-3">
            {shuffledWords.map((word) => (
              <Button key={word.id} variant="outline" onClick={() => handleWordClick(word)}>
                {word.word}
              </Button>
            ))}
          </div>
          {!showResult && (
            <Button onClick={checkAnswer} className="mt-4 w-full">
              Kiểm tra đáp án
            </Button>
          )}
          {showResult && (
            <div className={`mt-4 p-4 rounded-md ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
              {isCorrect ? (
                <div className="flex items-center text-green-700">
                  <CheckCircle className="mr-2" />
                  Chính xác! Thành ngữ là: {idioms[currentIdiom].idiom}
                </div>
              ) : (
                <div className="flex items-center text-red-700">
                  <XCircle className="mr-2" />
                  Sai. Thành ngữ đúng là: {idioms[currentIdiom].idiom}
                </div>
              )}
            </div>
          )}
          {showResult && currentIdiom < idioms.length - 1 && (
            <Button onClick={nextIdiom} className="mt-4 w-full">
              Tiếp theo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
          {currentIdiom === idioms.length - 1 && showResult && (
            <div className="mt-4 p-4 rounded-md bg-blue-100 text-blue-700">
              <h2 className="text-xl font-bold">Game Completed!</h2>
              <p>
                Điểm của bạn: {score} trên tổng số {idioms.length}
              </p>
              <Button onClick={resetGame} className="mt-2 w-full">
                Làm lại
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
