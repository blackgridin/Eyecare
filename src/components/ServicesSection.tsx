import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Eye, 
  Zap, 
  Shield, 
  Heart, 
  Baby, 
  Glasses,
  ArrowRight,
  CircleGauge
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Eye,
      title: "Comprehensive Eye Examination",
      description: "Complete vision assessment with advanced diagnostic equipment",
      features: ["Digital Retinal Imaging", "Visual Field Testing", "Tonometry"]
    },
    {
      icon: Zap,
      title: "Cataract Surgery",
      description: "Advanced phacoemulsification with premium IOL options",
      features: ["Micro-incision Surgery", "Same Day Procedure", "Quick Recovery"]
    },
    {
      icon: Shield,
      title: "LASIK Surgery",
      description: "Bladeless laser vision correction for refractive errors",
      features: ["Femtosecond Technology", "Custom Wavefront", "Lifetime Care"]
    },
    {
      icon: CircleGauge,
      title: "Glaucoma Treatment",
      description: "Early detection and management of glaucoma",
      features: ["OCT Scanning", "Medical Management", "Surgical Options"]
    },
    {
      icon: Baby,
      title: "Pediatric Eye Care",
      description: "Specialized care for children's vision problems",
      features: ["Amblyopia Treatment", "Squint Correction", "Vision Therapy"]
    },
    {
      icon: Glasses,
      title: "Contact Lenses & Frames",
      description: "Premium eyewear and contact lens solutions",
      features: ["Designer Frames", "Specialty Lenses", "Contact Lens Fitting"]
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
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/20">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="font-poppins font-semibold text-xl text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="font-open-sans text-muted-foreground mb-4 flex-grow">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="ghost" 
                  className="mt-auto justify-between group-hover:text-primary p-0 h-auto font-medium"
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
    </section>
  );
};

export default ServicesSection;