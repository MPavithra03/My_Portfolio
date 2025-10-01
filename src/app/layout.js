import "./globals.css";
import Navbar from "../components/Navbar";
import { Zen_Dots } from "next/font/google";

import { Oxanium } from 'next/font/google';

const oxanium = Oxanium({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-oxanium',     
});

const zenDots = Zen_Dots({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-zendots",
});

export const metadata = {
  title: " Pavithra",
  description: "Personal portfolio built with Next.js",
   icons: {
    icon: "/logo.png", },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={zenDots.variable}>
      <body className="bg-black relative text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
