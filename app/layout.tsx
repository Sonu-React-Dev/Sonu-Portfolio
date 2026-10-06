import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  metadataBase: new URL("https://sonubuilds.github.io/Sonu-Portfolio"),
  title: "Sonu Kumar — Full-Stack Developer",
  description: "Portfolio of Sonu Kumar — Full-Stack Developer specializing in React, React Native, Next.js, Node.js and product engineering.",
  keywords: ["Sonu Kumar", "Full-Stack Developer", "React Developer", "React Native Developer", "Next.js", "Node.js", "JavaScript", "TypeScript"],
  authors: [{ name: "Sonu Kumar" }],
  openGraph: {
    title: "Sonu Kumar — Full-Stack Developer",
    description: "Building modern, scalable web and mobile products.",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Sonu Kumar — Full-Stack Developer" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonu Kumar — Full-Stack Developer",
    description: "Building modern, scalable web and mobile products.",
    images: ["/og-image.png"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
