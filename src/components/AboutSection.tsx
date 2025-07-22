import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Target, Globe, Heart, Zap } from "lucide-react";
import climateTechImage from "@/assets/climate-tech.jpg";
import communityLearningImage from "@/assets/community-learning.jpg";

const AboutSection = () => {
  const sections = [
    {
      id: "who-we-are",
      title: "Who We Are",
      icon: Heart,
      content: `We are a team of climate experts, technologists, and community builders with diverse backgrounds in science, data, and finance. We are united by a shared mission to protect the world's most vulnerable food producers.`,
    },
    {
      id: "what-we-do",
      title: "What We Do",
      icon: Zap,
      content: `We build climate resilience solutions that operate at scale. Our tools, from early warning systems to microinsurance, empower smallholder farmers to thrive despite the challenges posed by an uncertain climate.`,
    },
    {
      id: "our-vision",
      title: "Our Vision",
      icon: Target,
      content: `We envision a world where every farmer has the tools and support needed to build resilience against climate change. A future where food security is strengthened by empowered communities that can adapt and prosper.`,
    },
    {
      id: "global-impact",
      title: "Global Impact",
      icon: Globe,
      content: `Operating across Africa and Asia, we partner with local communities to ensure our solutions are culturally appropriate. Every intervention is designed with farmers to create lasting, scalable change from the ground up.`,
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Building Climate Resilience Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our approach combines cutting-edge technology with deep community
            partnerships to create lasting climate adaptation solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {sections.map((section, index) => (
            <Card
              key={section.id}
              className=" border-border shadow-soft hover:shadow-warm transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary/10 rounded-full mr-4">
                    <section.icon className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">
                    {section.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Metrics with Images */}
        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
          Our Impact in Numbers
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="text-center  rounded-lg p-3 border border-input shadow-sm mb-10">
                    <div className="bg-primary-foreground p-6 rounded-md">
                      <div className="text-xl font-bold text-primary mb-1">
                        92%
                      </div>
                      <div className="text-primary/80 mb-2 text-base">
                        Climate Adaptation Tools Deployed
                      </div>
                      <Progress value={92} className="h-1.5 bg-slate-200" />
                    </div>
                  </div>
                  <div className="text-center  rounded-lg p-3 border border-input shadow-sm">
                    <div className="bg-primary-foreground p-6 rounded-md">
                      <div className="text-xl font-bold text-primary mb-1">
                        78%
                      </div>
                      <div className="text-primary/80 mb-2 text-base">
                        Community Networks Established
                      </div>
                      <Progress value={78} className="h-1.5 bg-slate-200" />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-center  rounded-lg p-3 border border-input shadow-sm mb-10">
                    <div className="bg-primary-foreground p-6 rounded-md">
                      <div className="text-xl font-bold text-primary mb-1">
                        85%
                      </div>
                      <div className="text-primary/80 mb-2 text-base">
                        Financial Protection Coverage
                      </div>
                      <Progress value={85} className="h-1.5 bg-slate-200" />
                    </div>
                  </div>
                  <div className="text-center rounded-lg p-3 border border-input shadow-sm">
                    <div className="bg-primary-foreground p-6 rounded-md">
                      <div className="text-xl font-bold text-primary mb-1">
                        67%
                      </div>
                      <div className="text-primary/80 mb-2 text-base">
                        Farmer Income Improvement
                      </div>
                      <Progress value={67} className="h-1.5 bg-slate-200" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="relative rounded-lg overflow-hidden shadow-warm">
              <img
                src={climateTechImage}
                alt="Climate-smart technology in farming"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold">Smart Technology</h4>
                <p className="text-sm text-white/80">
                  Advanced climate monitoring
                </p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-warm">
              <img
                src={communityLearningImage}
                alt="Community learning and collaboration"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold">Community Impact</h4>
                <p className="text-sm text-white/80">
                  Collaborative learning programs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
