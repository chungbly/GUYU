import Navbar from '@/components/Navbar';
import UserInfo from '@/components/Navbar/user';
import { SessionProvider } from 'next-auth/react';

async function Root({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <Navbar>
        <UserInfo />
      </Navbar>

      {children}
    </SessionProvider>
  );
}

export default Root;
