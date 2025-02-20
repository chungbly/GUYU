'use client'
import { callAPI } from '@/clients/API';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { API_METHOD, API_STATUS } from '@/models/API';
import { IconBrandFacebook, IconBrandGoogle } from '@tabler/icons-react';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import LoadingButton from '../LoadingButton';

export default function SignInDialog() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await callAPI('/api/login', API_METHOD.POST, {
      body: {
        email: e.currentTarget.email.value,
        password: e.currentTarget.password.value,
      },
    });
    if (res.status === API_STATUS.OK) {
      setError(null);
      setIsLoading(false);
      window.location.reload();
    } else {
      setIsLoading(false);
      setError(res.message);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className='sm:text-white' >Đăng nhập</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">Đăng nhập</DialogTitle>
          <DialogDescription className="text-center">
            Đăng nhập để trải nghiệm nhiều tính năng hơn
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <form onSubmit={onSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="email123@gmail.com" required type="email" />
            </div>
            <div className="space-y-2 mt-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" required type="password" />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <LoadingButton type="submit" loading={isLoading} disabled={isLoading} className=" w-full mt-4">
              Đăng nhập
            </LoadingButton>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Hoặc đăng nhập bằng</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <Button variant="outline" onClick={() => signIn('facebook')}>
              <IconBrandFacebook stroke={2} className="mr-2 h-4 w-4" />
              Facebook
            </Button>
            <Button variant="outline" onClick={() => signIn('google')}>
              <IconBrandGoogle stroke={2} className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
