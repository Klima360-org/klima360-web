import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Amara Kone",
      location: "Mali",
      role: "Rice Farmer",
      quote: "The early warning system helped me protect my crops from unexpected flooding. My harvest improved by 40% this season.",
      rating: 5
    },
    {
      name: "James Mwangi", 
      location: "Kenya",
      role: "Coffee Farmer",
      quote: "Through the community network, I learned drought-resistant techniques that saved my farm. Now I help other farmers too.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      location: "Bangladesh",
      role: "Vegetable Farmer",
      quote: "The microinsurance gave me peace of mind. When the cyclone hit, I had support to replant and recover quickly.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Voices From the Field
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from farmers whose lives have been transformed through 
            our climate resilience programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border shadow-soft hover:shadow-warm transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary mr-3" />
                  <div className="flex text-primary">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-card-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;