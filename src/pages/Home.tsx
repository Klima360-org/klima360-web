import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TestimonialSection from '@/components/TestimonialSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;