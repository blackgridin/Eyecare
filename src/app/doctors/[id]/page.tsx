import React from 'react';
import { doctors } from '@/lib/doctorData';
import { notFound } from 'next/navigation';

export const dynamicParams = false;

export function generateStaticParams() {
  return doctors.map((doctor) => ({ id: doctor.id }));
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
