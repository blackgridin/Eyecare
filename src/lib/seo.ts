import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
}

export function generateSEOMetadata(config: SEOConfig): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://shivaseyecare.in';
  const fullUrl = config.url ? `${baseUrl}${config.url}/` : baseUrl;
  const imageUrl = config.image || '/favicon.png';

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    openGraph: {
      title: config.title,
      description: config.description,
      url: fullUrl,
      type: config.type || 'website',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: config.title,
        },
      ],
      siteName: 'Shivs Eye Care Clinic',
    },
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
      images: [imageUrl],
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}

// Common SEO keywords for the eye clinic
export const eyeClinicKeywords = [
  'eye clinic',
  'cataract surgery',
  'LASIK surgery',
  'glaucoma treatment',
  'retina specialist',
  'pediatric ophthalmology',
  'eye care',
  'ophthalmologist',
  'eye doctor',
  'vision care',
  'eye surgery',
  'diabetic retinopathy',
  'macular disorders',
  'squint surgery',
  'cornea treatment',
  'eye examination',
  'vision correction',
  'eye specialist',
  'refractive surgery',
  'vitreoretinal surgery'
];

// Generate structured data for medical professionals
export function generateDoctorStructuredData(doctor: any) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": doctor.name,
    "jobTitle": doctor.designation,
    "worksFor": {
      "@type": "MedicalOrganization",
      "name": "Shivs Eye Care Clinic"
    },
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Ophthalmologist",
      "occupationLocation": {
        "@type": "City",
        "name": "Chennai"
      }
    },
    "knowsAbout": doctor.specialization,
    "alumniOf": doctor.qualifications,
    "image": doctor.image,
    "description": doctor.bio,
    "url": `https://shivaseyecare.in/doctors/${doctor.id}/`
  };
}

// Generate FAQ structured data
export function generateFAQStructuredData(faqs: Array<{question: string, answer: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}
