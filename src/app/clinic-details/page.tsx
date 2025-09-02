import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import { Marquee } from "@/components/ui/marquee";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "The best eye care I have ever received. The doctors are very professional and caring.",
    name: "John Doe",
  },
  {
    quote: "I was very impressed with the quality of service and the advanced equipment they have.",
    name: "Jane Smith",
  },
  {
    quote: "A great experience from start to finish. I would highly recommend Shivas Eye Care to anyone.",
    name: "Peter Jones",
  },
  {
    quote: "The staff is very friendly and helpful. They made me feel very comfortable during my visit.",
    name: "Mary Williams",
  },
];

const ClinicDetailsPage = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            More About Our Clinic
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            Detailed information about our facilities and services.
          </p>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Testimonials
          </h2>
          <div className="relative mt-8">
            <div className="overflow-hidden">
              <Marquee>
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="mx-4 w-80">
                    <CardContent className="p-6">
                      <p className="text-lg text-gray-600">"{testimonial.quote}"</p>
                      <p className="mt-4 text-right font-semibold text-gray-800">- {testimonial.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
      <ContactSection />
    </div>
  );
};

export default ClinicDetailsPage;
