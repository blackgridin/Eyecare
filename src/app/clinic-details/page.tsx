"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Eye, 
  Users, 
  Heart, 
  Star, 
  Award, 
  Shield, 
  Clock, 
  Phone, 
  MessageCircle,
  Calendar,
  CheckCircle,
  Stethoscope,
  Building2,
  Lightbulb,
  Target,
  Users2,
  MapPin,
  Mail,
  Quote
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Marquee } from "@/components/ui/marquee";

const ClinicDetailsPage = () => {
  // Gallery images from the clinic
  const galleryImages = [
    {
      src: "/gallery/header.jpeg",
      title: "Sanitised Reception Area"
    },
    {
      src: "/gallery/eq.jpeg",
      title: "Advanced Diagnostic Equipment"
    },
    {
      src: "/gallery/surg.jpeg",
      title: "Surgical Suite"
    },
    {
      src: "/gallery/pat.jpeg",
      title: "Patient Consultation Room"
    },
    {
      src: "/gallery/WhatsApp Image 2025-09-02 at 21.46.26 (5).jpeg",
      title: "Doctor Desk"
    },
    {
      src: "/gallery/WhatsApp Image 2025-09-02 at 21.46.27 (2).jpeg",
      title: "Eye Examination Center"
    }
  ];

  // Filtered positive testimonials
  const testimonials = [
    {
      name: "Gokz SS",
      quote: "Dr.Rameshbabu is known to me for years. Me and my family members have been availing his professional services for last few decades. His hospitality, thorough diagnosis and patient care has been consistently excellent.",
      rating: 5
    },
    {
      name: "Grace Nirmala",
      quote: "Blown away by your dedication and skill! You're not just an ophthalmologist; you're a vision architect, building brighter tomorrows, one perfect prescription and procedure at a time. Truly wow!",
      rating: 5
    },
    {
      name: "V Ragul",
      quote: "Clean facility, professional staff, and timely care. Overall, a positive experience with great attention to patient comfort and needs.",
      rating: 5
    },
    {
      name: "Moni basiya",
      quote: "I have visited shivas eye care twice in the past six months and both times, I had a very pleasant experience. Dr. Ramesh Babu is extremely gentle and caring. Highly recommended for all eye care needs.",
      rating: 5
    },
    {
      name: "Kalpana Palanichamy",
      quote: "I've been here many times. I absolutely love everything about this clinic. The doctor and the staff are absolutely sweet and hospitable. My best ophthalmologist visits so far.",
      rating: 5
    },
    {
      name: "Padma Malini",
      quote: "Thanks to the Doctor and his entire staff for making my mother feel so comfortable during the cataract procedures in both her eyes. She is now able to read and enjoy her hobbies. Grateful to have found this Clinic!",
      rating: 5
    },
    {
      name: "Gilbert Solomon",
      quote: "We as family have been Dr.Ramesh Babu's patients for the last 10 Years. The whole team are kind and courteous. We as a family highly recommend his consultation.",
      rating: 5
    },
    {
      name: "Aarthi Balaji",
      quote: "I have done lasik surgery here, and my whole experience was very nice. Dr.ramesh babu made me so comfortable during the whole procedure and I completely recommend it.",
      rating: 5
    },
    {
      name: "Karthikeyan M",
      quote: "Doctor explained very well to us. The staffs were very kind and guided us properly. Overall the treatment was good.",
      rating: 5
    },
    {
      name: "Ganeshbabu Sekaran",
      quote: "Excellent and compassionate service. Doctor explained the issues in a very detailed manner",
      rating: 5
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "16+ Years Experience",
      description: "Over a decade and half of excellence in eye care"
    },
    {
      icon: Users2,
      title: "50,000+ Surgeries",
      description: "Successful procedures with 99.5% success rate"
    },
    {
      icon: Shield,
      title: "NABH Accredited",
      description: "National quality certification for healthcare excellence"
    },
    {
      icon: Building2,
      title: "Modern Facility",
      description: "State-of-the-art equipment and comfortable environment"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every patient with empathy, respect, and understanding, ensuring a comfortable and supportive environment."
    },
    {
      icon: Eye,
      title: "Clinical Excellence",
      description: "We are committed to the highest standards of clinical excellence and innovation in ophthalmology."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously adopt the latest technology and techniques to provide the most effective treatments."
    },
    {
      icon: Target,
      title: "Patient-Centered",
      description: "Your vision and comfort are our top priorities in every treatment and interaction."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/gallery/header.jpeg"
            alt="Shivas Eye Care Clinic"
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
            About <span className="text-yellow-300">Shivas Eye Care</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Best Ophthalmologist in town is ready to help you!
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
              Book Appointment
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

      {/* About Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                  Established 2002
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Your Vision, <span className="text-primary">Our Mission</span>
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Shivas Eye Care Clinic is a Chennai Based eye hospital. We takes extraordinary care for your precious eyes. Started in Anna Nagar, Chennai in the year 2002, this eye clinic has come out with success in giving quality treatment in a professional way.
                  </p>
                  <p>
                    Over the years, we have added more and more equipment and facilities so as to provide maximum services in-house itself. Our commitment to excellence has made us one of the most trusted eye care centers in Chennai.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/gallery/WhatsApp Image 2025-09-02 at 13.35.06.jpeg"
                  alt="Shivas Eye Care Clinic"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recognized excellence in eye care with a proven track record of success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="text-center p-6 h-full hover:shadow-lg transition-all">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <achievement.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/doctor.png"
                  alt="Dr. G. Ramesh Baabu"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-white text-2xl font-bold">Dr. G. Ramesh Baabu</h3>
                  <p className="text-white/90">Chief Medical Director</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Meet Our <span className="text-primary">Chief Medical Director</span>
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">Dr. G. Ramesh Baabu</strong> is our Chief Medical Director, and a well experienced Consultant Ophthalmic Surgeon. He is really passionate to help patients with their eye problems.
                  </p>
                  <p>
                    With over 16 years of experience and having performed more than 50,000 successful surgeries, Dr. Ramesh Baabu has established himself as one of Chennai&apos;s most trusted ophthalmologists.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4">
                  <div className="text-2xl font-bold text-primary">16+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </Card>
                <Card className="p-4">
                  <div className="text-2xl font-bold text-primary">50,000+</div>
                  <div className="text-sm text-muted-foreground">Surgeries</div>
                </Card>
              </div>

              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                onClick={() => window.open('https://wa.me/919363015155', '_blank')}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Consultation
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our practice and patient care every day
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="text-center p-6 h-full hover:shadow-lg transition-all">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Gallery Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Tour Our Modern Facility
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our state-of-the-art clinic designed for your comfort and exceptional care
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div 
                key={index} 
                className="relative h-64 rounded-xl overflow-hidden group shadow-lg hover:shadow-xl transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <Image 
                  src={image.src} 
                  alt={image.title} 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-sm">{image.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-28 bg-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our Patients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from our valued patients who trust us with their vision via

              <i> Google Reviews</i>
            </p>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Marquee pauseOnHover className="[--duration:60s]">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="w-96 mx-4 flex-shrink-0 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex flex-col h-full min-h-[280px]">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <Quote className="h-8 w-8 text-primary/20 mb-3" />
                    <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center mt-auto">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-grow">
                        <p className="font-semibold text-foreground leading-tight">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground leading-tight">Verified Patient</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </Marquee>
            <Marquee pauseOnHover reverse className="[--duration:60s] mt-4">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="w-96 mx-4 flex-shrink-0 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex flex-col h-full min-h-[280px]">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <Quote className="h-8 w-8 text-primary/20 mb-3" />
                    <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center mt-auto">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-grow">
                        <p className="font-semibold text-foreground leading-tight">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground leading-tight">Verified Patient</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-primary/5"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-primary/5"></div>
          </motion.div>
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
              Ready to Experience Exceptional Eye Care?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of satisfied patients who trust us with their vision. Book your appointment today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 font-semibold"
                onClick={() => window.open('https://wa.me/919363015155', '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Book via WhatsApp
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 font-semibold"
                onClick={() => window.open('https://maps.google.com/?q=Shivas+Eye+Care+Clinic+Anna+Nagar+Chennai', '_blank')}
              >
                <MapPin className="mr-2 h-5 w-5" />
                Visit Our Clinic
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

export default ClinicDetailsPage;
