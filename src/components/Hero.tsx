import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollAnimatedSection from "@/components/ScrollAnimatedSection";
import { useParallax } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-living.jpg";
import projectBathroom from "@/assets/project-bathroom.jpg";
import projectBedroom from "@/assets/project-bedroom.jpg";
import projectKitchen from "@/assets/project-kitchen.jpg";
import projectOffice from "@/assets/project-office.jpg";
import projectRestaurant from "@/assets/project-restaurant.jpg";

const Hero = () => {
  const { ref: parallaxRef, offset } = useParallax(0.5);
  
  const images = [
    heroImage,
    projectKitchen,
    projectBedroom,
    projectBathroom,
    projectOffice,
    projectRestaurant
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-screen overflow-hidden group">
      {/* Carousel Background */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
              style={{ backgroundImage: `url(${image})` }}
            />
          </div>
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-900/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimatedSection animation="slideUp" delay={200}>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Transforming Spaces Into
                <span className="block text-gradient-gold mt-2">Experiences</span>
              </h1>
            </ScrollAnimatedSection>
            
            <ScrollAnimatedSection animation="fade" delay={400}>
              <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
                Award-winning interior design that blends innovation, elegance, and functionality for residential and commercial spaces.
              </p>
            </ScrollAnimatedSection>
            
            <ScrollAnimatedSection animation="slideUp" delay={600}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-accent text-accent-foreground hover:bg-accent/90 hover-lift text-lg px-8 hover-3d"
                >
                  <Link to="/portfolio">
                    View Our Portfolio
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline" 
                  className="border-3 border-white text-black hover:bg-white hover:text-primary text-lg px-8 hover-3d bg-white/30 backdrop-blur-sm shadow-xl font-bold"
                >
                  <Link to="/contact">Get a Quote</Link>
                </Button>
              </div>
            </ScrollAnimatedSection>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>


    </div>
  );
};

export default Hero;
