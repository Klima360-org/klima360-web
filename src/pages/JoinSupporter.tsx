import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Heart, Lightbulb, Users, Target, ArrowLeft, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useForm } from '@formspree/react';

const JoinSupporter = () => {
  const [state, handleSubmit] = useForm("xzzveaqn");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    supportType: '',
    message: ''
  });
  const { toast } = useToast();

  const supportWays = [
    {
      icon: Heart,
      title: "Donor & Philanthropist",
      description: "Fund direct farmer support programs and technology development",
      impact: "Each $100 supports 5 farmers for a full growing season"
    },
    {
      icon: Lightbulb,
      title: "Policy Maker",
      description: "Advocate for climate-smart agricultural policies and funding",
      impact: "Policy changes can reach thousands of farmers instantly"
    },
    {
      icon: Users,
      title: "Ecosystem Partner",
      description: "Research institutions, tech companies, and advocacy organizations",
      impact: "Collaborative innovation accelerates solution development"
    },
    {
      icon: Target,
      title: "Impact Investor",
      description: "Support sustainable scaling with patient capital and expertise",
      impact: "Investment enables regional expansion and deeper impact"
    }
  ];

  const impactGoals = [
    {
      title: "Reach 100,000 Farmers",
      current: "50,000",
      target: "100,000",
      description: "Direct climate resilience support by 2025"
    },
    {
      title: "Climate-Smart Adoption",
      current: "85%",
      target: "95%",
      description: "Farmers implementing adaptive practices"
    },
    {
      title: "Income Resilience",
      current: "40%",
      target: "75%",
      description: "Average increase in farmer income stability"
    },
    {
      title: "Regional Expansion",
      current: "12",
      target: "20",
      description: "Countries with active programs"
    }
  ];

  const impactSupport = [
    {
      current: '60%',
      title: 'Direct Farmer Support',
      description: 'Training programs, tools, and technology access for farming communities'
    },
    {
      current: '25%',
      title: 'Technology Development',
      description: 'Building and maintaining climate-smart agricultural platforms'
    },
    {
      current: '15%',
      title: 'Operations & Scale',
      description: 'Regional expansion, partnerships, and organizational sustainability'
    }
  ];

  useEffect(() => {
    if(state.succeeded){
      toast({
        title: "Thank You for Your Interest!",
        description: "We appreciate your commitment to climate resilience. Our team will reach out within 2 business days to discuss how you can support our mission.",
      });
      setFormData({
        name: '',
        email: '',
        organization: '',
        supportType: '',
        message: ''
      });
     
    }
  }, [state.succeeded, toast, handleSubmit]);

 

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
            Support Our <span className="text-transparent bg-primary bg-clip-text">Climate Mission</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join donors, policymakers, and ecosystem partners who are powering climate resilience 
            for the world's most vulnerable farming communities.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="px-4 py-2 bg-green-500/10 text-green-700 border-green-200 shadow-sm backdrop-blur-sm animate-pulse"  style={{ animationDelay: "1s" }}>
              $2M+ Mobilized
            </Badge>
            <Badge variant="outline" className="px-4 py-2 bg-green-500/10 text-green-700 border-green-200 shadow-sm backdrop-blur-sm animate-pulse"  style={{ animationDelay: "2s" }}>
              50K+ Lives Impacted
            </Badge>
            <Badge variant="outline" className="px-4 py-2 bg-green-500/10 text-green-700 border-green-200 shadow-sm backdrop-blur-sm animate-pulse"  style={{ animationDelay: "3s" }}>
              Global Network
            </Badge>
          </div>
        </div>
      </section>

      {/* Ways to Support Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ways to Support Climate Resilience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every form of support creates ripple effects that strengthen farming communities worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportWays.map((way, index) => (
              <Card key={index} className="border-border shadow-soft hover:shadow-warm transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <way.icon className="h-8 w-8 text-primary mr-4" />
                    <h3 className="text-xl font-semibold text-card-foreground">
                      {way.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {way.description}
                  </p>
                  <div className="bg-primary/5 rounded-lg p-4">
                    <p className="text-sm font-medium text-primary">
                      Impact: {way.impact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Goals Section */}
      <section className="py-16 px-4 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our 2025 Impact Goals
            </h2>
            <p className="text-xl text-muted-foreground">
              With your support, we're working toward these ambitious targets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactGoals.map((goal, index) => (
              <Card key={index} className="text-center shadow-soft">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-card-foreground mb-3">
                    {goal.title}
                  </h3>
                  
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-primary mb-1">
                      {goal.current}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Target: {goal.target}
                    </div>
                  </div>
                  
                  <div className="w-full bg-secondary rounded-full h-2 mb-3">
                    <div 
                      className="bg-primary h-2 rounded-full"
                      style={{ 
                        width: `${(parseInt(goal.current.replace(/\D/g, '')) / parseInt(goal.target.replace(/\D/g, ''))) * 100}%` 
                      }}
                    ></div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {goal.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How Funds Are Used */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How Your Support Creates Impact
            </h2>
            <p className="text-xl text-muted-foreground">
              Transparent allocation ensures maximum impact for every contribution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactSupport.map((item, idx) => (
              <Card className="text-center" key={item.title}>
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">{item.current}</div>
                  <h3 className="font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 bg-gradient-subtle">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get Involved Today
            </h2>
            <p className="text-xl text-muted-foreground">
              Reach out to learn more about supporting our climate resilience mission.
            </p>
          </div>

          <Card className="shadow-warm">
            <CardHeader>
              <CardTitle className="text-center">Support Interest Form</CardTitle>
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
                      placeholder="Your full name"
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
                      Organization (Optional)
                    </label>
                    <Input
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="Your organization name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Support Type *
                    </label>
                    <Input
                      name="supportType"
                      value={formData.supportType}
                      onChange={handleInputChange}
                      required
                      placeholder="Donor, Policy Maker, Partner, etc."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    How would you like to support our mission? *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us about your interest in supporting climate resilience and how you'd like to get involved..."
                    rows={4}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" className="flex-1 py-2" size="lg">
                    Submit Interest
                  </Button>
                  <Button variant="outline" className="flex-1 py-2" size="lg">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Learn More
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JoinSupporter;