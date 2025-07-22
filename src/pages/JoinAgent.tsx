import { useState } from 'react';
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

const JoinAgent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    experience: '',
    motivation: ''
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll review your application and get back to you within 5 business days.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      experience: '',
      motivation: ''
    });
  };

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
      <section className="pt-24 pb-16 px-4 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Become a <span className="text-transparent bg-gradient-earth bg-clip-text">Climate Resilience Agent</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join our network of community champions who are transforming agriculture 
            through climate-smart practices and farmer empowerment.
          </p>
          
          <Badge variant="secondary" className="px-4 py-2 text-base">
            Over 2,000 active agents worldwide
          </Badge>
        </div>
      </section>

      {/* What is an Agent Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What is a Klima360 Agent?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our agents are trained community leaders who bridge the gap between climate science 
              and practical farming solutions, bringing resilience directly to farming communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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

            <div className="grid grid-cols-1 gap-6">
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
            <p className="text-xl text-muted-foreground">
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