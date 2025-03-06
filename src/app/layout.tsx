import type { Metadata } from "next";
import "./globals.css";
import {Inter, Calistoga} from 'next/font/google'
import { twMerge } from "tailwind-merge";


const inter = Inter({subsets: ["latin"], variable: "--font-sans"});
const calistoga = Calistoga({
  subsets: ["latin"],
  variable:"--font-serif",
  weight:["400"],
});
export const metadata: Metadata = {
  title: "AhmadEvs - Software Engineer- Full Stack",
  description: "Full-stack Software Engineer skilled in the MERN stack, DevOps, and serverless technologies. Passionate about accessibility and actively contributing to open-source startups.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.variable,calistoga.variable,"bg-gray-900 text-white antialiased font-sans")}>{children}</body>
    </html>
  );
}

