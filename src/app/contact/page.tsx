"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Navigation,
  QrCode,
  Calendar,
  Stethoscope,
  Car
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: [
        "Shivas Eye Care Clinic",
        "Anna Nagar, Chennai",
        "Tamil Nadu, India"
      ],
      action: "Get Directions",
      actionIcon: Navigation,
      onClick: () => window.open('https://maps.google.com/?q=Shivas+Eye+Care+Clinic+Anna+Nagar+Chennai', '_blank')
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "+91 93630 15155",
        "Available 24/7 for emergencies",
        "Quick response guaranteed"
      ],
      action: "Call Now",
      actionIcon: Phone,
      onClick: () => window.open('tel:+919363015155', '_self')
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "info@shivaseyecare.com",
        "We respond within 24 hours",
        "Professional consultation available"
      ],
      action: "Send Email",
      actionIcon: Mail,
      onClick: () => window.open('mailto:info@shivaseyecare.com', '_self')
    }
  ];

  const operatingHours = [
    { day: "Monday - Saturday", time: "10:00 AM - 1:00 PM" },
    { day: "Monday - Saturday", time: "3:30 PM - 8:00 PM" },
    { day: "Sunday", time: "10:00 AM -1:00 PM" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact <span className="text-primary">Shivas Eye Care</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ready to take care of your vision? Get in touch with us today. We're here to help with all your eye care needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                      <info.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {info.title}
                    </h3>
                    <div className="space-y-2 mb-6 flex-grow">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className={`${idx === 0 ? 'font-medium text-foreground' : 'text-muted-foreground'} text-sm`}>
                          {detail}
                        </p>
                      ))}
                    </div>
                    <Button 
                      className="w-full" 
                      onClick={info.onClick}
                      variant="outline"
                    >
                      <info.actionIcon className="w-4 h-4 mr-2" />
                      {info.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions & QR Code */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Quick Booking */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Book Your Appointment
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Schedule your consultation quickly and easily through WhatsApp or phone call.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      className="flex-1"
                      onClick={() => window.open('https://wa.me/919363015155?text=Hello,%20I%20would%20like%20to%20book%20an%20appointment%20for%20eye%20consultation.', '_blank')}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Booking
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => window.open('tel:+919363015155', '_self')}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call to Book
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* QR Code & Operating Hours */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* QR Code */}
              <Card className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <QrCode className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Quick Contact QR
                  </h3>
                  <div className="w-32 h-32 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center border">
                    {/* QR Code would go here - placeholder for now */}
                    <div className="text-center">
                      <Image
                        src="/qrpng.png"
                        alt="QR Code to contact Shivas Eye Care"
                        width={120}
                        height={120}
                      />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Scan this QR code to quickly save our contact details to your phone.
                  </p>
                </div>
              </Card>

              {/* Operating Hours */}
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-foreground">
                    Operating Hours
                  </h3>
                </div>
                <div className="space-y-3">
                  {operatingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="text-muted-foreground">{schedule.day}</span>
                      <span className={`font-medium ${schedule.day === 'Emergency' ? 'text-primary' : 'text-foreground'}`}>
                        {schedule.time}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Find Us on the Map
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Located in the heart of Anna Nagar, Chennai. Easy access by public transport and ample parking available.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl border">
              <div className="aspect-video bg-gray-100 relative">
                {/* Embedded Google Maps */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0853!2d80.2085!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzU4LjAiTiA4MMKwMTInMzAuNiJF!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shivas Eye Care Clinic Location"
                  className="absolute inset-0"
                ></iframe>
                
                {/* Overlay with clinic info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground">Shivas Eye Care Clinic</h4>
                        <p className="text-sm text-muted-foreground">Anna Nagar, Chennai</p>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => window.open('https://maps.google.com/?q=Shivas+Eye+Care+Clinic+Anna+Nagar+Chennai', '_blank')}
                        >
                          <Navigation className="w-4 h-4 mr-1" />
                          Directions
                        </Button>
                        <Button 
                          size="sm"
                          onClick={() => window.open('https://wa.me/919363015155', '_blank')}
                        >
                          <MessageCircle className="w-4 h-4 mr-1" />
                          Contact
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center">
                <Car className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Parking Available</h4>
                <p className="text-sm text-muted-foreground">Free parking space available for patients</p>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center">
                <Navigation className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Easy Access</h4>
                <p className="text-sm text-muted-foreground">Well-connected by metro and bus routes</p>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center">
                <Stethoscope className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Greastest Expertise</h4>
                <p className="text-sm text-muted-foreground">Highly Experienaced care taker</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
