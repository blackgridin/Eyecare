"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import TreatmentModal from "@/components/TreatmentModal";
import { 
  Eye, 
  Zap, 
  Shield, 
  Heart, 
  Baby, 
  Glasses,
  ArrowRight,
  CircleGauge,
  Scissors
} from "lucide-react";

const ServicesSection = () => {
  const router = useRouter();
  const [selectedTreatment, setSelectedTreatment] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Simplified treatments data matching the full treatments page
  const treatments = [
    {
      id: "comprehensive-eye-examination",
      title: "Comprehensive Eye Examination",
      description: "Complete vision assessment with advanced diagnostic equipment",
      fullDescription: "Our comprehensive eye examination is a thorough evaluation of your visual system and eye health. Using state-of-the-art diagnostic equipment, we assess your vision, detect early signs of eye diseases, and provide personalized recommendations for maintaining optimal eye health.",
      image: "/gallery/WhatsApp Image 2025-09-02 at 13.35.07.jpeg",
      icon: Eye,
      features: ["Digital Retinal Imaging", "Visual Field Testing", "Tonometry", "Refraction Testing"],
      benefits: ["Early disease detection", "Accurate prescription", "Personalized care plan", "Peace of mind"],
      externalLinks: [
        {
          title: "American Academy of Ophthalmology - Eye Exams",
          url: "https://www.aao.org/eye-health/tips-prevention/eye-exams-101",
          description: "Learn about the importance of comprehensive eye examinations from leading eye care professionals"
        }
      ]
    },
    {
      id: "cataract-surgery",
      title: "Cataract Surgery",
      description: "Advanced phacoemulsification with premium IOL options",
      fullDescription: "Our cataract surgery uses the latest phacoemulsification technique with premium intraocular lens (IOL) options. This minimally invasive procedure removes clouded lenses and replaces them with clear artificial lenses, restoring your vision with minimal downtime.",
      image: "/gallery/cat.png",
      icon: Scissors,
      videoUrl: "https://www.youtube.com/embed/n_3cG9oeuNo?si=r9pfyP788q1W7N9w&start=151",
      features: ["Micro-incision Surgery", "Same Day Procedure", "Quick Recovery", "Premium IOL Options"],
      benefits: ["Restored clear vision", "Reduced dependency on glasses", "Quick recovery time", "Improved quality of life"],
      externalLinks: [
        {
          title: "American Academy of Ophthalmology - Cataract Surgery",
          url: "https://www.aao.org/eye-health/diseases/what-is-cataract-surgery",
          description: "Comprehensive guide to cataract surgery, recovery, and what to expect"
        }
      ]
    },
    {
      id: "lasik-surgery",
      title: "LASIK Surgery",
      description: "Bladeless laser vision correction for refractive errors",
      fullDescription: "Our LASIK surgery offers bladeless laser vision correction using advanced femtosecond technology. This precise procedure corrects refractive errors like nearsightedness, farsightedness, and astigmatism, providing you with clear vision without glasses or contact lenses.",
      image: "/gallery/lasik.png",
      icon: Zap,
      videoUrl: "https://www.youtube.com/embed/XPDVmBg5DeE?si=pSvUcAUORMWezmkD&start=180",
      features: ["Femtosecond Technology", "Custom Wavefront", "Lifetime Care", "Bladeless Procedure"],
      benefits: ["Freedom from glasses", "Immediate results", "Long-lasting correction", "Enhanced lifestyle"],
      externalLinks: [
        {
          title: "FDA - LASIK Eye Surgery",
          url: "https://www.fda.gov/medical-devices/surgery-devices/lasik-eye-surgery",
          description: "Official FDA information about LASIK surgery safety and effectiveness"
        }
      ]
    },
    {
      id: "glaucoma-treatment",
      title: "Glaucoma Treatment",
      description: "Early detection and management of glaucoma",
      fullDescription: "Our comprehensive glaucoma treatment focuses on early detection and effective management of this silent sight thief. Using advanced OCT scanning and personalized treatment plans, we help preserve your vision and prevent further damage from glaucoma.",
      image: "/gallery/glaucoma.png",
      icon: Shield,
      features: ["OCT Scanning", "Medical Management", "Surgical Options", "Regular Monitoring"],
      benefits: ["Preserved vision", "Prevented progression", "Improved eye pressure", "Better quality of life"],
      externalLinks: [
        {
          title: "Wikipedia - Glaucoma",
          url: "https://en.wikipedia.org/wiki/Glaucoma",
          description: "Comprehensive medical information about glaucoma, types, causes, and treatments"
        }
      ]
    },
    {
      id: "pediatric-eye-care",
      title: "Pediatric Eye Care",
      description: "Specialized care for children's vision problems",
      fullDescription: "Our pediatric eye care services are specially designed for children, providing gentle and comprehensive care for various childhood vision problems. We create a comfortable environment for young patients while delivering expert treatment for conditions like amblyopia, squint, and other pediatric eye disorders.",
      image: "/gallery/ped.png",
      icon: Baby,
      features: ["Amblyopia Treatment", "Squint Correction", "Vision Therapy", "Child-Friendly Environment"],
      benefits: ["Early intervention", "Improved vision development", "Better academic performance", "Confident childhood"],
      externalLinks: [
        {
          title: "American Association for Pediatric Ophthalmology",
          url: "https://aapos.org/",
          description: "Professional organization dedicated to children's eye health and vision care"
        }
      ]
    },
    {
      id: "contact-lenses-frames",
      title: "Contact Lenses & Frames",
      description: "Premium eyewear and contact lens solutions",
      fullDescription: "We offer a comprehensive selection of premium eyewear and contact lens solutions to meet your lifestyle needs. From designer frames to specialty lenses, our expert team helps you find the perfect vision correction solution that combines functionality with style.",
      image: "/gallery/WhatsApp Image 2025-09-02 at 13.35.06.jpeg",
      icon: Glasses,
      features: ["Designer Frames", "Specialty Lenses", "Contact Lens Fitting", "Style Consultation"],
      benefits: ["Enhanced appearance", "Comfortable vision", "Lifestyle flexibility", "Professional styling"],
      externalLinks: [
        {
          title: "American Optometric Association - Contact Lenses",
          url: "https://www.aoa.org/healthy-eyes/vision-and-vision-correction/contact-lenses",
          description: "Professional guidance on contact lens types, care, and safety"
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-[#F6FCFF] -mt-[150px]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Comprehensive Eye Care Services
          </h2>
          <p className="font-open-sans text-lg text-muted-foreground">
            From routine eye exams to advanced surgical procedures, we provide complete 
            eye care solutions using the latest technology and techniques.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/20">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <treatment.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="font-poppins font-semibold text-xl text-foreground mb-3">
                  {treatment.title}
                </h3>
                
                <p className="font-open-sans text-muted-foreground mb-4 flex-grow">
                  {treatment.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {treatment.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="ghost" 
                  className="mt-auto justify-between group-hover:text-primary p-0 h-auto font-medium"
                  onClick={() => {
                    setSelectedTreatment(treatment);
                    setIsModalOpen(true);
                  }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        
        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <a href="/gallery">View Gallery</a>
          </Button>
        </div>
        
      </div>
      
      {/* Treatment Modal */}
      <TreatmentModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedTreatment(null);
        }}
        treatment={selectedTreatment}
      />
    </section>
  );
};

export default ServicesSection;