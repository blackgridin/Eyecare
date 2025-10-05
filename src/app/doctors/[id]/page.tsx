import React from 'react';
import { doctors } from '@/lib/doctorData';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const dynamicParams = false;

export function generateStaticParams() {
  return doctors.map((doctor) => ({ id: doctor.id }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const doctor = doctors.find(d => d.id === params.id);
  
  if (!doctor) {
    return {
      title: 'Doctor Not Found',
      description: 'The requested doctor profile could not be found.',
    };
  }

  return {
    title: `${doctor.name} - ${doctor.designation}`,
    description: `${doctor.name}, ${doctor.designation} at Shivs Eye Care Clinic. ${doctor.experience} experience in ${doctor.specialization.join(', ')}. ${doctor.bio.substring(0, 150)}...`,
    keywords: [
      doctor.name,
      doctor.designation,
      ...doctor.specialization,
      ...doctor.qualifications,
      'eye doctor',
      'ophthalmologist',
      'eye specialist'
    ],
    openGraph: {
      title: `${doctor.name} - ${doctor.designation}`,
      description: `${doctor.name}, expert in ${doctor.specialization.join(', ')} with ${doctor.experience} experience.`,
      type: 'profile',
      images: [
        {
          url: doctor.image,
          width: 400,
          height: 400,
          alt: `${doctor.name} - ${doctor.designation}`,
        },
      ],
    },
    twitter: {
      card: 'summary',
      title: `${doctor.name} - ${doctor.designation}`,
      description: `Expert in ${doctor.specialization.join(', ')} with ${doctor.experience} experience.`,
      images: [doctor.image],
    },
  };
}

const DoctorDetailsPage = ({ params }: { params: { id: string } }) => {
  const doctor = doctors.find(d => d.id === params.id);
  if (!doctor) {
    notFound();
  }

  return (
    <div>
      <h1>Doctor Details</h1>
      <p>Details for doctor with ID: {params.id}</p>
    </div>
  );
};

export default DoctorDetailsPage;
