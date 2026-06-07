import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Subhankar Sahoo | AI & ML Engineer",
  description: "B.Tech CSE student specializing in Artificial Intelligence and Machine Learning. Building the next generation of web and hardware experiences.",
  openGraph: {
    title: "Subhankar Sahoo | AI & ML Engineer",
    description: "Crafting the next generation of AI & ML web experiences.",
    url: "https://subhankarsahoo.qzz.io",
    siteName: "Subhankar Sahoo Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
