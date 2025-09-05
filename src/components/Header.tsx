"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/clinic-details" },
    { name: "Services", href: "/treatments" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-border shadow-sm">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src="/favicon.png" alt="Shivas Eye Care Logo" width={40} height={40} />
            <div>
              <h1 className="font-poppins font-bold text-xl text-primary">Shivas Eye Care</h1>
              <p className="text-xs text-muted-foreground -mt-1">Eye Clinic</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-open-sans text-foreground hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact & WhatsApp 
          <div className="hidden lg:flex items-center space-x-4">
            <div className="text-right">
              <div className="flex items-center space-x-2 text-sm font-medium text-foreground">
                <Phone className="w-4 h-4" />
                <span>+91-9840088522</span>
              </div>
              <p className="text-xs text-muted-foreground">Emergency: 24/7</p>
            </div>
            <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
            */}
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-open-sans text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <div className="flex items-center space-x-2 text-sm font-medium text-foreground mb-2">
                  <Phone className="w-4 h-4" />
                  <span>+91-9840088522 / +91-9840174184</span>
                </div>
                <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Book via WhatsApp
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;