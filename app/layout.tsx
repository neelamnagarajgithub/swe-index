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

const SITE_URL = "https://sweindex.nagarajneelam.in";
const SITE_NAME = "SWE Index";
const TITLE = "SWE Index — Hackathons, Hiring & Open Source";
const DESCRIPTION =
  "A curated, living list of DSA sheets, system design resources, hackathons, open-source programs, fresher hiring drives, and job platforms for software engineers and students.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: TITLE,
    template: `%s · ${SITE_NAME}`,
  },
  description: DESCRIPTION,

  applicationName: SITE_NAME,
  authors: [{ name: "Neelam Nagaraj", url: "https://nagarajneelam.in" }],
  creator: "Neelam Nagaraj",
  publisher: SITE_NAME,

  keywords: [
    "software engineering resources",
    "hackathons",
    "open source programs",
    "GSoC",
    "Outreachy",
    "DSA sheets",
    "Striver A2Z sheet",
    "NeetCode 150",
    "system design resources",
    "coding interview prep",
    "fresher hiring drives",
    "software engineer jobs",
    "campus placements India",
  ],

  category: "technology",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}