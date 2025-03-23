'use client';
import { IdiomModel } from '@/models/Idioms';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shuffle } from 'lucide-react';
import { useState } from 'react';

function Flashcard({ cards: originalData }: { cards: IdiomModel[] }) {
  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const [cards, setCards] = useState(originalData);

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => (prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]));
  };

  const shuffleCards = () => {
    setCards((prevCards) => {
      const shuffled = [...prevCards];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    });
    setFlippedCards([]);
  };
  return (
    <>
      <div className="flex items-center justify-between mt-8">
        <h1 className="text-2xl font-bold text-center">Flashcards của bạn</h1>
        <Button onClick={shuffleCards} className="flex items-center">
          <Shuffle className="mr-2 h-4 w-4 max-w-fit" />
          Xáo trộn
        </Button>
      </div>
      <p className="mt-4 text-foreground/60 mb-5">Bạn có thể ấn vào thẻ để xem nghĩa của cụm từ đó.</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
        {cards.map((card) => (
          <Card
            key={card._id}
            className={`col-span-1 aspect-square cursor-pointer transition-all duration-500 ease-in-out transform ${
              flippedCards.includes(card._id)
                ? '[transform-style:preserve-3d] [transform:rotateY(180deg)]'
                : ''
            }`}
            onClick={() => toggleFlip(card._id)}
          >
            <div className="relative w-full h-full [backface-visibility:hidden]  ">
              <CardContent className="flex h-full flex-col items-center justify-center p-6 border rounded-md bg-[#9FD7F9]">
                <h2 className="text-2xl font-bold mb-2 font-[Simsun]">{card.simplified}</h2>
              </CardContent>
            </div>
            <div className="absolute top-0 left-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#9FD7F9] overflow-hidden">
              <CardContent className="flex flex-col gap-4 items-center sm:items-center sm:justify-center h-full p-2 sm:p-6 border-primary border rounded-md max-h-[300px] sm:max-h-none overflow-auto sm:overflow-hidden">
                <p className=" text-xl">[{card.pinyin}]</p>
                <p className="text-center">{card.meaning}</p>

                <div className="flex flex-col gap-2">
                  <p>Ví dụ: </p>
                  {card.examples.map((example, index) => (
                    <div key={index} className="flex flex-col gap-1">
                      <p className=" text-sm font-[Simsun]">{`${index}. ${example.chinese}`}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Flashcard;
