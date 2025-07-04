'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { Puzzle } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function MemorizePage({ matchingGameStructure }: { matchingGameStructure: Record<string, number> }) {
  const router = useRouter();
  const [destination, setDestination] = useState<string | null>(null);
  const [letter, setLetter] = useState<string | null>(null);

  return (
    <div className="container mx-auto ">
      <div className="min-h-[80vh]  p-4 md:p-8">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Chọn chế độ luyện tập
          </h1>
          <p className="mt-2 text-muted-foreground">
            Chọn một chế độ để bắt đầu học và luyện tập Quán dụng ngữ
          </p>
        </header>

        <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-1">
          {/* <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Card
              className="group cursor-pointer overflow-hidden"
              onClick={() => {
                setDestination('/ghi-nho/noi-cap');
              }}
            >
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 " />
                  <Image
                    src="/images/word-connect.jpg"
                    alt="Word Connect Game"
                    fill
                    className="w-full h-full object-stretch transition-transform group-hover:scale-105"
                  />
                  <div className="absolute bg-gradient-to-b from-black/5 to-black/80 inset-0 flex flex-col items-center justify-center text-white p-6">
                    <Link className="w-12 h-12 mb-4" />
                    <h2 className="text-2xl font-bold text-center mb-2">把惯用语与相对应的意义连接起来</h2>
                    <p className="text-center ">Nối Quán dụng ngữ và ngữ nghĩa tương ứng</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div> */}

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Card
              className="group cursor-pointer overflow-hidden"
              onClick={() => {
                setDestination('/ghi-nho/tim-hai-o-giong-nhau');
              }}
            >
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 " />
                  <Image
                    src="/images/matching-pairs.png"
                    alt="Memory Match Game"
                    fill
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute bg-gradient-to-b from-black/5 to-black/80 inset-0 flex flex-col items-center justify-center text-white p-6">
                    <Puzzle className="w-12 h-12 mb-4" />
                    <h2 className="text-2xl font-bold text-center mb-2">找出相同的惯用语片段</h2>
                    <p className="text-center drop-shadow-md">Tìm mảnh ghép Quán dụng ngữ giống nhau</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <footer className="mt-8 text-center text-sm text-muted-foreground">
          <p>Chọn một chế độ luyện tập để bắt đầu.</p>
        </footer>
      </div>
      <Dialog
        open={!!destination}
        onOpenChange={() => {
          setDestination(null);
          setLetter(null);
        }}
      >
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Chọn bộ câu hỏi </DialogTitle>
            <DialogDescription>Chọn bộ câu hỏi theo bảng chữ cái {letter || ''}</DialogDescription>
            {letter ? (
              <div className="grid grid-cols-5 gap-4">
                {Array.from({ length: Math.ceil(matchingGameStructure[letter] / 10) }).map((_, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white rounded-md shadow-md cursor-pointer"
                    onClick={() => {
                      router.push(`${destination}?letter=${letter}&index=${index * 10} `);
                    }}
                  >
                    <h3 className="text-lg text-center font-bold">
                      Bộ {letter}-{index + 1}
                    </h3>
                    <p className="text-sm text-center text-muted-foreground">
                      {(index + 1) * 10 > matchingGameStructure[letter]
                        ? matchingGameStructure[letter] % 10
                        : 10}{' '}
                      câu hỏi
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-5 gap-4">
                {Object.keys(matchingGameStructure).map((key, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white rounded-md shadow-md cursor-pointer"
                    onClick={() => {
                      setLetter(key);
                    }}
                  >
                    <h3 className="text-lg text-center font-bold">Bộ {key}</h3>
                    <p className="text-sm text-center text-muted-foreground">
                      {matchingGameStructure[key]} câu hỏi
                    </p>
                  </div>
                ))}
              </div>
            )}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default MemorizePage;
