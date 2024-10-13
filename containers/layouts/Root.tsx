import Navbar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";

function Root({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <Navbar />
      {children}
    </SessionProvider>
  );
}

export default Root;
