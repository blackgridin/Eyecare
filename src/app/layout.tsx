import type { Metadata } from "next";
import { Inter, Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Shivs Eye Care Clinic",
  description: "Leading eye clinic with 16+ years experience. Expert cataract surgery, LASIK, glaucoma treatment. Book appointment via WhatsApp.",
  
  openGraph: {
    title: "Shivs Eye Care Clinic",
    description: "Eyecare for everyone",
    type: "website",
    images: ["/favicon.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@shivs_eye_care",
    images: ["/favicon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} ${openSans.variable} font-sans`}>{children}<Analytics /></body>
    </html>
  );
}
