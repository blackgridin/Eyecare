"use client";

import { useState, useEffect, useCallback } from "react";
import { X, ExternalLink, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

interface TreatmentData {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  features: string[];
  benefits: string[];
  videoUrl?: string;
  externalLinks?: Array<{
    title: string;
    url: string;
    description: string;
  }>;
}

interface TreatmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  treatment: TreatmentData | null;
}

const TreatmentModal = ({ isOpen, onClose, treatment }: TreatmentModalProps) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleClose = useCallback(() => {
    setIsVideoPlaying(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen || !treatment) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 text-white hover:bg-white/10 rounded-full"
            onClick={handleClose}
          >
            <X className="w-6 h-6" />
          </Button>

          {/* Modal content */}
          <div className="flex items-center justify-center min-h-screen p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
            >
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="mb-8">
                  <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                    Treatment Details
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {treatment.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {treatment.fullDescription}
                  </p>
                </div>

                {/* Video Section */}
                {treatment.videoUrl && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Play className="w-5 h-5 mr-2 text-primary" />
                      Watch Procedure Video
                    </h3>
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                      <iframe
                        src={treatment.videoUrl}
                        title={`${treatment.title} - Educational Video`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  </div>
                )}

                {/* Features and Benefits Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Features */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4 text-primary">
                        Key Features
                      </h3>
                      <ul className="space-y-3">
                        {treatment.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Benefits */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4 text-secondary">
                        Benefits
                      </h3>
                      <ul className="space-y-3">
                        {treatment.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* External Links */}
                {treatment.externalLinks && treatment.externalLinks.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <ExternalLink className="w-5 h-5 mr-2 text-primary" />
                      Learn More Resources
                    </h3>
                    <div className="grid gap-4">
                      {treatment.externalLinks.map((link, index) => (
                        <Card key={index} className="hover:shadow-md transition-shadow">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <h4 className="font-semibold text-foreground mb-1">
                                  {link.title}
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                  {link.description}
                                </p>
                              </div>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => window.open(link.url, '_blank')}
                                className="ml-4 flex-shrink-0"
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Visit
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100">
                  <Button
                    className="flex-1"
                    onClick={() => window.open('https://wa.me/919363015155?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20' + encodeURIComponent(treatment.title), '_blank')}
                  >
                    Book Consultation
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => window.open('tel:+919840088522', '_self')}
                  >
                    Call Now
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TreatmentModal;
