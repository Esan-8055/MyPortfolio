import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond, Geist_Mono, Montserrat, Syne } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jegatheesan — Software Developer & Full-Stack Developer",
  description:
    "Personal portfolio of Jegatheesan, a Software Developer and B.Tech IT student specializing in full-stack engineering, AI systems, and IoT product development.",
  keywords: [
    "Jegatheesan",
    "Jegatheesan Baskar",
    "Software Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Java Developer",
    "AI Developer",
    "IoT Developer",
    "B.Tech IT",
    "Kalasalingam University",
    "HYBIX IT Solutions",
  ],
  authors: [{ name: "Jegatheesan" }],
  creator: "Jegatheesan",
  openGraph: {
    title: "Jegatheesan — Software Developer | Full-Stack, AI & IoT",
    description:
      "I build practical digital products and intelligent systems that turn real-world problems into usable technology.",
    type: "website",
    locale: "en_US",
    siteName: "Jegatheesan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jegatheesan — Software Developer",
    description:
      "Software Developer | Full-Stack Developer | AI & IoT Enthusiast. Ideas to code. Code to impact.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${jakarta.variable} ${montserrat.variable} ${syne.variable} ${cormorant.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="bg-[#ffffff] text-[#0a0a0a] min-h-screen flex flex-col selection:bg-[#eaf0ff] selection:text-[#2457d6]">
        {children}
      </body>
    </html>
  );
}
