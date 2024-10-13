import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IconBrandFacebook, IconBrandGoogle } from "@tabler/icons-react";
import { signIn } from "next-auth/react";
import { useState } from "react";
import LoadingButton from "../LoadingButton";

export function SignInDialog() {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Đăng nhập</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Đăng nhập</DialogTitle>
          <DialogDescription>
            Đăng nhập để trải nghiệm nhiều tính năng hơn
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <form onSubmit={onSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="email123@gmail.com"
                required
                type="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" required type="password" />
            </div>

            <LoadingButton
              loading={isLoading}
              disabled={isLoading}
              className="w-full mt-4"
            >
              Đăng nhập
            </LoadingButton>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Hoặc đăng nhập bằng
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <Button variant="outline" onClick={() => signIn("facebook")}>
              <IconBrandFacebook stroke={2} className="mr-2 h-4 w-4" />
              Facebook
            </Button>
            <Button variant="outline" onClick={() => signIn("google")}>
              <IconBrandGoogle stroke={2} className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
