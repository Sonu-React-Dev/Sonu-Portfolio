import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SiteChrome } from "@/components/layout/SiteChrome";

import { CommandPalette } from "@/components/conversion/CommandPalette";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const viewport: Viewport = {
  themeColor: "#050508",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sonubuilds.github.io"),
  title: "Sonu Kumar — Full-Stack Developer & Product Engineer",
  description: "Portfolio of Sonu Kumar — Full-Stack Developer with 5+ years of experience specializing in React, React Native, Next.js, Node.js, and product engineering.",
  manifest: "/manifest.json",
  keywords: [
    "Sonu Kumar",
    "Full-Stack Developer",
    "React Developer",
    "React Native Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript",
    "Frontend Engineer",
    "Mobile App Developer",
    "Delhi Developer"
  ],
  authors: [{ name: "Sonu Kumar", url: "https://sonubuilds.github.io" }],
  creator: "Sonu Kumar",
  alternates: {
    canonical: "https://sonubuilds.github.io"
  },
  openGraph: {
    title: "Sonu Kumar — Full-Stack Developer & Product Engineer",
    description: "Building production-ready digital products with clean architecture, thoughtful UX, and strong performance.",
    url: "https://sonubuilds.github.io",
    siteName: "Sonu Kumar Portfolio",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Sonu Kumar — Full-Stack Developer" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonu Kumar — Full-Stack Developer & Product Engineer",
    description: "Building production-ready digital products with clean architecture, thoughtful UX, and strong performance.",
    images: ["/og-image.png"]
  },
  verification: {
    google: "gOcNy3V-OHyaTaGGnN6S9jZXiyKx6VufuQXXCPYFGUk",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://sonubuilds.github.io/#person",
      "name": "Sonu Kumar",
      "jobTitle": "Full-Stack Developer",
      "url": "https://sonubuilds.github.io",
      "sameAs": [
        "https://github.com/SonuBuilds",
        "https://linkedin.com/in/sonu-kumar-3b7072237"
      ],
      "image": "https://sonubuilds.github.io/sonu-profile.webp",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Delhi",
        "addressCountry": "India"
      },
      "email": "mailto:sonugupta6746@gmail.com",
      "knowsAbout": [
        "React.js",
        "React Native",
        "Next.js",
        "Node.js",
        "TypeScript",
        "Redux Toolkit",
        "Supabase",
        "Firebase",
        "REST APIs"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://sonubuilds.github.io/#website",
      "url": "https://sonubuilds.github.io",
      "name": "Sonu Kumar Portfolio",
      "author": {
        "@id": "https://sonubuilds.github.io/#person"
      }
    }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geist.variable} ${geistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <SiteChrome>
            {children}
          </SiteChrome>
          <CommandPalette />
        </ThemeProvider>
      </body>
    </html>
  );
}
