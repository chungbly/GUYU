'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface QuizCompletionModalProps {
  isOpen: boolean;
  onClose: () => void;
  score?: number;
  totalQuestions?: number;
  isShowScore?: boolean;
  onRetry?: () => void;
  onContinue: () => void;
}

export default function QuizCompletionModal({
  isOpen,
  onClose,
  score,
  totalQuestions,
  onRetry,
  onContinue,
  isShowScore = true,
}: QuizCompletionModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <DialogTitle className="text-xl font-bold text-center w-full">Kết thúc!</DialogTitle>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <p className="text-muted-foreground">Chúc mừng bạn đã hoàn thành bài tập</p>

          {isShowScore && (
            <div className="flex flex-col items-center space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Điểm của bạn:</p>
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl font-bold">{score}</span>
                <span className="text-4xl font-bold text-muted-foreground">/</span>
                <span className="text-4xl font-bold text-muted-foreground">{totalQuestions}</span>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
            {onRetry && (
              <Button variant="destructive" className="sm:order-1" onClick={onRetry}>
                Làm lại
              </Button>
            )}
            <Button className=" sm:order-2" onClick={onContinue}>
              Tiếp tục luyện tập
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
