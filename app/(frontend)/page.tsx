'use client';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';

import { Card, Carousel } from '@/components/ui/apple-cards-carousel';
import { Button } from '@/components/ui/button';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import Link from 'next/link';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';

const data = [
  {
    category: '',
    title: '',
    src: '/images/class1.jpg',
  },
  {
    category: '',
    title: '',
    src: '/images/class2.jpg',
  },
  {
    category: '',
    title: '',
    src: '/images/class3.jpg',
  },
];

function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => <Card key={card.src} card={card} index={index} />);

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Sẵn sàng làm quen với GUYU
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

export default function Home() {
  const words = 'Tra cứu và luyện tập mọi lúc, mọi nơi';

  return (
    <div>
      <BackgroundBeamsWithCollision>
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-7 h-full items-center">
          <div className="pt-5 sm:pt-0 col-span-1 flex flex-col text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
            <AnimatedGradientText
              speed={2}
              colorFrom="#4ade80"
              colorTo="#06b6d4"
              className="font-semibold tracking-tight"
            >
              Hệ thống bài tập{' '}
            </AnimatedGradientText>
            <div className="relative mx-auto inline-block [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className="">Quán dụng ngữ Tiếng Trung</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span className="">Quán dụng ngữ Tiếng Trung</span>
              </div>
            </div>
            <TextGenerateEffect words={words} />
            <div className="flex gap-5 justify-center pt-5">
              <Link href="/ghi-nho">
                <Button className="w-32">Luyện tập</Button>
              </Link>
              <Link href="/tra-cuu">
                <Button className="w-32" variant="outline">
                  Tra cứu
                </Button>
              </Link>
            </div>
          </div>
          <div className="col-span-1">
            <AppleCardsCarouselDemo />
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
