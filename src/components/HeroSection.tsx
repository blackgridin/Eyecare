"use client";
import Image from 'next/image';
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle } from 'lucide-react';
import { ScanLine } from 'lucide-react';


const HeroSection = () => {
  return (
    <section id="home" className="relative bg-[#F6FCFF] py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="font-poppins font-bold text-4xl lg:text-6xl text-foreground leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Your Vision, 
              <span className="text-primary"> Our Priority</span>
            </motion.h1>
            <motion.p 
              className="font-open-sans text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Premier eye care with 24+ years of excellence. Advanced treatments, 
              experienced surgeons, and compassionate care for all your vision needs.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <div className="text-2xl font-bold text-primary">50,000+</div>
                <div className="text-sm text-muted-foreground">Surgeries</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                <div className="text-2xl font-bold text-primary">24+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.9 }}
              >
                <div className="text-2xl font-bold text-primary">NABH</div>
                <div className="text-sm text-muted-foreground">Accredditated </div>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90 font-medium" onClick={() => window.open('https://wa.me/919363015155', '_blank')}>
                  <MessageCircle />
                  Book via WhatsApp
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* WhatsApp QR Code Section */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-xl border border-border max-w-sm w-full" 
              style={{ color: '#0180CB' }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-center space-y-4">
                <motion.div 
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto" 
                  style={{ color: '#0180CB' }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <ScanLine />
                </motion.div>
                
                <motion.h3 
                  className="font-poppins font-semibold text-xl text-foreground"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Instant Booking
                </motion.h3>
                
                <motion.p 
                  className="text-muted-foreground text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  Scan QR code to book appointment via WhatsApp
                </motion.p>
                {/* QR Code Placeholder */}
                <motion.div 
                  className="w-48 h-48 rounded-lg flex items-center justify-center mx-auto"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <Image
                    src="/qrpng.png"
                    alt="WhatsApp QR Code for booking"
                    width={192}
                    height={192}
                    className="rounded-lg" 
                  />
                </motion.div>

                <motion.p 
                  className="text-xs text-muted-foreground"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  Or call us directly: <span className="font-medium text-primary">+91-9840088522 / +91-9840174184</span>
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;