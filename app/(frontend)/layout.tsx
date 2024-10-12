import Root from "@/containers/layouts/Root";
import "@fontsource/inter";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Guyu",
  description: "Guyu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"antialiased"}>
        <Root>{children}</Root>
      </body>
    </html>
  );
}
