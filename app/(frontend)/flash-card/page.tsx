'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shuffle } from 'lucide-react';

// Mock data for flashcards
const flashcards = [
  { id: 1, english: 'Serendipity', pronunciation: '/ˌserənˈdipəti/', vietnamese: 'Tình cờ may mắn' },
  { id: 2, english: 'Eloquent', pronunciation: '/ˈeləkwənt/', vietnamese: 'Hùng biện, lưu loát' },
  { id: 3, english: 'Resilience', pronunciation: '/rəˈzilyəns/', vietnamese: 'Khả năng phục hồi, sức bật' },
  { id: 4, english: 'Ephemeral', pronunciation: '/əˈfem(ə)rəl/', vietnamese: 'Ngắn ngủi, tạm thời' },
  { id: 5, english: 'Ubiquitous', pronunciation: '/yo͞oˈbikwədəs/', vietnamese: 'Phổ biến, có mặt khắp nơi' },
];

export default function VocabularyFlashcards() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [cards, setCards] = useState(flashcards);

  const toggleFlip = (id: number) => {
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
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-2xl font-bold mb-6 text-center">English-Vietnamese Vocabulary Flashcards</h1>
      <div className="space-y-4">
        {cards.map((card) => (
          <Card
            key={card.id}
            className={`cursor-pointer transition-all duration-500 ease-in-out transform ${
              flippedCards.includes(card.id)
                ? '[transform-style:preserve-3d] [transform:rotateY(180deg)]'
                : ''
            }`}
            onClick={() => toggleFlip(card.id)}
          >
            <div className="relative w-full h-full [backface-visibility:hidden]">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <h2 className="text-2xl font-bold mb-2">{card.english}</h2>
                <p className="text-gray-600">{card.pronunciation}</p>
              </CardContent>
            </div>
            <div className="absolute top-0 left-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <CardContent className="flex items-center justify-center h-full p-6">
                <p className="text-xl text-center">{card.vietnamese}</p>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Button onClick={shuffleCards} className="flex items-center">
          <Shuffle className="mr-2 h-4 w-4" />
          Shuffle Cards
        </Button>
      </div>
      <p className="text-center mt-4">Click on a card to flip it and reveal the Vietnamese meaning.</p>
    </div>
  );
}
