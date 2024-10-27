'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { removeCookie } from '@/lib/cookie';
import { UserModel } from '@/models/User';
import { useUser } from '@/stores/user';
import { signOut } from 'next-auth/react';
import { useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

function UserMenu({ user }: { user: UserModel }) {
  const setUser = useUser((state) => state.setUser);
  const userNameFallback = user.name
    ?.split(' ')
    ?.map((name) => name[0])
    ?.join('')
    ?.toUpperCase();

  useEffect(() => {
    if (user) {
      setUser(user);
    }
  }, [setUser, user]);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className=" flex items-center gap-2 border rounded-md h-fit py-1 px-3 shadow-sm">
          <p className="text-foreground/80">{user.name}</p>
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>{userNameFallback}</AvatarFallback>
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
  );
}

export default UserMenu;
