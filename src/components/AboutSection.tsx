import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import nabbImage from "./nabb.png";
import { Marquee } from "@/components/ui/marquee"; // Import Marquee
import { 
  Award, 
  Users, 
  Heart, 
  Shield,
  TrendingUp,
  Clock
} from "lucide-react";

const AboutSection = () => {
  const achievements = [
    {
      icon: Award,
      title: "NABH Accredited",
      description: "National quality certification for healthcare excellence"
    },
    {
      icon: Shield,
      title: "ISO 9001:2015",
      description: "International quality management system certification"
    },
    {
      icon: Users,
      title: "50,000+ Patients",
      description: "Successfully treated with 98.5% satisfaction rate"
    },
    {
      icon: TrendingUp,
      title: "Advanced Technology",
      description: "Latest equipment for precise diagnosis and treatment"
    }
  ];

  const stats = [
    { number: "16+", label: "Years of Excellence" },
    { number: "50,000+", label: "Successful Surgeries" },
    { number: "A+", label: "Highly Rated" }
  ];

  const testimonials = [
{
      name: "Gokz SS",
      quote: "Dr.Rameshbabu is known to me for years. Me and my family members have been availing his professional services for last few decades. His hospitality, thorough diagnosis and patient care has been consistently excellent.",
      rating: 5
    },
    {
      name: "Grace Nirmala",
      quote: "Blown away by your dedication and skill! You're not just an ophthalmologist; you're a vision architect, building brighter tomorrows, one perfect prescription and procedure at a time. Truly wow!",
      rating: 5
    },
    {
      name: "V Ragul",
      quote: "Clean facility, professional staff, and timely care. Overall, a positive experience with great attention to patient comfort and needs.",
      rating: 5
    },
    {
      name: "Moni basiya",
      quote: "I have visited shivas eye care twice in the past six months and both times, I had a very pleasant experience. Dr. Ramesh Babu is extremely gentle and caring. Highly recommended for all eye care needs.",
      rating: 5
    },
    {
      name: "Kalpana Palanichamy",
      quote: "I've been here many times. I absolutely love everything about this clinic. The doctor and the staff are absolutely sweet and hospitable. My best ophthalmologist visits so far.",
      rating: 5
    },
    {
      name: "Padma Malini",
      quote: "Thanks to the Doctor and his entire staff for making my mother feel so comfortable during the cataract procedures in both her eyes. She is now able to read and enjoy her hobbies. Grateful to have found this Clinic!",
      rating: 5
    },
    {
      name: "Gilbert Solomon",
      quote: "We as family have been Dr.Ramesh Babu's patients for the last 10 Years. The whole team are kind and courteous. We as a family highly recommend his consultation.",
      rating: 5
    },
    {
      name: "Aarthi Balaji",
      quote: "I have done lasik surgery here, and my whole experience was very nice. Dr.ramesh babu made me so comfortable during the whole procedure and I completely recommend it.",
      rating: 5
    },
    {
      name: "Karthikeyan M",
      quote: "Doctor explained very well to us. The staffs were very kind and guided us properly. Overall the treatment was good.",
      rating: 5
    },
    {
      name: "Ganeshbabu Sekaran",
      quote: "Excellent and compassionate service. Doctor explained the issues in a very detailed manner",
      rating: 5
    }
  ];

  return (
    <section id="about" className="py-36 lg:py-52 bg-[#F6FCFF]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          
          <div className="space-y-6 -mt-[250px]">
            <div>
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                Established 2002
              </Badge>
              
              <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-foreground mb-4">
                Pioneering Excellence in 
                <span className="text-primary"> Eye Care</span>
              </h2>
              
              <p className="font-open-sans text-lg text-muted-foreground leading-relaxed">
                Shivas Eye Care:  With over 16 years of dedicated ophthalmology experience and a track record of more than 50,000 successful surgeries, we are committed to providing patients with exceptional consulting services and the best possible care. Our advanced technology and transparent procedures ensures a positive and confident patient experience.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-poppins font-semibold text-xl text-foreground">
                Our Core Values
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-open-sans text-muted-foreground">
                    <strong className="text-foreground">Compassionate Care:</strong> Every patient receives personalized attention and empathetic treatment
                  </span>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-open-sans text-muted-foreground">
                    <strong className="text-foreground">Clinical Excellence:</strong> Maintaining the highest standards of medical practice and surgical precision
                  </span>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-open-sans text-muted-foreground">
                    <strong className="text-foreground">Recomended:</strong> Highly recommended by thousands of satisfied patients
                  </span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-6">
            <h3 className="font-poppins font-semibold text-2xl text-foreground text-center lg:text-left">
              Certifications & Achievements
            </h3>
            
            <div className="grid gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                        {achievement.title === "NABH Accredited" ? (
                          <Image src={nabbImage} alt="NABB" width={48} height={48} />
                        ) : (
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <achievement.icon className="w-6 h-6 text-primary" />
                          </div>
                        )}
                      </div>
                      <div>
                        <h4 className="font-poppins font-semibold text-foreground mb-2">
                          {achievement.title}
                        </h4>
                        <p className="font-open-sans text-muted-foreground text-sm">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Mission Statement */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <h4 className="font-poppins font-semibold text-foreground mb-3">
                  Our Mission
                </h4>
                <p className="font-open-sans text-muted-foreground italic">
                  &quot;To provide accessible, comprehensive, and compassionate eye care services 
                  that restore and preserve vision, enabling our patients to live life to the fullest.&quot;
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mt-24">
          <h3 className="font-poppins font-semibold text-3xl text-foreground text-center mb-12">
            What Our Patients Say
          </h3>
          <div className="relative">
            <Marquee pauseOnHover>
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="w-[350px] shrink-0 mx-4 bg-white">
                  <CardContent className="p-6 h-full">
                    <div className="flex h-full flex-col">
                      <p className="font-open-sans text-muted-foreground italic mb-4">
                        &quot;{testimonial.quote}&quot;
                      </p>
                      <div className="mt-auto text-right">
                        <div className="font-poppins font-semibold text-foreground">{testimonial.name}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#F6FCFF] to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#F6FCFF] to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
