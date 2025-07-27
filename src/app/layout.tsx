import type { Metadata } from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";

export const metadata: Metadata = {
  title: "SomniArena - Level Up Your Gaming!",
  description: "Discover stunning games powered by Somnia network and earn STT tokens while having epic gaming sessions! Play STT Mines, Tic Tac Toe vs AI, and Flappy Bird.",
  keywords: "gaming, blockchain, STT tokens, Somnia network, arcade games, strategy games, crypto gaming",
  authors: [{ name: "Somnia Arena" }],
  creator: "Somnia Arena",
  publisher: "Somnia Arena",
  openGraph: {
    title: "Somnia Arena - Level Up Your Gaming!",
    description: "Discover stunning games powered by Somnia network and earn STT tokens while having epic gaming sessions!",
    type: "website",
    url: "https://somniaarena.fun",
    siteName: "SomniaArena",
    images: [
      {
        url: "/Images/logoooo.png",
        width: 1200,
        height: 630,
        alt: "Somnia Arena Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SomniArena - Level Up Your Gaming!",
    description: "Discover stunning games powered by Somnia network and earn STT tokens while having epic gaming sessions!",
    images: ["/Images/logoooo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#00d4ff",
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
