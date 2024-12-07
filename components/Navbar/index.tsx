'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode, useState } from 'react';
import { HoveredLink, Menu, MenuItem } from '../ui/navbar-menu';

function Navbar({ className, children }: { className?: string; children?: ReactNode }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="bg-[#F19160] shadow-sm border-b sticky top-0  z-50 backdrop-blur-sm">
      <div className={cn('container flex mx-auto items-center ', className)}>
        <Link href="/" className="flex gap-2 items-center">
          <Image
            src={'/images/logo.png'}
            width={60}
            height={60}
            alt="logo"
            className="mr-2 object-contain max-h-[60px] max-w-[60px]"
          />
          <span className="text-white text-2xl font-bold">GUYU</span>
        </Link>
        <Menu setActive={setActive} className="hidden sm:flex items-center text-white hover:text-white/80">
          <Link
            onMouseEnter={() => setActive(null)}
            href="/tra-cuu"
            className="cursor-pointer transition-colors hover:text-foreground/80 dark:text-white font-medium space-x-1 text-sm"
          >
            Tra cứu
          </Link>
          <MenuItem setActive={setActive} active={active} item="Luyện tập">
            <div className="flex flex-col text-sm">
              <HoveredLink href="/ghi-nho">Ghi nhớ</HoveredLink>
              <HoveredLink href="/thong-hieu">Thông hiểu</HoveredLink>
              <HoveredLink href="/van-dung">Vận dụng</HoveredLink>
            </div>
          </MenuItem>
          <Link
            onMouseEnter={() => setActive(null)}
            href="/flash-cards"
            className="cursor-pointer transition-colors hover:text-foreground/80 dark:text-white font-medium space-x-1 text-sm"
          >
            Flash Cards
          </Link>
        </Menu>
        {children}
      </div>
    </div>
  );
}

export default Navbar;
