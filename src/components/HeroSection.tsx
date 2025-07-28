import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Users, Shield, Sprout } from "lucide-react";
import heroImage from "@/assets/map.png";
import farmerImage from "@/assets/hero-farming.png";

const heroMetrics = [
  { value: '50K+', label: 'Farmers Supported' },
  { value: '5', label: 'Countries Active' },
  { value: '85%', label: 'Resilience Increase' },
];

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden px-4 md:mt-14">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Farmers working in sustainable agriculture"
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-white/70"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10  flex items-center justify-center min-h-screen">
        <div className="max-w-6xl mx-auto text-center h-full">
          <div className="animate-fade-in mt-32 md:mt-0 ">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-stretch min-h-96">
              {/* Main content (left) */}
              <div className="flex-1 w-full text-left flex flex-col justify-center h-full">
                <div className="flex justify-center mb-8">
                  <div className="flex items-center space-x-4 text-primary">
                    <Sprout className="h-8 w-8 animate-float" />
                    <Shield
                      className="h-8 w-8 animate-float"
                      style={{ animationDelay: "0.5s" }}
                    />
                    <Users
                      className="h-8 w-8 animate-float"
                      style={{ animationDelay: "1s" }}
                    />
                  </div>
                </div>

                <h1 className="leading-[2] text-4xl md:text-6xl lg:text-5xl font-bold text-green-900 mb-6 text-left " style={{ lineHeight: "1.5" }}>
                  Resilience for Those Who {""}
                  <span className="text-primary">Feed the World</span>
                </h1>

                <p className="text-lg md:text-lg text-zinc-500 mb-12 max-w-4xl mx-auto leading-loose text-left" style={{ lineHeight: "1.8" }}>
                  Empowering smallholder farmers across Africa and Asia with
                  climate-smart tools, community networks, and financial
                  protection. Building resilient food systems, one farm at a
                  time.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-warm"
                    asChild
                  >
                    <Link to="/join-agent">
                      Join as Agent
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/5 hover:text-green-700"
                    asChild
                  >
                    <Link to="/join-partner">Partner With Us</Link>
                  </Button>
                </div>

                {/* Mobile-only metrics cards (no image, no progress bars) */}
                <div className="mt-10 w-full flex flex-col gap-4 md:hidden">
                  {heroMetrics.map((metric) => (
                    <div key={metric.label} className="bg-primary/10 rounded-lg p-4 text-left shadow-sm">
                      <div className="text-2xl font-bold text-primary">{metric.value}</div>
                      <div className="text-sm text-primary/80">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Image and cards (right) */}
              <div className="flex-1 w-full flex items-center justify-center">
                <div className="w-full relative flex items-center justify-center ml-0 md:ml-32 lg:ml-40 h-full">
                  {/* Farmers Supported - top left (desktop only) */}
                  <div className="hidden md:block absolute -left-20 top-16 z-20">
                    <div className="text-center bg-primary/30 backdrop-blur-md rounded-lg p-3 border border-white/30 shadow-lg">
                      <div className="bg-primary-foreground p-2 rounded-md">
                        <div className="text-lg font-bold text-primary mb-1">50K+</div>
                        <div className="text-primary/80 mb-2 text-xs">Farmers Supported</div>
                        <Progress value={85} className="h-1.5 bg-slate-200" />
                      </div>
                    </div>
                  </div>
                  {/* Countries Active - bottom left */}
                  <div className="hidden md:block absolute left-0 md:-left-20 bottom-16 z-20">
                    <div className="text-center bg-primary/30 backdrop-blur-md rounded-lg p-3 border border-white/30 shadow-lg">
                      <div className="bg-primary-foreground p-2 rounded-md">
                        <div className="text-lg font-bold text-primary mb-1">5</div>
                        <div className="text-primary/80 mb-2 text-xs">Countries Active</div>
                        <Progress value={60} className="h-1.5 bg-slate-200" />
                      </div>
                    </div>
                  </div>
                  {/* Resilience Increase - right side, vertically centered */}
                  <div className="hidden md:block absolute right-0 md:-right-24 top-1/2 -translate-y-1/2 z-20">
                    <div className="text-center bg-primary/30 backdrop-blur-md rounded-lg p-3 border border-white/30 shadow-lg">
                      <div className="bg-primary-foreground p-2 rounded-md">
                        <div className="text-lg font-bold text-primary mb-1">85%</div>
                        <div className="text-primary/80 mb-2 text-xs">Resilience Increase</div>
                        <Progress value={85} className="h-1.5 bg-slate-200" />
                      </div>
                    </div>
                  </div>
                  {/* Center: Image */}
                  <img
                    src={farmerImage}
                    alt="Hero Image"
                    // width={100}
                    // height={800}
                    className="hidden md:block h-[500px] w-full object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
