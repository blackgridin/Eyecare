import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  GraduationCap, 
  Calendar, 
  MessageCircle,
  Star,
  BookOpen,
  ChevronRight
} from "lucide-react";

const DoctorsSection = () => {
  const doctors = [
    {
      name: "Dr. G. Ramesh Baabu",
      designation: "Consultant Opthalmologist & Director",
      specialization: ["Cataract Surgery", "LASIK", "Glaucoma"],
      experience: "16+ Years",
      qualifications: ["MBBS, MS (Ophthalmology)", "Fellowship in Cornea & Refractive Surgery"],
      languages: ["English", "Hindi", "Tamil"],
      surgeries: "50000+",
      image: "src/components/ui/madhavf.jpeg"
    }
  ];
 
  return (
    <section id="doctors" className="py-16 lg:py-24 bg-[#F6FCFF]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}

    

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Meet Our Expert Eye Specialist
          </h2>
          <p className="font-open-sans text-lg text-muted-foreground">
            Our highly qualified ophthalmologist brings extensive experience and expertise in advanced eye care treatments and surgeries.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-border overflow-hidden">
              <div className="relative">
                {/* Doctor Image Placeholder */}
                <div className="h-64 bg-gradient-to-br from-secondary/20 to-primary/10 flex items-center justify-center">
                  <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-16 h-16 text-primary" />
                  </div>
                </div>
                
                {/* Experience Badge */}
                <Badge className="absolute top-4 right-4 bg-primary text-white">
                  {doctor.experience}
                </Badge>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Doctor Info */}
                  <div>
                    <h3 className="font-poppins font-bold text-xl text-foreground mb-1">
                      {doctor.name}
                    </h3>
                    <p className="font-open-sans text-primary font-medium mb-2">
                      {doctor.designation}
                    </p>
                  </div>

                  {/* Specializations */}
                  <div className="flex flex-wrap gap-2">
                    {doctor.specialization.map((spec, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>

                  {/* Qualifications */}
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      <span className="font-medium">Education:</span>
                    </div>
                    {doctor.qualifications.map((qual, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground ml-6">
                        • {qual}
                      </p>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg">
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground">With extensive experience in operations and diagonostics</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-primary">{doctor.surgeries}</div>
                      <div className="text-xs text-muted-foreground">Surgeries</div>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">Languages:</span> {doctor.languages.join(", ")}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4">
                    <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Consult
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            <ChevronRight className="w-5 h-5 mr-2" />
            More Info
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;