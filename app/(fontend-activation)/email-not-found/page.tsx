import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function EmailNotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Email Not Found</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-center">
            <AlertTriangle className="h-12 w-12 text-yellow-500" />
          </div>
          <p className="text-center text-gray-600">
            Chúng tôi rất tiếc, nhưng địa chỉ email liên kết với liên kết kích hoạt này không được tìm thấy
            trong hệ thống của chúng tôi.
          </p>
          <p className="text-center text-gray-600">Điều này có thể do:</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Tài khoản đã được kích hoạt</li>
            <li>Tài khoản đã bị xóa</li>
            <li>Có lỗi trong liên kết kích hoạt</li>
          </ul>
          <Button className='w-full'>
            <Link href="/">Quay lại trang chủ</Link>
          </Button>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-center text-sm text-gray-500">
            Nếu bạn vẫn gặp vấn đề, vui lòng liên hệ với nhóm hỗ trợ của chúng tôi tại{' '}
            <a href="mailto:websiteguyu@gmail.com" className="text-blue-500 hover:underline">
              websiteguyu@gmail.com
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
