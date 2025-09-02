"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  MessageCircle,
  BookOpen,
  ChevronRight,
  Medal,
  Stethoscope,
} from "lucide-react";
import madhavfImage from "./ui/madhavf.jpeg";

const DoctorsSection = () => {
  const doctor = {
    name: "Dr. G. Ramesh Baabu",
    designation: "Consultant Opthalmologist & Director",
    specialization: ["Cataract Surgery", "LASIK", "Glaucoma"],
    experience: "16+ Years",
    qualifications: [
      "MBBS, MS (Ophthalmology)",
      "Fellowship in Cornea & Refractive Surgery",
    ],
    languages: ["English", "Hindi", "Tamil"],
    surgeries: "50000+",
    image: madhavfImage,
  };

  return (
    <section id="doctors" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Meet Our Expert Eye Specialist
          </h2>
          <p className="font-open-sans text-lg text-muted-foreground">
            Our highly qualified ophthalmologist brings extensive experience and
            expertise in advanced eye care treatments and surgeries.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Column: Doctor Card */}
          <div className="lg:col-span-2">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-border overflow-hidden">
              <div className="relative h-80 w-full">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                  {doctor.experience}
                </Badge>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-poppins font-bold text-2xl text-foreground mb-1">
                      {doctor.name}
                    </h3>
                    <p className="font-open-sans text-primary font-medium mb-3">
                      {doctor.designation}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {doctor.specialization.map((spec, idx) => (
                      <Badge key={idx} variant="secondary">
                        {spec}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <GraduationCap className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="font-medium">Education:</span>
                    </div>
                    <ul className="list-disc list-inside pl-2 text-sm text-muted-foreground">
                      {doctor.qualifications.map((qual, idx) => (
                        <li key={idx}>{qual}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-sm text-muted-foreground pt-2">
                    <span className="font-medium">Languages:</span>{" "}
                    {doctor.languages.join(", ")}
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button size="sm" className="flex-1" onClick={() => window.open('https://wa.me/919363015155', '_blank')}>
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Book Appointment
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <BookOpen className="w-4 h-4 mr-2" />
                      View Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Description */}
          <div className="lg:col-span-3 space-y-8 pt-6 lg:pt-0">
            <h3 className="text-3xl font-bold text-gray-900">
              A Profile of Excellence
            </h3>
            <p className="text-sm text-muted-foreground">
              As the Director and Chief Consultant Ophthalmologist, Dr. G.
              Ramesh Baabu is the cornerstone of our clinic&apos;s expertise and
              commitment to quality care.
            </p>

            <Card className="bg-gray-50/70">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Medal className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold">
                      Vast Surgical Experience
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      He has performed over{" "}
                      <span className="font-bold">50,000 surgeries</span>,
                      including complex procedures for cataracts, LASIK, and
                      glaucoma.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50/70">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Stethoscope className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold">
                      Distinguished Career
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Formerly a visiting Consultant at ICF Hospital, Chennai,
                      and a Consultant at both The Hindu Mission Hospital in
                      Tambaram & Rajan Eye Care Hospital in T.Nagar.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="text-sm text-muted-foreground space-y-5">
              <i>
                His dedication to adopting advanced technology and transparent
                procedures ensures a positive and confident patient experience,
                making him one of the most trusted names in ophthalmology.
              </i>
            </p>

            <Link href="/clinic-details">
              <Button size="lg" className="mt-4">
                Learn More About Our Clinic
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;