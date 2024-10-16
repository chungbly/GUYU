'use client';
import { callAPI } from '@/clients/API';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { API_METHOD } from '@/models/API';
import { AlertCircle } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

 function ExpiredLinkPage() {
  const searchParams = useSearchParams();

  const handleResendEmail = () => {
    const email = searchParams.get('email');
    callAPI('/api/signup/resend-activation', API_METHOD.POST, {
      body: {
        email,
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Account Activation Link Expired</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-center">
            <AlertCircle className="h-12 w-12 text-yellow-500" />
          </div>
          <p className="text-center text-gray-600">
            Chúng tôi rất tiếc, nhưng liên kết kích hoạt tài khoản bạn đã nhấp vào đã hết hạn. Vì lý do bảo
            mật, các liên kết này chỉ có hiệu lực trong một khoảng thời gian ngắn.
          </p>
          <p className="text-center text-gray-600">
            Đừng lo lắng! Bạn có thể yêu cầu một liên kết kích hoạt mới bằng cách nhấp vào nút bên dưới.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={handleResendEmail}>Resend Activation Email</Button>
        </CardFooter>
        <div className="text-center text-sm text-gray-500 mt-4 mb-6">
          <p>Nếu vấn đề vẫn còn tiếp tục, hãy liên hệ với chúng tôi </p>
          <a href="mailto:websiteguyu@gmail.com" className="text-blue-500 hover:underline">
            websiteguyu@gmail.com
          </a>
        </div>
      </Card>
    </div>
  );
}

export default function Page() {
  return <Suspense>
    <ExpiredLinkPage />
  </Suspense>
}