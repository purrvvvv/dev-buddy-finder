import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ModeToggle } from "@/components/mode-toggle";
import { Providers } from "./provider";
import { Header } from "./header";
import NextTopLoader from 'nextjs-toploader'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev-buddy-Finder",
  description: "Find your next coding buddy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body className={inter.className}>
       <Providers>
             <Header />
             <NextTopLoader />
            {children}
            </Providers>
          </body>

    
    </html>
  );
}
