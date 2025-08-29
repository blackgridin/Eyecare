import React from 'react';

const DoctorDetailsPage = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1>Doctor Details</h1>
      <p>Details for doctor with ID: {params.id}</p>
    </div>
  );
};

export default DoctorDetailsPage;
