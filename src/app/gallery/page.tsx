"use client";

import { motion } from "motion/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";
import { Camera, Users, Award, Heart } from "lucide-react";

// Gallery images data
const galleryImages = [
  {
    src: "/gallery/WhatsApp Image 2025-09-02 at 13.35.06.jpeg",
    alt: "Eye examination room - Modern equipment and comfortable patient area",
    title: "Modern Examination Room"
  },
  {
    src: "/gallery/WhatsApp Image 2025-09-02 at 13.35.07.jpeg",
    alt: "Advanced eye testing equipment for comprehensive diagnosis",
    title: "Advanced Diagnostic Equipment"
  },
  {
    src: "/gallery/WhatsApp Image 2025-09-02 at 13.35.08.jpeg",
    alt: "Reception area with friendly staff and comfortable waiting space",
    title: "Reception & Waiting Area"
  },
  {
    src: "/gallery/WhatsApp Image 2025-09-02 at 13.35.10.jpeg",
    alt: "Surgical suite equipped with latest ophthalmic technology",
    title: "Surgical Suite"
  },
  {
    src: "/gallery/WhatsApp Image 2025-09-02 at 21.46.26.jpeg",
    alt: "Patient consultation room with doctor explaining procedure",
    title: "Patient Consultation"
  },
  {
    src: "/gallery/WhatsApp Image 2025-09-02 at 21.46.26 (1).jpeg",
    alt: "Eye care team providing comprehensive treatment",
    title: "Our Expert Team"
  },
  {
    src: "/gallery/WhatsApp Image 2025-09-02 at 21.46.26 (2).jpeg",
    alt: "State-of-the-art laser treatment equipment",
    title: "Laser Treatment Center"
  },
  {
    src: "/gallery/WhatsApp Image 2025-09-02 at 21.46.26 (3).jpeg",
    alt: "Comfortable recovery area for post-operative care",
    title: "Recovery Area"
  },
  {
    src: "/gallery/WhatsApp Image 2025-09-02 at 21.46.26 (4).jpeg",
    alt: "Vision testing area with comprehensive diagnostic tools",
    title: "Vision Testing Center"
  },
  {
    src: "/gallery/WhatsApp Image 2025-09-02 at 21.46.26 (5).jpeg",
    alt: "Patient care area with comfortable seating",
    title: "Patient Care Area"
  },
  {
    src: "/gallery/WhatsApp Image 2025-09-02 at 21.46.26 (6).jpeg",
    alt: "Medical consultation desk with patient records",
    title: "Consultation Desk"
  },
  {
    src: "/gallery/WhatsApp Image 2025-09-02 at 21.46.26 (7).jpeg",
    alt: "Equipment room with advanced ophthalmic instruments",
    title: "Equipment Room"
  },
  {
    src: "/gallery/WhatsApp Image 2025-09-02 at 21.46.26 (8).jpeg",
    alt: "Treatment room setup for various eye procedures",
    title: "Treatment Room"
  },
  {
    src: "/gallery/WhatsApp Image 2025-09-02 at 21.46.26 (9).jpeg",
    alt: "Patient interaction area with friendly staff",
    title: "Patient Interaction Area"
  },
  {
    src: "/gallery/WhatsApp Image 2025-09-02 at 21.46.27.jpeg",
    alt: "Optical shop with wide range of eyewear options",
    title: "Optical Shop"
  },
  {
    src: "/gallery/WhatsApp Image 2025-09-02 at 21.46.27 (1).jpeg",
    alt: "Doctor explaining treatment options to patient",
    title: "Treatment Consultation"
  },
  {
    src: "/gallery/WhatsApp Image 2025-09-02 at 21.46.27 (2).jpeg",
    alt: "Comprehensive eye check-up in progress",
    title: "Eye Examination"
  },
  {
    src: "/gallery/WhatsApp Image 2025-09-02 at 21.46.27 (3).jpeg",
    alt: "Modern facility with clean and hygienic environment",
    title: "Clean & Modern Facility"
  },
  {
    src: "/gallery/WhatsApp Image 2025-09-02 at 21.46.27 (4).jpeg",
    alt: "Staff room with medical professionals collaborating",
    title: "Medical Staff Collaboration"
  },
  {
    src: "/gallery/WhatsApp Image 2025-09-02 at 21.46.27 (5).jpeg",
    alt: "Final treatment room with specialized equipment",
    title: "Specialized Treatment Area"
  }
];

const stats = [
  { icon: Camera, label: "Equipment", value: "State-of-Art" },
  { icon: Users, label: "Patients Served", value: "10,000+" },
  { icon: Award, label: "Experience", value: "16+ Years" },
  { icon: Heart, label: "Success Rate", value: "99.5%" },
];

const Gallery = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our <span className="text-primary">Clinic Gallery</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Take a virtual tour of our state-of-the-art eye care facility. Our modern clinic 
                is equipped with the latest technology and designed for your comfort and care.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="font-semibold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Explore Our Facility
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Click on any image to view it in full size and navigate through our complete gallery
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <GalleryGrid images={galleryImages} columns={3} gap={6} />
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Experience Our Care?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book your appointment today and experience world-class eye care in our modern facility
              </p>
              <motion.a
                href="https://wa.me/919876543210?text=Hello,%20I%20would%20like%20to%20book%20an%20appointment%20for%20eye%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Appointment
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Gallery;
