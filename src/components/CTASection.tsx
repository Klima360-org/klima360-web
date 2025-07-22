import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, HandHeart, Briefcase } from 'lucide-react';

const CTASection = () => {
  const actions = [
    {
      title: "Join as Agent",
      description: "Become a climate resilience champion in your community",
      icon: Users,
      href: "/join-agent",
      primary: true
    },
    {
      title: "Partner With Us", 
      description: "Collaborate to scale our impact across regions",
      icon: Briefcase,
      href: "/join-partner",
      primary: false
    },
    {
      title: "Support Our Mission",
      description: "Help us build a more resilient future for farmers",
      icon: HandHeart,
      href: "/join-supporter", 
      primary: false
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-t from-primary to-primary/70">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Build Climate Resilience?
        </h2>
        <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
          Join thousands of changemakers working to protect the world's food systems. 
          Choose how you want to make an impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {actions.map((action, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 border border-input shadow-sm">
              <div className="mb-6">
                <action.icon className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  {action.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {action.description}
                </p>
              </div>
              
              <Button 
                variant={action.primary ? "secondary" : "outline"}
                className={action.primary 
                  ? "bg-white text-primary hover:bg-white/90" 
                  : "border-white text-primary/70 hover:bg-white/10"
                }
                asChild
              >
                <Link to={action.href}>
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;