import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Users, BookOpen, Shield, Award, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useForm, ValidationError } from '@formspree/react';


const JoinAgent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    experience: '',
    motivation: ''
  });
  const [state, handleSubmit] = useForm("xblkgaap")
  const { toast } = useToast();

  const benefits = [
    {
      icon: BookOpen,
      title: "Comprehensive Training",
      description: "Access to our climate resilience curriculum and ongoing education"
    },
    {
      icon: Users,
      title: "Community Network",
      description: "Join a global community of changemakers and peer mentors"
    },
    {
      icon: Shield,
      title: "Resource Support",
      description: "Tools, materials, and technological support for your work"
    },
    {
      icon: Award,
      title: "Recognition & Growth",
      description: "Certification, advancement opportunities, and impact measurement"
    }
  ];

  const responsibilities = [
    "Conduct farmer education workshops on climate-smart practices",
    "Help farmers access and understand weather forecasting tools",
    "Facilitate community discussions on climate adaptation strategies",
    "Connect farmers with financial services and insurance options",
    "Collect and report impact data from your community",
    "Provide ongoing support and mentorship to farmers"
  ];

  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Application Submitted!",
        description: "Thank you for your interest. We'll review your application and get back to you within 5 business days.",
        variant: "default",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        experience: '',
        motivation: ''
      });
    }
  }, [state.succeeded, toast]);
 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-hero mt-16">
        <div className="max-w-4xl mx-auto text-center">
         
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Become a <span className="text-transparent bg-primary bg-clip-text">Climate Resilience Agent</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join our network of community champions who are transforming agriculture 
            through climate-smart practices and farmer empowerment.
          </p>
          
          <div className="relative inline-block mt-4">
            <Badge variant="outline" className="px-4 py-2 bg-green-500/10 text-green-700 border-green-200 shadow-sm backdrop-blur-sm animate-float">
              Over 100,000 active agents worldwide
            </Badge>
            {/* Pulsing notification dot at top right, tooltip above dot */}
            <div className="absolute -top-3 -right-1">
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs font-semibold text-yellow-700 bg-white bg-opacity-90 rounded px-2 py-0.5 mb-1 shadow border border-yellow-200 whitespace-nowrap z-10">
                This is our global agent goal
              </span>
              <span className="flex h-4 w-4 relative" aria-label="Goal notification">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-yellow-500 border-2 border-white"></span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* What is an Agent Section */}
      <section className="py-8 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What is a <span className='text-primary'>Klima360 Agent?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our agents are trained community leaders who bridge the gap between climate science 
              and practical farming solutions, bringing resilience directly to farming communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Your Responsibilities</h3>
              <ul className="space-y-3">
                {responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-border shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <benefit.icon className="h-6 w-6 text-primary mr-3" />
                      <h4 className="font-semibold text-card-foreground">{benefit.title}</h4>
                    </div>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 px-4 bg-gradient-subtle">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Make an Impact?
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the application below and join our mission to build climate resilience.
            </p>
          </div>

          <Card className="shadow-warm">
            <CardHeader>
              <CardTitle className="text-center">Agent Application Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Location *
                    </label>
                    <Input
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      placeholder="City, Country"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Relevant Experience
                  </label>
                  <Textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    placeholder="Tell us about your background in agriculture, community work, or climate initiatives..."
                    rows={4}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Why do you want to become a Klima360 Agent? *
                  </label>
                  <Textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    required
                    placeholder="Share your motivation and how you plan to make an impact in your community..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JoinAgent;