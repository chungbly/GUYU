'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode, useState } from 'react';
import { HoveredLink, Menu, MenuItem } from '../ui/navbar-menu';

function Navbar({ className, children }: { className?: string; children?: ReactNode }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="bg-cyan-600 sm:bg-white shadow-sm border-b sticky top-0  z-50 backdrop-blur-sm">
      <div className={cn(' container flex mx-auto items-center ', className)}>
        <Link href="/">
          <Image src={'/images/logo.png'} width={180} height={60} alt="logo" className="bg-cyan-600 mr-2" />
        </Link>
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
