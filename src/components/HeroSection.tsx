
import Image from 'next/image';
import qrCodeImage from './qrpng.png';


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
          <div className="space-y-6">
            
            
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
                <div className="text-2xl font-bold text-primary">NABH</div>
                <div className="text-sm text-muted-foreground">Accreddited </div>
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
<div className="w-48 h-48 rounded-lg flex items-center justify-center mx-auto">
  <Image
    src={qrCodeImage} // Use the imported variable here
    alt="WhatsApp QR Code for booking"
    width={192}
    height={192}
    className="rounded-lg" 
  />
</div>

                <p className="text-xs text-muted-foreground">
                  Or call us directly: <span className="font-medium text-primary">+91-9840088522</span>
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