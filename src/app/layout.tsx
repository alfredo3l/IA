import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { APP_NAME, APP_DESCRIPTION } from "@/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
