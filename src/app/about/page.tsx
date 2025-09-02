import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              About Shivas Eye Care
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Best Opthalmologist in town is ready to help you!
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Shivas Eye Care Clinic is a Chennai Based eye hospital. We takes
              extraordinary care for your precious eyes. Started in Anna Nagar,
              Chennai in the year 2002, this eye clinic has come out with
              success in giving quality treatment in a professional way. Over
              the years, we have added more and more equipment and facilities so
              as to provide maximum services in-house itself.
            </p>
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Dr. G. Ramesh Baabu
              </h2>
              <p className="mt-2 text-lg text-gray-500">
                is our Chief Medical Director, and a well experienced Consultant
                Ophthalmic Surgeon. He is really passionate to help patients
                with their eye problems.
              </p>
            </div>
            <Link href="/clinic-details">
              <Button size="lg" className="mt-8">
                Learn More About Our Clinic
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
          <div>
            <Image
              src="/clinimg.png"
              alt="Shivas Eye Care Clinic"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;