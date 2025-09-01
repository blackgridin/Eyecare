import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MessageCircle
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Our Doctors", href: "#doctors" },
    { name: "Contact", href: "#contact" },
    { name: "Emergency Care", href: "#emergency" }
  ];

  const services = [
    "Eye Examination",
    "Cataract Surgery", 
    "LASIK Surgery",
    "Glaucoma Treatment",
    "Diabetic Retinopathy",
    "Pediatric Eye Care"
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <div>
                <h3 className="font-poppins font-bold text-xl">Shivas Eye Care</h3>
                <p className="text-sm text-muted -mt-1">Eye Clinic</p>
              </div>
            </div>
            
            <p className="font-open-sans text-muted">
              Providing exceptional eye care services for over 16 years with advanced 
              technology and compassionate treatment.
            </p>

            {/* Social Links */}
           
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="font-open-sans text-muted hover:text-background transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="font-open-sans text-muted">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="font-open-sans text-muted text-sm">
                  <p>134/1818, 13th Main Rd, Thiruvalluvar Colony,</p>
                  <p>Anna Nagar, Chennai, Tamil Nadu 600040</p>
                  <p>Tamil Nadu, India</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="font-open-sans text-muted text-sm">
                  <p>+91-9840174184</p>
                  <p className="text-xs">Emergency: +91-9363015155</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-open-sans text-muted text-sm">
                  shivaseyecare@gmail.com
                </span>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="font-open-sans text-muted text-sm">
                  <p>Mon-Sat: 9AM - 7PM</p>
                  <p>Sunday: 10AM - 5PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp CTA */}
        

        {/* Bottom Bar */}
        <div className="border-t border-muted/20 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-open-sans text-muted text-sm">
              © {new Date().getFullYear()} Shivas Eye Care, Clinic. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy-policy" className="text-muted hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted hover:text-background transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted hover:text-background transition-colors">
                NABH Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;