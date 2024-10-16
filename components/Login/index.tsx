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
import { zodResolver } from '@hookform/resolvers/zod';
import { IconBrandFacebook, IconBrandGoogle } from '@tabler/icons-react';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import LoadingButton from '../LoadingButton';
import { FormField } from '../ui/form';

export function SignInDialog() {
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
        <Button variant="ghost">Đăng nhập</Button>
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

import { DialogFooter } from '@/components/ui/dialog';
import { Mail } from 'lucide-react';

export default function ActivationLinkSentDialog({
  email,
  open,
  onClose,
}: {
  email: string;
  open: boolean;
  onClose: () => void;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleResendEmail = async () => {
    setIsLoading(true);
    await callAPI('/api/signup/resend-activation', API_METHOD.POST, {
      body: {
        email,
      },
    });
    setIsLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">Activation Link Sent</DialogTitle>
          <DialogDescription className="text-center">
            Chúng tôi đã gửi một liên kết kích hoạt đến địa chỉ email của bạn.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center my-4">
          <Mail className="h-12 w-12 text-blue-500" />
        </div>
        <div className="space-y-4">
          <p className="text-center text-sm text-gray-500">
            Một email chứa liên kết kích hoạt đã được gửi đến:
          </p>
          <p className="text-center font-semibold">{email}</p>
          <p className="text-center text-sm text-gray-500">
            Vui lòng kiểm tra hộp thư đến và nhấp vào liên kết để kích hoạt tài khoản của bạn. Nếu bạn không
            thấy email,
          </p>
        </div>
        <DialogFooter className="flex justify-around">
          <LoadingButton loading={isLoading} onClick={handleResendEmail} variant="outline">
            Gửi lại email kích hoạt
          </LoadingButton>
          <Button onClick={onClose} className="w-full">
            Đóng
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

const formSchema = z
  .object({
    username: z.string().min(2, {
      message: 'Tên người dùng quá ngắn',
    }),
    email: z.string().email('Email không hợp lệ'),
    password: z.string().min(6, {
      message: 'Mật khẩu quá ngắn',
    }),
    confirmPassword: z.string().min(6, {
      message: 'Mật khẩu quá ngắn',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Mật khẩu không khớp',
    path: ['confirmPassword'],
  });

export function SignUpForm() {
  const [open, setOpen] = useState(false);
  const [hasSent, setHasSent] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { control, handleSubmit, getValues, setError, clearErrors } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onBlur',
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...body } = values;
    const res = await callAPI('/api/signup', API_METHOD.POST, {
      body,
    });
    if (res.status === API_STATUS.OK) {
      setHasSent(true);
      clearErrors();
    } else {
      setError('email', {
        message: res.message,
      });
    }
    setIsLoading(false);
  }

  return (
    <>
      <Button variant="ghost" onClick={() => setOpen(true)}>
        Đăng ký
      </Button>
      {hasSent ? (
        <ActivationLinkSentDialog
          email={getValues('email')}
          open={hasSent}
          onClose={() => {
            setHasSent(false);
            setOpen(false);
          }}
        />
      ) : (
        <Dialog open={open} onOpenChange={(open) => setOpen(open)}>
          <DialogTrigger asChild></DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-center text-2xl">Đăng ký</DialogTitle>
              <DialogDescription className="text-center">Đăng ký tài khoản mới </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
              <FormField
                name="username"
                control={control}
                defaultValue=""
                render={({ field, fieldState }) => (
                  <div className="space-y-2">
                    <Label htmlFor="name">Họ và tên</Label>
                    <Input {...field} id="name" name="name" placeholder="John Doe" required />
                    {fieldState.error && <p className="text-red-500 text-sm">{fieldState.error.message}</p>}
                  </div>
                )}
              />

              <FormField
                name="email"
                control={control}
                defaultValue=""
                render={({ field, fieldState }) => (
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      {...field}
                      id="email"
                      name="email"
                      placeholder="email123@gmail.com"
                      required
                      type="email"
                    />
                    {fieldState.error && <p className="text-red-500 text-sm">{fieldState.error.message}</p>}
                  </div>
                )}
              />
              <FormField
                name="password"
                control={control}
                defaultValue=""
                render={({ field, fieldState }) => {
                  return (
                    <div className="space-y-2">
                      <Label htmlFor="password">Mật khẩu</Label>
                      <Input {...field} id="password" name="password" required type="password" />
                      {fieldState.error && <p className="text-red-500 text-sm">{fieldState.error.message}</p>}
                    </div>
                  );
                }}
              />
              <FormField
                name="confirmPassword"
                control={control}
                defaultValue=""
                render={({ field, fieldState }) => (
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Nhập lại mật khẩu</Label>
                    <Input {...field} id="confirmPassword" name="confirmPassword" required type="password" />
                    {fieldState.error && <p className="text-red-500 text-sm">{fieldState.error.message}</p>}
                  </div>
                )}
              />

              <LoadingButton type="submit" loading={isLoading} disabled={isLoading} className="w-full">
                Đăng ký
              </LoadingButton>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
