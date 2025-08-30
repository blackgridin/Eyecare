import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Award, Users, Calendar } from "lucide-react";
import { MessageCircle } from 'lucide-react';
import { ScanLine } from 'lucide-react';


const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-background via-background to-secondary/20 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <Badge className="bg-success/10 text-success border-success/20 font-medium">
              NABH Accredited • ISO 9001:2015 Certified
            </Badge>
            
            <h1 className="font-poppins font-bold text-4xl lg:text-6xl text-foreground leading-tight">
              Your Vision, 
              <span className="text-primary"> Our Priority</span>
            </h1>
            
            <p className="font-open-sans text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Premier eye care with 16+ years of excellence. Advanced treatments, 
              experienced surgeons, and compassionate care for all your vision needs.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50,000+</div>
                <div className="text-sm text-muted-foreground">Surgeries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">16+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98.5%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Emergency Care</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 font-medium">
                <MessageCircle />
                Book via WhatsApp
              </Button>
              
            </div>
          </div>

          {/* WhatsApp QR Code Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-border max-w-sm w-full">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <ScanLine />
                </div>
                
                <h3 className="font-poppins font-semibold text-xl text-foreground">
                  Instant Booking
                </h3>
                
                <p className="text-muted-foreground text-sm">
                  Scan QR code to book appointment via WhatsApp
                </p>

                {/* QR Code Placeholder */}
                <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center mx-auto border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-xs text-gray-500">WhatsApp QR Code</div>
                    <div className="text-xs text-gray-400">+91-98765-43210</div>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground">
                  Or call us directly: <span className="font-medium text-primary">+91-98765-43210</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;