import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import ServicesPreview from "@/components/ServicesPreview";
import PartnersSection from "@/components/PartnersSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ScrollAnimatedSection from "@/components/ScrollAnimatedSection";
import Chatbot from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Users, Palette, Star, ArrowRight, Eye, X } from "lucide-react";
import { updatePageMetadata } from "@/lib/metadata";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ConsultationModal from "@/components/ConsultationModal";
import bedroomImg from "@/assets/project-bedroom.jpg";
import kitchenImg from "@/assets/project-kitchen.jpg";
import officeImg from "@/assets/project-office.jpg";
import bathroomImg from "@/assets/project-bathroom.jpg";
import restaurantImg from "@/assets/project-restaurant.jpg";
import heroImg from "@/assets/hero-living.jpg";

const stats = [
  { icon: Award, value: "50+", label: "Awards Won" },
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Palette, value: "1000+", label: "Projects Completed" },
  { icon: Star, value: "15+", label: "Years Experience" },
];

const galleryImages = [
  { image: bedroomImg, category: "Bedroom" },
  { image: kitchenImg, category: "Kitchen" },
  { image: officeImg, category: "Office" },
  { image: bathroomImg, category: "Bathroom" },
  { image: restaurantImg, category: "Commercial" },
  { image: heroImg, category: "Living" },
  { image: bedroomImg, category: "Bedroom" },
  { image: kitchenImg, category: "Kitchen" },
  { image: officeImg, category: "Office" },
  { image: bathroomImg, category: "Bathroom" },
  { image: restaurantImg, category: "Commercial" },
  { image: heroImg, category: "Living" }
];

const categories = ["All", "Bedroom", "Kitchen", "Office", "Bathroom", "Commercial", "Living"];

const Home = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  
  const filteredImages = activeFilter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);
  
  useEffect(() => {
    updatePageMetadata('home');
    // Show modal on page load/refresh
    const timer = setTimeout(() => {
      setShowConsultationModal(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-accent/20 via-primary/10 to-secondary/20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(var(--accent-rgb),0.2),transparent_70%)]" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-normal pb-2">
              Our <span className="text-gradient-gold">Achievements</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Numbers that speak to our commitment to excellence and client satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollAnimatedSection 
                key={index}
                animation="slideUp"
                delay={index * 100}
                className="group bg-gradient-to-br from-card via-card to-accent/5 backdrop-blur-sm rounded-3xl p-8 hover-lift border border-accent/20 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 relative overflow-hidden text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                    <stat.icon className="text-accent" size={36} />
                  </div>
                  <p className="text-4xl font-display font-bold mb-2 text-foreground">{stat.value}</p>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ScrollAnimatedSection animation="fade">
        <FeaturedProjects />
      </ScrollAnimatedSection>
      
      <ScrollAnimatedSection animation="slideUp" delay={200}>
        <ServicesPreview />
      </ScrollAnimatedSection>
      
      <ScrollAnimatedSection animation="slideUp" delay={300}>
        <PartnersSection />
      </ScrollAnimatedSection>
      
      <ScrollAnimatedSection animation="slideUp" delay={400}>
        <Testimonials />
      </ScrollAnimatedSection>

      {/* Gallery Section */}
      <ScrollAnimatedSection animation="slideUp" delay={500} className="py-20 bg-gradient-to-br from-muted/20 via-background to-accent/5 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-normal pb-2">
              Our <span className="text-gradient-gold">Gallery</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              See the changes we have made and the beautiful transformations we've created for our clients
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    activeFilter === category
                      ? "bg-accent text-white"
                      : "bg-accent/10 text-accent hover:bg-accent/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filteredImages.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedImage(item.image)}
              >
                <img
                  src={item.image}
                  alt={`${item.category} ${index + 1}`}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Image Preview Modal */}
        {selectedImage && createPortal(
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center" onClick={() => setSelectedImage(null)}>
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white hover:text-accent transition-colors z-10"
              >
                <X size={24} />
              </button>
              <img
                src={selectedImage}
                alt="Preview"
                className="max-w-[60vw] max-h-[60vh] object-contain rounded-lg"
              />
            </div>
          </div>,
          document.body
        )}
      </ScrollAnimatedSection>

      {/* CTA Section */}
      <ScrollAnimatedSection animation="slideUp" className="py-24 bg-gradient-to-br from-accent/10 via-background to-primary/5 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[conic-gradient(from_45deg,transparent,rgba(var(--accent-rgb),0.1),transparent)]" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <ScrollAnimatedSection animation="slideUp" delay={200}>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-normal pb-2">
              Ready to Transform <span className="text-gradient-gold">Your Space?</span>
            </h2>
          </ScrollAnimatedSection>
          
          <ScrollAnimatedSection animation="fade" delay={400}>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's create something extraordinary together. Schedule a free consultation with our expert designers and bring your vision to life.
            </p>
          </ScrollAnimatedSection>
          
          <ScrollAnimatedSection animation="scale" delay={600}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button asChild size="lg" className="bg-gradient-to-r from-accent to-accent/80 text-white hover:from-accent/90 hover:to-accent/70 hover:scale-110 hover:shadow-2xl text-xl px-12 py-4 rounded-full font-bold transition-all duration-300">
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-white text-xl px-12 py-4 rounded-full font-bold hover:scale-110 hover:shadow-xl transition-all duration-300">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </ScrollAnimatedSection>
        </div>
      </ScrollAnimatedSection>

      <Footer />
      <Chatbot />
      
      <ConsultationModal 
        isOpen={showConsultationModal} 
        onClose={() => setShowConsultationModal(false)} 
      />
    </div>
  );
};

export default Home;
