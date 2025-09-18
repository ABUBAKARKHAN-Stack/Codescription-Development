import type { Metadata } from "next";
import { Poppins, Audiowide, Orbitron } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { baseUrl, brandName } from "@/constants/constants";
import { Toaster } from "sonner";
import ShootingStars from "@/components/ui/shootingStars";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const audiowide = Audiowide({
  variable: "--font-audiowide",
  subsets: ["latin"],
  weight: ["400"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: `${brandName} | Software Development Company`,
    template: `%s | ${brandName}`
  },
  description: "We are a forward-thinking tech startup helping businesses build modern, scalable, and user-friendly digital solutions. From custom web applications to innovative software products, we combine creativity, technology, and strategy to drive growth and success.",
  icons: {
    icon: "/assets/cs-favicon.svg",
  },
  keywords: [
    "tech startup",
    "software development",
    "custom web applications",
    "tech agency",
    "modern digital solutions",
    "scalable web apps",
  ],
  authors: [{ name: "Awais", url: "" }, { name: "Abubakar", url: "" }],
  creator: brandName,
  publisher: brandName,
  robots: "index, follow",

  openGraph: {
    title: brandName,
    description: "We are a forward-thinking tech startup helping businesses build modern, scalable, and user-friendly digital solutions.",
    url: baseUrl,
    siteName: brandName,
    images: {
      url: "",
      width: 1200,
      height: 630,
      alt: `${brandName}`
    },
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: 'summary_large_image',
    title: `${brandName}`,
    description: "We are a forward-thinking tech startup helping businesses build modern, scalable, and user-friendly digital solutions.",
    creator: "",
    images: [""],
  },
  category: "technology",
  alternates: {
    canonical: baseUrl,
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${audiowide.variable} ${orbitron.variable} font-poppins bg-background h-full w-full min-w-screen overflow-x-hidden antialiased`}
      >
        {/* <LenisProvider> */}
        {children}
        <Toaster position="top-center" duration={2000} />
        <ShootingStars />

        <Analytics />
        <SpeedInsights />
        {/* </LenisProvider> */}
      </body>
    </html>
  );
}
