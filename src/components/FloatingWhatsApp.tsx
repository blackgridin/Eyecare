"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsVisible(scrollTop > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* QR Code Popup */}
      {showQR && (
        <div className="absolute bottom-16 right-0 bg-white rounded-xl shadow-2xl border border-border p-6 w-72 mb-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-poppins font-semibold text-foreground">
              Scan to Book
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowQR(false)}
              className="h-auto p-1"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          
          {/* QR Code Placeholder */}
          <div className="w-40 h-40 bg-gray-100 rounded-lg flex items-center justify-center mx-auto border-2 border-dashed border-gray-300 mb-4">
            <div className="text-center">
              <MessageCircle className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-xs text-gray-500">WhatsApp QR</div>
              <div className="text-xs text-gray-400">+91-98765-43210</div>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground text-center mb-4">
            Scan with your phone camera to start booking
          </p>
          
          <Button 
            className="w-full bg-success hover:bg-success/90 text-white"
            onClick={() => window.open(`https://wa.me/919876543210?text=Hello! I'd like to book an appointment for eye consultation. Please let me know your availability.`, '_blank')}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Open WhatsApp
          </Button>
        </div>
      )}

      {/* Floating Button */}
      <Button
        size="lg"
        className="bg-success hover:bg-success/90 text-white rounded-full w-16 h-16 shadow-2xl hover:scale-105 transition-all duration-300"
        onClick={() => setShowQR(!showQR)}
      >
        <MessageCircle className="w-8 h-8" />
      </Button>
    </div>
  );
};

export default FloatingWhatsApp;