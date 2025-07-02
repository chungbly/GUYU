'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { Link, Puzzle } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function UnderstandingLevelPage({
  wordMeaningGameStructure,
  multipleChoiceStructure,
}: {
  wordMeaningGameStructure: Record<string, number>;
  multipleChoiceStructure: Record<string, number>;
}) {
  const router = useRouter();
  const [destination, setDestination] = useState<string | null>(null);
  const [letter, setLetter] = useState<string | null>(null);
  const structure = destination?.includes('noi-cap') ? wordMeaningGameStructure : multipleChoiceStructure;

  return (
    <div className="container mx-auto ">
      <div className="min-h-screen  p-4 md:p-8">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Chọn chế độ luyện tập
          </h1>
          <p className="mt-2 text-muted-foreground">
            Chọn một chế độ để bắt đầu học và luyện tập Quán dụng ngữ
          </p>
        </header>

        <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
          {/* <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Card
              className="group cursor-pointer overflow-hidden"
              onClick={() => {
                setDestination('/thong-hieu/sap-xep-cau');
              }}
            >
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 " />
                  <Image
                    src="/images/rearrange.jpg"
                    alt="Word Connect Game"
                    fill
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute bg-gradient-to-b from-black/5 to-black/80  inset-0 flex flex-col items-center justify-center text-white p-6">
                    <Link className="w-12 h-12 mb-4" />
                    <h2 className="text-2xl font-bold text-center mb-2">组句</h2>
                    <p className="text-center opacity-90">Sắp xếp câu có sử dụng Quán dụng ngữ</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div> */}

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Card
              className="group cursor-pointer overflow-hidden"
              onClick={() => {
                setDestination('/thong-hieu/noi-cap');
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
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Card
              className="group cursor-pointer overflow-hidden"
              onClick={() => {
                setDestination('/thong-hieu/trac-nghiem');
              }}
            >
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 " />
                  <Image
                    src="/images/quiz.jpg"
                    alt="Memory Match Game"
                    fill
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute bg-gradient-to-b from-black/5 to-black/80 inset-0 flex flex-col items-center justify-center text-white p-6">
                    <Puzzle className="w-12 h-12 mb-4" />
                    <h2 className="text-2xl font-bold text-center mb-2">选择正确的答案</h2>
                    <p className="text-center opacity-90">Chọn đáp án đúng</p>
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
                {Array.from({ length: Math.ceil(structure[letter] / 10) }).map((_, index) => (
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
                      {(index + 1) * 10 > structure[letter] ? structure[letter] % 10 : 10} câu hỏi
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-5 gap-4">
                {Object.keys(structure).map((key, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white rounded-md shadow-md cursor-pointer"
                    onClick={() => {
                      setLetter(key);
                    }}
                  >
                    <h3 className="text-lg text-center font-bold">Bộ {key}</h3>
                    <p className="text-sm text-center text-muted-foreground">{structure[key]} câu hỏi</p>
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

export default UnderstandingLevelPage;
