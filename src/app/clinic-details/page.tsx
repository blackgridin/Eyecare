import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import { Marquee } from "@/components/ui/marquee";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Star, Users, Heart, Eye } from "lucide-react";
import madhavfImage from "@/components/ui/madhavf.png";
import { NumberTicker } from "@/components/magicui/number-ticker";
 




const testimonials = [
    {
        quote: "The best eye care I have ever received. The doctors are very professional and caring.",
        name: "Aarav Patel",
    },
    {
        quote: "I was very impressed with the quality of service and the advanced equipment they have.",
        name: "Priya Sharma",
    },
    {
        quote: "A great experience from start to finish. I would highly recommend Shivas Eye Care to anyone.",
        name: "Rohan Gupta",
    },
    {
        quote: "The staff is very friendly and helpful. They made me feel very comfortable during my visit.",
        name: "Saanvi Singh",
    },
    {
        quote: "Excellent service and care. Dr. Baabu is a fantastic ophthalmologist.",
        name: "Advik Reddy",
    }
];

const teamMembers = [
  {
    name: "Dr. G. Ramesh Baabu",
    role: "Chief Ophthalmic Surgeon",
    image: madhavfImage,
    education: "MBBS, MS (Ophthalmology)",
  }
];


const galleryImages = [
  "/clinimg.png",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
];

const ClinicDetailsPage = () => {
  return (
    <div className="bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-center text-white">
        <Image
          src="/clinimg.png"
          alt="Shivas Eye Care Clinic Interior"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="z-20 p-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Experience World-Class Eye Care
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Combining state-of-the-art technology with a legacy of compassionate and expert care.
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground">
              Our practice is built on a foundation of principles that guide every patient interaction.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Compassion</h3>
              <p className="text-muted-foreground">
                We treat every patient with empathy, respect, and understanding, ensuring a comfortable and supportive environment.
              </p>
            </div>
            <div className="p-6">
              <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                We are committed to the highest standards of clinical excellence and innovation in ophthalmology.
              </p>
            </div>
            <div className="p-6">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-muted-foreground">
                We uphold the utmost integrity in our practice, providing transparent, honest, and ethical care.
              </p>
            </div>
          </div>
        </div>
      </section>

    

      {/* Clinic Gallery Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-bold text-3xl lg:text-4xl text-foreground mb-4">
              A Glimpse of Our Clinic
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our modern and welcoming facilities designed for your comfort and care.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, index) => (
              <div key={index} className="relative h-64 w-full rounded-lg overflow-hidden group">
                <Image src={src} alt={`Clinic Image ${index + 1}`} layout="fill" objectFit="cover" className="group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-bold text-3xl lg:text-4xl text-foreground mb-4">
              What Our Patients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              We are proud to have earned the trust of our community.
            </p>
          </div>
          <div className="relative">
            <Marquee pauseOnHover className="[--duration:40s]">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="w-80 mx-4 flex-shrink-0">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
                    </div>
                    <p className="text-muted-foreground mb-4">"{testimonial.quote}"</p>
                    <p className="font-semibold text-foreground">- {testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </Marquee>
            <Marquee pauseOnHover reverse className="[--duration:40s]">
  {testimonials.map((testimonial, index) => (
    <Card key={index} className="w-80 mx-4 flex-shrink-0">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
          ))}
        </div>
        <p className="text-muted-foreground mb-4">"{testimonial.quote}"</p>
        <p className="font-semibold text-foreground">- {testimonial.name}</p>
      </CardContent>
    </Card>
  ))}
</Marquee>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-white"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-white"></div>
          </div>
        </div>
      </section>
              {/* Meet Our Team Section */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 flex justify-between items-center">
            <div className="text-center max-w-3xl mx-auto mb-16">
  <h2 className="font-bold text-3xl lg:text-4xl text-foreground mb-4">
    Meet Our Dedicated Team
  </h2>
  <p className="text-lg text-muted-foreground">
    Our professionals are the heart of our clinic, committed to your ocular health.
  </p>
</div>
           
          </div>
        <div>

      </div>
          
            
          
    </div>

      <ContactSection />
    </div>

    
  );
};

export default ClinicDetailsPage;