"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Eye,
  Heart,
  Scissors,
  Zap,
  Shield,
  Baby,
  Glasses,
  CheckCircle,
  Clock,
  Award,
  MessageCircle,
  Phone,
  ArrowRight,
  Stethoscope,
  Target,
  Activity
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const TreatmentsPage = () => {
  const treatments = [
    {
      id: "comprehensive-eye-examination",
      title: "Comprehensive Eye Examination",
      description: "Complete vision assessment with advanced diagnostic equipment",
      fullDescription: "Our comprehensive eye examination is a thorough evaluation of your visual system and eye health. Using state-of-the-art diagnostic equipment, we assess your vision, detect early signs of eye diseases, and provide personalized recommendations for maintaining optimal eye health.",
      image: "/gallery/WhatsApp Image 2025-09-02 at 13.35.07.jpeg",
      icon: Eye,
      features: [
        "Digital Retinal Imaging",
        "Visual Field Testing", 
        "Tonometry",
        "Refraction Testing"
      ],
      benefits: [
        "Early disease detection",
        "Accurate prescription",
        "Personalized care plan",
        "Peace of mind"
      ]
    },
    {
      id: "cataract-surgery",
      title: "Cataract Surgery",
      description: "Advanced phacoemulsification with premium IOL options",
      fullDescription: "Our cataract surgery uses the latest phacoemulsification technique with premium intraocular lens (IOL) options. This minimally invasive procedure removes clouded lenses and replaces them with clear artificial lenses, restoring your vision with minimal downtime.",
      image: "/gallery/cat.png",
      icon: Scissors,
      features: [
        "Micro-incision Surgery",
        "Same Day Procedure",
        "Quick Recovery",
        "Premium IOL Options"
      ],
      benefits: [
        "Restored clear vision",
        "Reduced dependency on glasses",
        "Quick recovery time",
        "Improved quality of life"
      ]
    },
    {
      id: "lasik-surgery",
      title: "LASIK Surgery",
      description: "Bladeless laser vision correction for refractive errors",
      fullDescription: "Our LASIK surgery offers bladeless laser vision correction using advanced femtosecond technology. This precise procedure corrects refractive errors like nearsightedness, farsightedness, and astigmatism, providing you with clear vision without glasses or contact lenses.",
      image: "/gallery/lasik.png",
      icon: Zap,
      features: [
        "Femtosecond Technology",
        "Custom Wavefront",
        "Lifetime Care",
        "Bladeless Procedure"
      ],
      benefits: [
        "Freedom from glasses",
        "Immediate results",
        "Long-lasting correction",
        "Enhanced lifestyle"
      ]
    },
    {
      id: "glaucoma-treatment",
      title: "Glaucoma Treatment",
      description: "Early detection and management of glaucoma",
      fullDescription: "Our comprehensive glaucoma treatment focuses on early detection and effective management of this silent sight thief. Using advanced OCT scanning and personalized treatment plans, we help preserve your vision and prevent further damage from glaucoma.",
      image: "/gallery/glaucoma.png",
      icon: Shield,
      features: [
        "OCT Scanning",
        "Medical Management",
        "Surgical Options",
        "Regular Monitoring"
      ],
      benefits: [
        "Preserved vision",
        "Prevented progression",
        "Improved eye pressure",
        "Better quality of life"
      ]
    },
    {
      id: "pediatric-eye-care",
      title: "Pediatric Eye Care",
      description: "Specialized care for children's vision problems",
      fullDescription: "Our pediatric eye care services are specially designed for children, providing gentle and comprehensive care for various childhood vision problems. We create a comfortable environment for young patients while delivering expert treatment for conditions like amblyopia, squint, and other pediatric eye disorders.",
      image: "/gallery/ped.png",
      icon: Baby,
      features: [
        "Amblyopia Treatment",
        "Squint Correction",
        "Vision Therapy",
        "Child-Friendly Environment"
      ],
      benefits: [
        "Early intervention",
        "Improved vision development",
        "Better academic performance",
        "Confident childhood"
      ]
    },
    {
      id: "contact-lenses-frames",
      title: "Contact Lenses & Frames",
      description: "Premium eyewear and contact lens solutions",
      fullDescription: "We offer a comprehensive selection of premium eyewear and contact lens solutions to meet your lifestyle needs. From designer frames to specialty lenses, our expert team helps you find the perfect vision correction solution that combines functionality with style.",
      image: "/gallery/WhatsApp Image 2025-09-02 at 13.35.06.jpeg",
      icon: Glasses,
      features: [
        "Designer Frames",
        "Specialty Lenses",
        "Contact Lens Fitting",
        "Style Consultation"
      ],
      benefits: [
        "Enhanced appearance",
        "Comfortable vision",
        "Lifestyle flexibility",
        "Professional styling"
      ]
    }
  ];

  const stats = [
    { number: "50,000+", label: "Successful Procedures", icon: Award },
    { number: "16+", label: "Years Experience", icon: Clock },
    { number: "Curated", label: "Service", icon: Target },
    { number: "Check up", label: "Setup a appoinment instantly", icon: Activity }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/gallery/WhatsApp Image 2025-09-02 at 21.46.26 (6).jpeg"
            alt="Shivas Eye Care Treatments"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-secondary/80" />
        <motion.div 
          className="z-20 p-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our <span className="text-yellow-300">Treatments</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Comprehensive eye care services with advanced technology and expert care
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 font-semibold"
              onClick={() => window.open('https://wa.me/919363015155', '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Book Consultation
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 font-semibold"
              onClick={() => window.open('tel:+919363015155', '_self')}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Advanced Eye Care
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Specialized Treatments
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive eye care services using state-of-the-art technology and expert medical care
            </p>
          </motion.div>

          <div className="space-y-24">
            {treatments.map((treatment, index) => (
              <motion.div
                key={treatment.id}
                className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Content */}
                <motion.div 
                  className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <treatment.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-2">
                        {treatment.features[0]}
                      </Badge>
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                        {treatment.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {treatment.fullDescription}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-4">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center">
                        <Stethoscope className="w-4 h-4 mr-2 text-primary" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {treatment.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </Card>

                    <Card className="p-4">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center">
                        <Heart className="w-4 h-4 mr-2 text-primary" />
                        Benefits
                      </h4>
                      <ul className="space-y-2">
                        {treatment.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>

                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90"
                    onClick={() => window.open('https://wa.me/919363015155', '_blank')}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>

                {/* Image */}
                <motion.div 
                  className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={treatment.image}
                      alt={treatment.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-1">{treatment.title}</h4>
                        <p className="text-sm text-muted-foreground">{treatment.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready for Expert Eye Care?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Don&apos;t wait – your vision is precious. Book a consultation today and take the first step towards better eye health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 font-semibold"
                onClick={() => window.open('https://wa.me/919363015155', '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Book Consultation
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 font-semibold"
                onClick={() => window.open('tel:+919363015155', '_self')}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default TreatmentsPage;
