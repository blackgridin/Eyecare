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
  metadataBase: new URL('https://shivaseyecare.in'),
  title: {
    default: "Shivs Eye Care Clinic - Expert Eye Care & Surgery",
    template: "%s | Shivs Eye Care Clinic"
  },
  description: "Leading eye clinic with 16+ years experience. Expert cataract surgery, LASIK, glaucoma treatment, retina care & pediatric ophthalmology. Book appointment via WhatsApp.",
  keywords: [
    "eye clinic",
    "cataract surgery",
    "LASIK surgery", 
    "glaucoma treatment",
    "retina specialist",
    "pediatric ophthalmology",
    "eye care",
    "ophthalmologist",
    "eye doctor",
    "vision care",
    "eye surgery",
    "diabetic retinopathy",
    "macular disorders",
    "squint surgery"
  ],
  authors: [{ name: "Shivs Eye Care Clinic" }],
  creator: "Shivs Eye Care Clinic",
  publisher: "Shivs Eye Care Clinic",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shivaseyecare.in",
    title: "Shivs Eye Care Clinic - Expert Eye Care & Surgery",
    description: "Leading eye clinic with 16+ years experience. Expert cataract surgery, LASIK, glaucoma treatment. Book appointment today.",
    siteName: "Shivs Eye Care Clinic",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Shivs Eye Care Clinic - Expert Eye Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivs Eye Care Clinic - Expert Eye Care & Surgery",
    description: "Leading eye clinic with 16+ years experience. Expert cataract surgery, LASIK, glaucoma treatment.",
    site: "@shivs_eye_care",
    creator: "@shivs_eye_care",
    images: ["/favicon.png"],
  },
  alternates: {
    canonical: "https://shivaseyecare.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Shivs Eye Care Clinic",
    "description": "Leading eye clinic with 16+ years experience specializing in cataract surgery, LASIK, glaucoma treatment, and comprehensive eye care.",
    "url": "https://shivaseyecare.in",
    "logo": "https://shivaseyecare.in/favicon.png",
    "image": "https://shivaseyecare.in/favicon.png",
    "telephone": "+91-9840088522",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "134/1818, 13th Main Rd, Thiruvalluvar Colony, Anna Nagar, Chennai, Tamil Nadu 600040",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600040",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "13.082680",
      "longitude": "80.270721"
    },
    "openingHours": [
      "Mo-Sa 09:00-18:00"
    ],
    "medicalSpecialty": [
      "Ophthalmology",
      "Cataract Surgery", 
      "LASIK Surgery",
      "Glaucoma Treatment",
      "Retinal Care",
      "Pediatric Ophthalmology"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Eye Care Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Cataract Surgery"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "LASIK Surgery"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure", 
            "name": "Glaucoma Treatment"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/shivseyecare"
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} ${openSans.variable} font-sans`}>{children}<Analytics /></body>
    </html>
  );
}
