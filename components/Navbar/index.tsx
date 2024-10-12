"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="bg-white shadow-sm border-b sticky top-0  z-50 backdrop-blur-sm">
      <div className={cn(" container flex mx-auto items-center ", className)}>
        <Image
          src={"/images/logo.png"}
          width={180}
          height={60}
          alt="logo"
          className="bg-cyan-600 mr-2"
        />
        <Menu setActive={setActive} className="hidden sm:flex">
          <MenuItem setActive={setActive} active={active} item="Tra cứu" />
          <MenuItem setActive={setActive} active={active} item="Luyện tập">
            <div className="flex flex-col text-sm">
              <HoveredLink href="/web-dev">Nhận biết</HoveredLink>
              <HoveredLink href="/interface-design">Vận dụng</HoveredLink>
              <HoveredLink href="/seo">Thông hiểu</HoveredLink>
              <HoveredLink href="/branding">Tổng hợp</HoveredLink>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Pricing">
            <div className="flex flex-col text-sm">
              <HoveredLink href="/hobby">Hobby</HoveredLink>
              <HoveredLink href="/individual">Individual</HoveredLink>
              <HoveredLink href="/team">Team</HoveredLink>
              <HoveredLink href="/enterprise">Enterprise</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
        <div className="flex-1 flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className=" flex items-center gap-2 border rounded-md h-fit py-1 px-3 shadow-sm">
                <p className="text-foreground/80">Chung</p>
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>user name</AvatarFallback>
                </Avatar>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
