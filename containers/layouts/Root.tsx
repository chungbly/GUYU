import Navbar from "@/components/Navbar";

function Root({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default Root;
