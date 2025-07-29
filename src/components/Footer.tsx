import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, Leaf, LinkedinIcon, Mail, MapPin, Phone, TwitterIcon, X } from 'lucide-react';
import logoWhite from '@/assets/logo-white.png'; // Update with your logo path

const Footer = () => {
  return (
    <footer className="bg-forest text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 font-bold text-xl mb-6">
              <img src={logoWhite} alt="Klima360 Logo" className="w-20 h-auto object-cover logo" />
            </Link>
            <p className="text-white/80 leading-relaxed">
              Building climate resilience for the world's farmers, one community at a time.
            </p>
            <div>
              <a href="https://www.facebook.com/Klima360" target="_blank" rel="noopener noreferrer" className="inline-block mt-4">
                <FacebookIcon className="h-4 w-4 text-green-500 hover:text-white transition-colors" />
              </a>
              <a href="https://www.twitter.com/Klima360" target="_blank" rel="noopener noreferrer" className="inline-block ml-4">
                <TwitterIcon className="h-4 w-4 text-green-500 hover:text-white transition-colors" />
              </a>
              <a href="https://www.instagram.com/Klima360.world" target="_blank" rel="noopener noreferrer" className="inline-block ml-4">
                <InstagramIcon className="h-4 w-4 text-green-500 hover:text-white transition-colors" />
              </a>
              <a href="https://www.linkedin.com/company/klima360" target="_blank" rel="noopener noreferrer" className="inline-block ml-4">
                <LinkedinIcon className="h-4 w-4 text-green-500 hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/join-agent" className="text-white/80 hover:text-white transition-colors">
                  Join as Agent
                </Link>
              </li>
              <li>
                <Link to="/join-partner" className="text-white/80 hover:text-white transition-colors">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link to="/join-supporter" className="text-white/80 hover:text-white transition-colors">
                  Support Our Mission
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-500" />
                <span className="text-white/80">info@klima360.org</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-500" />
                <span className="text-white/80">+254793702266</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-green-500" />
                <span className="text-white/80">Global Operations</span>
              </li>
            </ul>
          </div>

          {/* Mission */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Mission</h3>
            <p className="text-white/80 leading-relaxed">
              Empowering smallholder farmers with climate-smart tools, community networks, 
              and financial protection to build resilient food systems.
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2025 Klima360. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;