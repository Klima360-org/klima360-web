import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Peter Ndegwa",
      location: "Nyandarua County, Kenya",
      role: "Maize Farmer",
      quote: "I used to blame bad luck when my crops failed. Now I understand how climate is shifting and how to adapt. That knowledge has changed how I farm.",
      rating: 5
    },
    {
      name: "Judith Achieng'", 
      location: "Embu County, Kenya",
      role: "Coffee Farmer",
      quote: "The training opened my eyes to how climate shocks are getting worse. With better practices, I’ve reduced losses and feel more in control.",
      rating: 5
    },
    {
      name: "Martin Wanyama",
      location: "Bungoma County, Kenya",
      role: "Groundnut Farmer",
      quote: "We were never taught about climate resilience in school. But now, with access to updates and community support, we’re learning together and recovering faster",
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
                  <Quote className="h-6 w-8=6 text-primary mr-3" />
                  <div className="flex text-primary">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-current" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-muted-foreground mb-6 leading-relaxed italic text-sm">
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