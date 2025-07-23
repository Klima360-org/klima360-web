import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "@formspree/react";
import {
  Building,
  Calendar,
  Globe,
  Handshake,
  Target
} from "lucide-react";
import { useEffect, useState } from "react";

const JoinPartner = () => {
  const [state, handleSubmit] = useForm("xyzpedaq");
  const [formData, setFormData] = useState({
    organization: "",
    contactName: "",
    email: "",
    phone: "",
    organizationType: "",
    interest: "",
    goals: "",
  });
  const { toast } = useToast();

  const partnerTypes = [
    {
      icon: Building,
      title: "Insurance Companies",
      description:
        "Co-develop microinsurance products tailored for smallholder farmers",
      opportunities: [
        "Product innovation",
        "Risk assessment tools",
        "Claims automation",
      ],
    },
    {
      icon: Handshake,
      title: "Financial Institutions",
      description:
        "Create climate-smart financing solutions for agricultural communities",
      opportunities: [
        "Credit scoring",
        "Digital payments",
        "Investment products",
      ],
    },
    {
      icon: Target,
      title: "Agri-SMEs",
      description:
        "Scale sustainable agricultural practices and supply chain resilience",
      opportunities: [
        "Supply chain mapping",
        "Quality assurance",
        "Market access",
      ],
    },
    {
      icon: Globe,
      title: "NGOs & Development Organizations",
      description:
        "Amplify impact through coordinated community development programs",
      opportunities: [
        "Capacity building",
        "Research collaboration",
        "Policy advocacy",
      ],
    },
  ];

  const partnershipBenefits = [
    "Access to our network of 50,000+ farmers across 12 countries",
    "Co-creation opportunities for innovative climate solutions",
    "Shared impact measurement and reporting frameworks",
    "Joint funding opportunities and grant applications",
    "Cross-sector knowledge exchange and best practices",
    "Brand association with proven climate resilience impact",
  ];

  useEffect(() => {
    if(state.succeeded) {
      toast({
        title: "Partnership Inquiry Submitted!",
        description:
          "Thank you for your interest. Our partnerships team will contact you within 3 business days to discuss opportunities.",
        variant: "default",
      });
      setFormData({
        organization: "",
        contactName: "",
        email: "",
        phone: "",
        organizationType: "",
        interest: "",
        goals: "",
      });
    }
  }, [state.succeeded, toast, setFormData]);


  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-hero mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Partner With{" "}
            <span className="text-transparent bg-primary bg-clip-text">
              Klima360
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join forces with us to scale climate resilience solutions and create
            lasting impact for farming communities worldwide.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Badge
              variant="outline"
              className="px-4 py-2 bg-green-500/10 text-green-700 border-green-200 shadow-sm backdrop-blur-sm animate-pulse" style={{ animationDelay: "1s" }}
            >
              50+ Active Partners
            </Badge>
            <Badge
              variant="outline"
              className="px-4 py-2 bg-green-500/10 text-green-700 border-green-200 shadow-sm backdrop-blur-sm animate-pulse" style={{ animationDelay: "2s" }}
            >
              12 Countries
            </Badge>
            <Badge
              variant="outline"
              className="px-4 py-2 bg-green-500/10 text-green-700 border-green-200 shadow-sm backdrop-blur-sm animate-pulse" style={{ animationDelay: "3s" }}
            >
              Co-invest
            </Badge>
          </div>
        </div>
      </section>

      {/* Partner Types Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We work with diverse organizations to create comprehensive climate
              resilience ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerTypes.map((partner, index) => (
              <Card
                key={index}
                className="border-border shadow-soft hover:shadow-warm transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <partner.icon className="h-8 w-8 text-primary mr-4" />
                    <h3 className="text-xl font-semibold text-card-foreground">
                      {partner.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {partner.description}
                  </p>
                  <div>
                    <h4 className="font-medium text-card-foreground mb-3">
                      Key Opportunities:
                    </h4>
                    <ul className="space-y-2">
                      {partner.opportunities.map((opportunity, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-muted-foreground flex items-center"
                        >
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          {opportunity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-muted-foreground">
              Our partnerships create mutual value while advancing climate
              resilience at scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnershipBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-primary-foreground text-sm font-bold">
                    ✓
                  </span>
                </div>
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's Start a Conversation
            </h2>
            <p className="text-xl text-muted-foreground">
              Tell us about your organization and how we can work together.
            </p>
          </div>

          <Card className="shadow-warm">
            <CardHeader>
              <CardTitle className="text-center">
                Partnership Inquiry Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Organization Name *
                  </label>
                  <Input
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    required
                    placeholder="Your organization name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Contact Name *
                    </label>
                    <Input
                      name="contactName"
                      value={formData.contactName}
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
                      placeholder="your.email@organization.com"
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
                      Organization Type *
                    </label>
                    <Input
                      name="organizationType"
                      value={formData.organizationType}
                      onChange={handleInputChange}
                      required
                      placeholder="Insurance, Bank, NGO, etc."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Partnership Interest *
                  </label>
                  <Textarea
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    required
                    placeholder="What specific partnership opportunities interest you? (e.g., co-developing insurance products, research collaboration, etc.)"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Goals & Objectives
                  </label>
                  <Textarea
                    name="goals"
                    value={formData.goals}
                    onChange={handleInputChange}
                    placeholder="What are your organization's climate resilience or agriculture-related goals? How do you envision this partnership creating impact?"
                    rows={4}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" className="flex-1 w-full py-2" size="lg" >
                    Submit Partnership Inquiry
                  </Button>
                  <Button variant="outline" className="flex-1 w-full py-2" size="lg">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule a Call
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

export default JoinPartner;
