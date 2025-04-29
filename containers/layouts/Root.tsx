import Navbar from '@/components/Navbar';
import UserInfo from '@/components/Navbar/user';
import { SessionProvider } from 'next-auth/react';
import Footer from './footer';
import { Toaster } from '@/components/ui/toaster';

async function Root({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <Navbar>
        <UserInfo />
      </Navbar>

      {children}
      <Footer />
      <Toaster />
    </SessionProvider>
  );
}

export default Root;
