import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tiger Taylor",
  description: "Tiger Taylor's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-dvh bg-gradient-to-br from-dark-blue to-purple-blue flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
