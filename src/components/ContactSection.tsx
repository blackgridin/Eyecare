
import Image from 'next/image';
import qrCodeImage from './qrpng.png';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  MessageCircle,
  Navigation,
  Calendar,
  Ambulance
} from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: [
        "Shivas Eye Care, Clinic",
        "134/1818, 13th Main Rd, Thiruvalluvar Colony,",
        "Anna Nagar, Chennai, Tamil Nadu 600040",
        "Tamil Nadu, India"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "Main: +91-9840088522",
        "Emergency: +91-9840174184",
        "Appointment: +91-9363015155",
      ]
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: [
        "Monday - Saturday: 9:00 AM - 7:00 PM",
        "Sunday: 10:00 AM - 5:00 PM",
        "Emergency: 24/7 Available",
        "Lunch Break: 1:00 PM - 2:00 PM"
      ]
    },
    {
      icon: Mail,
      title: "Email & Online",
      details: [
        "shivaseyecare@gmail.com",
        
      ]
    }
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#F6FCFF]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Get in Touch with Us
          </h2>
          <p className="font-open-sans text-lg text-muted-foreground">
            Multiple ways to connect with our eye care experts. Book your appointment 
            through WhatsApp for instant confirmation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-poppins font-semibold text-lg text-foreground mb-2">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="font-open-sans text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Map & Quick Actions */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <Card className="border-border">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-secondary/20 to-primary/10 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Navigation className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-poppins font-semibold text-foreground mb-2">
                      Interactive Map
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      T. Nagar, Chennai - 600017
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Action Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-poppins font-semibold text-foreground mb-2">
                    Mail us your queries
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Immidiate response via email
                  </p>
                  <Badge className="bg-primary text-primary-foreground">Available Now</Badge>
                </CardContent>
              </Card>

              <Card className="border-warning/20 bg-warning/5 hover:bg-warning/10 transition-colors cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Ambulance className="w-8 h-8 text-warning mx-auto mb-3" />
                  <h4 className="font-poppins font-semibold text-foreground mb-2">
                    Emergency Care
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    24/7 emergency services
                  </p>
                  <Badge className="bg-warning text-warning-foreground">Call Now</Badge>
                </CardContent>
              </Card>
            </div>

            {/* Large WhatsApp QR */}
            <Card className="border-success/20 bg-white">
              <CardContent className="p-6 text-center">
                <h4 className="font-poppins font-semibold text-foreground mb-4">
                  Scan to Book Appointment
                </h4>
                
                {/* QR Code Placeholder */}
                <div className="w-40 h-40 bg-gray-100 rounded-lg flex items-center justify-center mx-auto border-2 border-dashed border-gray-300 mb-4">
                  <div className="w-48 h-48 rounded-lg flex items-center justify-center mx-auto">
<Image
    src={qrCodeImage} // Use the imported variable here
    alt="WhatsApp QR Code for booking"
    width={192}
    height={192}
    className="rounded-lg" 
  />
</div>
                  </div>


                <p className="text-sm text-muted-foreground mb-4">
                  Scan with your phone camera to open WhatsApp
                </p>
                
                
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;