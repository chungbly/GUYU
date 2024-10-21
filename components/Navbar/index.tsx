'use client';
import { callAPI } from '@/clients/API';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import useCreateResource from '@/hooks/createResource';
import { removeCookie } from '@/lib/cookie';
import { cn } from '@/lib/utils';
import { API_STATUS } from '@/models/API';
import { UserModel } from '@/models/User';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { SignInDialog, SignUpForm } from '../Login';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { HoveredLink, Menu, MenuItem } from '../ui/navbar-menu';
import { MobileMenu } from './menu-mobile';

const fetchUser = async () => {
  const response = await callAPI<UserModel>('/api/auth/user');
  if (response.status === API_STATUS.OK) return response.data;
  return null;
};

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const user = useCreateResource<UserModel>(fetchUser);

  return (
    <div className="bg-cyan-600 sm:bg-white shadow-sm border-b sticky top-0  z-50 backdrop-blur-sm">
      <div className={cn(' container flex mx-auto items-center ', className)}>
        <Image src={'/images/logo.png'} width={180} height={60} alt="logo" className="bg-cyan-600 mr-2" />

        <Menu setActive={setActive} className="hidden sm:flex items-center">
          <Link
            onMouseEnter={() => setActive(null)}
            href="/tra-cuu"
            className="cursor-pointer transition-colors hover:text-foreground/80 dark:text-white font-medium space-x-1 text-sm"
          >
            Tra cứu
          </Link>
          <MenuItem setActive={setActive} active={active} item="Luyện tập">
            <div className="flex flex-col text-sm">
              <HoveredLink href="/web-dev">Nhận biết</HoveredLink>
              <HoveredLink href="/interface-design">Vận dụng</HoveredLink>
              <HoveredLink href="/seo">Thông hiểu</HoveredLink>
              <HoveredLink href="/branding">Tổng hợp</HoveredLink>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Games">
            <div className="flex flex-col text-sm">
              <HoveredLink href="/games/dien-vao-cho-trong">Điền vào chỗ trống</HoveredLink>
              <HoveredLink href="/games/tim-hai-o-giong-nhau">Tìm hai ô giống nhau</HoveredLink>
              <HoveredLink href="/games/sap-xep-cau">Sắp xếp thành ngữ</HoveredLink>
              <HoveredLink href="/games/trac-nghiem">Trắc nghiệm</HoveredLink>
              <HoveredLink href="/games/noi-cap">Nối cặp</HoveredLink>
            </div>
          </MenuItem>
        </Menu>

        <div className="flex-1 hidden sm:flex justify-end">
          {user.data ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className=" flex items-center gap-2 border rounded-md h-fit py-1 px-3 shadow-sm">
                  <p className="text-foreground/80">{user?.data?.name}</p>
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>{user?.data?.name}</AvatarFallback>
                  </Avatar>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() => {
                    signOut();
                    removeCookie('session-token');
                  }}
                >
                  Đăng xuất
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex gap-4">
              <SignInDialog />
              <SignUpForm />
            </div>
          )}
        </div>
        <div className="flex sm:hidden flex-1 justify-end">
          <MobileMenu user={user} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
