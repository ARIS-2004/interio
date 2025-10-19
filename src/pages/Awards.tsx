import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import InfiniteCarousel from "@/components/InfiniteCarousel";
import { Award, Trophy, Medal, Star, Users, Calendar, Target } from "lucide-react";
import { updatePageMetadata } from "@/lib/metadata";
import { useEffect } from "react";

const awards = [
  {
    year: "2024",
    title: "Best Interior Design Studio",
    organization: "International Design Awards",
    project: "Modern Luxury Residence",
    icon: Trophy,
    image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    year: "2024",
    title: "Excellence in Commercial Design",
    organization: "Architecture + Design Awards",
    project: "TechCorp Headquarters",
    icon: Award,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    year: "2023",
    title: "Innovation in 3D Visualization",
    organization: "Digital Design Excellence",
    project: "Virtual Showroom Experience",
    icon: Star,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    year: "2023",
    title: "Sustainable Design Award",
    organization: "Green Building Council",
    project: "Eco-Conscious Office Space",
    icon: Medal,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    year: "2022",
    title: "Best Residential Project",
    organization: "National Interior Design Awards",
    project: "Coastal Villa Renovation",
    icon: Trophy,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    year: "2022",
    title: "Designer of the Year",
    organization: "Interior Design Magazine",
    project: "Overall Portfolio Excellence",
    icon: Award,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
];

const recognitions = [
  {
    publication: "Architectural Digest",
    feature: "Top 100 Design Firms",
    year: "2024",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    logo: "https://seeklogo.com/images/A/architectural-digest-logo-0A5F8A7F4E-seeklogo.com.png"
  },
  {
    publication: "Elle Decor",
    feature: "Rising Stars in Interior Design",
    year: "2023",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    logo: "https://seeklogo.com/images/E/elle-decor-logo-8B8F8F8F8F-seeklogo.com.png"
  },
  {
    publication: "Interior Design Magazine",
    feature: "Best of Year Awards",
    year: "2023",
    image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    logo: "https://www.interiordesign.net/images/id-logo-2019.png"
  },
  {
    publication: "Design Milk",
    feature: "Innovative Spaces Feature",
    year: "2022",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    logo: "https://design-milk.com/images/2019/01/design-milk-logo.png"
  },
];

const Awards = () => {
  useEffect(() => {
    updatePageMetadata('awards');
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 animate-fade-in">
            Awards & <span className="text-gradient-gold">Recognition</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Our commitment to excellence has been recognized by leading industry organizations and publications
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-4 relative overflow-hidden rounded-3xl mx-4 lg:mx-8">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl p-3 text-center hover:bg-accent/10 transition-all duration-300 hover:scale-105 hover:-translate-y-2 border">
              <p className="text-2xl md:text-3xl font-display font-bold mb-1">50+</p>
              <p className="text-muted-foreground font-medium text-xs">Awards Won</p>
            </div>
            
            <div className="bg-card rounded-2xl p-3 text-center hover:bg-accent/10 transition-all duration-300 hover:scale-105 hover:-translate-y-2 border">
              <p className="text-2xl md:text-3xl font-display font-bold mb-1">15+</p>
              <p className="text-muted-foreground font-medium text-xs">Years Experience</p>
            </div>
            
            <div className="bg-card rounded-2xl p-3 text-center hover:bg-accent/10 transition-all duration-300 hover:scale-105 hover:-translate-y-2 border">
              <p className="text-2xl md:text-3xl font-display font-bold mb-1">25+</p>
              <p className="text-muted-foreground font-medium text-xs">Press Features</p>
            </div>
            
            <div className="bg-card rounded-2xl p-3 text-center hover:bg-accent/10 transition-all duration-300 hover:scale-105 hover:-translate-y-2 border">
              <p className="text-2xl md:text-3xl font-display font-bold mb-1">100%</p>
              <p className="text-muted-foreground font-medium text-xs">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Timeline */}
      <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-accent/5 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(var(--accent-rgb),0.1),transparent_70%)]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-normal pb-2">
                Award-Winning Excellence
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Recognized globally for our innovative designs and exceptional craftsmanship that transforms spaces into extraordinary experiences
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl hover-lift animate-scale-in cursor-pointer"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    aspectRatio: '4/5'
                  }}
                >
                  {/* Background Image */}
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Award Icon */}
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 rounded-full bg-accent/90 flex items-center justify-center">
                      <award.icon className="text-accent-foreground" size={24} />
                    </div>
                  </div>
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                      {award.year}
                    </span>
                  </div>
                  
                  {/* Bottom Text Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="backdrop-blur-sm bg-black/30 rounded-lg p-4 -m-2">
                      <h3 className="text-xl font-display font-bold mb-2 leading-tight">
                        {award.title}
                      </h3>
                      <p className="text-white/90 text-sm mb-2">
                        {award.organization}
                      </p>
                      <p className="text-white/70 text-xs italic">
                        Project: {award.project}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Recognition Carousel */}
      <section className="py-20 bg-gradient-to-br from-accent/5 via-background to-primary/5 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[conic-gradient(from_45deg,transparent,rgba(var(--accent-rgb),0.1),transparent)]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent leading-normal pb-2">
              Featured In Leading Publications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our innovative designs and exceptional craftsmanship have earned recognition from the world's most prestigious design and architecture publications
            </p>
          </div>
          <InfiniteCarousel items={recognitions.map(item => ({ 
            id: item.publication, 
            name: item.publication, 
            logo: item.image,
            brandLogo: item.logo,
            feature: item.feature,
            year: item.year
          }))} speed={30} />
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Awards;