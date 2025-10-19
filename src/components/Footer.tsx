import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Award, Star } from "lucide-react";
import logo from "@/assets/logo 2.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      
      {/* Premium Glass Effect */}
      <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-br from-white/5 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="group w-48 h-36 flex justify-center items-center relative">
              <img src={logo} alt="InterioAura" className="h-56 w-auto rounded-xl transition-all duration-700 group-hover:scale-125 group-hover:-rotate-1 group-hover:drop-shadow-2xl filter group-hover:brightness-125 group-hover:contrast-110 group-hover:saturate-110 relative z-10 shadow-lg" />
            </div>
            <div className="mt-1 text-xs font-medium text-gradient bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent opacity-80">
              Award-Winning Interior Design Studio
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              Transforming spaces into experiences. Award-winning interior design for residential and commercial projects across India.
            </p>
            <div className="flex items-center gap-3 text-sm">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" className="drop-shadow-sm" />
                ))}
              </div>
              <span className="text-white/60 font-medium">50+ Awards Won</span>
            </div>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center hover:from-purple-500/20 hover:to-blue-500/20 hover:scale-110 hover:-translate-y-1 transition-all duration-300 border border-white/10 hover:border-white/20 group"
              >
                <Facebook size={20} className="group-hover:text-blue-400 transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center hover:from-purple-500/20 hover:to-pink-500/20 hover:scale-110 hover:-translate-y-1 transition-all duration-300 border border-white/10 hover:border-white/20 group"
              >
                <Instagram size={20} className="group-hover:text-pink-400 transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center hover:from-blue-500/20 hover:to-cyan-500/20 hover:scale-110 hover:-translate-y-1 transition-all duration-300 border border-white/10 hover:border-white/20 group"
              >
                <Linkedin size={20} className="group-hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links & Services - Side by side on mobile */}
          <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-8 md:gap-0 md:col-span-2 lg:col-span-2">
            {/* Quick Links */}
            <div>
              <h3 className="font-display text-xl mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="text-sm text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group"><span className="w-1 h-1 bg-purple-400 rounded-full mr-3 group-hover:w-2 transition-all"></span>Home</Link></li>
                <li><Link to="/portfolio" className="text-sm text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group"><span className="w-1 h-1 bg-purple-400 rounded-full mr-3 group-hover:w-2 transition-all"></span>Portfolio</Link></li>
                <li><Link to="/services" className="text-sm text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group"><span className="w-1 h-1 bg-purple-400 rounded-full mr-3 group-hover:w-2 transition-all"></span>Services</Link></li>
                <li><Link to="/about" className="text-sm text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group"><span className="w-1 h-1 bg-purple-400 rounded-full mr-3 group-hover:w-2 transition-all"></span>About Us</Link></li>
                <li><Link to="/awards" className="text-sm text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group"><span className="w-1 h-1 bg-purple-400 rounded-full mr-3 group-hover:w-2 transition-all"></span>Awards</Link></li>
                <li><Link to="/blog" className="text-sm text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group"><span className="w-1 h-1 bg-purple-400 rounded-full mr-3 group-hover:w-2 transition-all"></span>Blog</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-display text-xl mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Our Services</h3>
              <ul className="space-y-3">
                <li className="text-sm text-white/70 hover:text-white transition-colors cursor-default flex items-center group"><span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:w-2 transition-all"></span>Residential Design</li>
                <li className="text-sm text-white/70 hover:text-white transition-colors cursor-default flex items-center group"><span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:w-2 transition-all"></span>Commercial Spaces</li>
                <li className="text-sm text-white/70 hover:text-white transition-colors cursor-default flex items-center group"><span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:w-2 transition-all"></span>3D Visualization</li>
                <li className="text-sm text-white/70 hover:text-white transition-colors cursor-default flex items-center group"><span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:w-2 transition-all"></span>Custom Furniture</li>
                <li className="text-sm text-white/70 hover:text-white transition-colors cursor-default flex items-center group"><span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:w-2 transition-all"></span>Space Planning</li>
                <li className="text-sm text-white/70 hover:text-white transition-colors cursor-default flex items-center group"><span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:w-2 transition-all"></span>Consultation</li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-xl mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-4 group hover:translate-x-1 transition-all duration-200">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all">
                  <MapPin size={18} className="text-purple-400" />
                </div>
                <span className="text-sm text-white/70 group-hover:text-white transition-colors leading-relaxed">Action Area II, Newtown,<br />Kolkata, West Bengal 700156</span>
              </li>
              <li className="flex items-center space-x-4 group hover:translate-x-1 transition-all duration-200">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all">
                  <Phone size={18} className="text-green-400" />
                </div>
                <span className="text-sm text-white/70 group-hover:text-white transition-colors">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-4 group hover:translate-x-1 transition-all duration-200">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all">
                  <Mail size={18} className="text-blue-400" />
                </div>
                <span className="text-sm text-white/70 group-hover:text-white transition-colors">hello@interioaura.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-sm text-white/60">
                © {new Date().getFullYear()} InterioAura. All rights reserved.
              </p>
              <div className="hidden md:flex items-center gap-2 text-xs text-white/40">
                <span>Made by</span>
                <a 
                  href="https://mindvergesoftware.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white/60 transition-colors group"
                >
                  <img 
                    src="/MindVerge Logo_R.png" 
                    alt="Mindverge Software Services" 
                    className="h-4 w-auto opacity-60 group-hover:opacity-80 transition-opacity"
                  />
                  Mindverge Software Services
                </a>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <Link to="#" className="text-sm text-white/60 hover:text-white transition-colors hover:underline underline-offset-4">Privacy Policy</Link>
              <Link to="#" className="text-sm text-white/60 hover:text-white transition-colors hover:underline underline-offset-4">Terms & Conditions</Link>
              <Link to="#" className="text-sm text-white/60 hover:text-white transition-colors hover:underline underline-offset-4">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
