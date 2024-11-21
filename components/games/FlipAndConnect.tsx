'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Shuffle, XCircle } from 'lucide-react';
import { useState } from 'react';

export default function FlipAndConnect({ data }: { data: { id: string; content: string }[] }) {
  const [cards, setCards] = useState(
    [...data, ...data].sort(() => Math.random() - 0.5).map((card, index) => ({ ...card, uniqueId: index }))
  );
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);

  const shuffleCards = () => {
    const shuffled = [...data, ...data]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, uniqueId: index }));
    setCards(shuffled);
    setSelectedCards([]);
    setMatchedPairs([]);
    setScore(0);
  };

  const handleCardClick = (index: number) => {
    if (
      selectedCards.length === 2 ||
      selectedCards.includes(index) ||
      matchedPairs.includes(cards[index].id)
    ) {
      return;
    }

    const newSelectedCards = [...selectedCards, index];
    setSelectedCards(newSelectedCards);

    if (newSelectedCards.length === 2) {
      const [firstIndex, secondIndex] = newSelectedCards;
      const firstCard = cards[firstIndex];
      const secondCard = cards[secondIndex];

      if (firstCard.id === secondCard.id) {
        setMatchedPairs([...matchedPairs, firstCard.id]);
        setScore(score + 1);
        setIsCorrect(true);
      } else {
        setIsCorrect(false);
      }
      setShowFeedback(true);

      setTimeout(() => {
        setSelectedCards([]);
        setShowFeedback(false);
      }, 1000);
    }
  };

  const isGameComplete = matchedPairs.length === data.length;

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6 text-center">Connect Flashcards Game</h1>
      <div className="flex justify-between items-center mb-4">
        <p>
          Score: {score} / {data.length}
        </p>
        <Button onClick={shuffleCards} className="flex items-center">
          <Shuffle className="mr-2 h-4 w-4" />
          Shuffle Cards
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <Card
            key={index}
            className={`cursor-pointer transition-all duration-300 transform ${
              selectedCards.includes(index) || matchedPairs.includes(card.id)
                ? 'bg-blue-100'
                : 'hover:scale-105'
            }`}
            onClick={() => handleCardClick(index)}
          >
            <CardContent className="flex items-center justify-center h-24 p-2">
              <p className="text-center text-sm">
                {selectedCards.includes(index) || matchedPairs.includes(card.id) ? card.content : '?'}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      {showFeedback && (
        <div className={`mt-4 p-4 rounded-md ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
          {isCorrect ? (
            <div className="flex items-center text-green-700">
              <CheckCircle className="mr-2" />
              Correct match!
            </div>
          ) : (
            <div className="flex items-center text-red-700">
              <XCircle className="mr-2" />
              Try again!
            </div>
          )}
        </div>
      )}
      {isGameComplete && (
        <div className="mt-4 p-4 rounded-md bg-green-100 text-green-700">
          <h2 className="text-xl font-bold">Congratulations!</h2>
          <p>You&apos;ve completed the game. Great job!</p>
        </div>
      )}
    </div>
  );
}
