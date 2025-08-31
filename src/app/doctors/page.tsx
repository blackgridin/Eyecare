import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { doctors, Doctor } from '@/lib/doctorData';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Medal, Stethoscope } from 'lucide-react';

const DoctorCard = ({ doctor }: { doctor: Doctor }) => (
  <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="md:col-span-1">
        <div className="relative h-full w-full min-h-[200px]">
          <Image
            src={doctor.image}
            alt={doctor.name}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="md:col-span-2">
        <CardContent className="p-6">
          <Badge className="mb-2">{doctor.experience} Experience</Badge>
          <h3 className="text-2xl font-bold text-gray-900">{doctor.name}</h3>
          <p className="text-primary font-semibold mt-1">{doctor.designation}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {doctor.specialization.slice(0, 3).map(spec => (
              <Badge key={spec} variant="secondary">{spec}</Badge>
            ))}
          </div>
          <p className="mt-4 text-gray-600 line-clamp-2">{doctor.bio}</p>
          <Button asChild className="mt-6">
            <Link href={`/doctors/${doctor.id}`}>
              View Full Profile <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </div>
    </div>
  </Card>
);

const DoctorsPage = () => {
  const mainDoctor = doctors.find(doc => doc.id === 'g-ramesh-baabu');

  return (
    <div className="bg-gray-50/90">
      <div className="container mx-auto py-24 px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Meet Our Specialists
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of dedicated and experienced ophthalmologists is here to provide you with the best eye care, combining expertise with compassion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-12">
          {/* Left Column: Doctor Grid */}
          <div className="lg:col-span-2 space-y-8">
            {doctors.map(doctor => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>

          {/* Right Column: Main Doctor Description */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24">
              {mainDoctor && (
                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                        <div className="relative h-16 w-16">
                            <Image
                                src={mainDoctor.image}
                                alt={mainDoctor.name}
                                fill
                                className="rounded-full object-cover"
                            />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">{mainDoctor.name}</h3>
                            <p className="text-primary font-medium">{mainDoctor.designation}</p>
                        </div>
                    </div>
                    
                    <div className="mt-6 space-y-4 text-gray-700">
                        <h4 className="text-lg font-semibold text-gray-900 border-b pb-2">Professional Profile</h4>
                        <p>
                            As the Director and Chief Consultant Ophthalmologist, Dr. Baabu is the cornerstone of our clinic's expertise.
                        </p>
                        
                        <div className="flex items-start space-x-3">
                            <Medal className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                            <p>
                                He has vast experience, including performing more than <span className="font-bold text-gray-900">50,000 surgeries</span>, including cataract, LASIK, glaucoma, & other procedures to his credit.
                            </p>
                        </div>

                        <div className="flex items-start space-x-3">
                            <Stethoscope className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                            <p>
                                Formerly, he was a visiting Consultant at ICF Hospital, Chennai, and a Consultant at both The Hindu Mission Hospital in Tambaram & Rajan Eye Care Hospital in T.Nagar.
                            </p>
                        </div>
                        
                        <p className="italic border-t pt-4 mt-4">
                           &quot;{mainDoctor.bio}&quot;
                        </p>
                    </div>

                    <Button asChild className="mt-6 w-full">
                        <Link href={`/doctors/${mainDoctor.id}`}>
                            View Detailed Profile
                        </Link>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsPage;