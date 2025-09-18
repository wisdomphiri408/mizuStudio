import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mizu Studio | Photography & Videography in Blantyre",
  description:
    "Mizu Studio is a creative studio in Ndirande, Blantyre specializing in photography, videography, and photo editing. We capture weddings, birthdays, and special events with a professional touch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <div className="pt-21">
          {children}
        </div>
      </body>
    </html>
  );
}
