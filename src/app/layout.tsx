import type { Metadata } from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";

export const metadata: Metadata = {
  title: "Somnia Arena",
  description: "Level Up Your Gaming!",
  keywords: "gaming, blockchain, STT tokens, Somnia network, arcade games, strategy games, crypto gaming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Images/favicon.ico" type="image/x-icon" />
      </head>
      <body className="antialiased">
        <ErrorReporter />{children}</body>
    </html>
  );
}
