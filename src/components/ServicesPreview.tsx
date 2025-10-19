import { Home, Building2, Package, Sparkles, Compass, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import bedroomImg from "@/assets/project-bedroom.jpg";
import officeImg from "@/assets/project-office.jpg";
import kitchenImg from "@/assets/project-kitchen.jpg";
import bathroomImg from "@/assets/project-bathroom.jpg";
import restaurantImg from "@/assets/project-restaurant.jpg";

const services = [
  {
    icon: Home,
    image: bedroomImg,
    title: "Residential Design",
    description: "Transform your house into a personalized sanctuary with our comprehensive residential interior design services. We work closely with homeowners to create spaces that reflect their personality, lifestyle, and aspirations.",
    features: ["Space Planning", "Color Consultation", "Furniture Selection", "Custom Millwork"],
  },
  {
    icon: Building2,
    image: officeImg,
    title: "Commercial Spaces",
    description: "Create inspiring work environments that enhance productivity and reflect your brand identity. From corporate offices to retail spaces, we design commercial interiors that make a lasting impression.",
    features: ["Office Design", "Retail Spaces", "Hospitality Design", "Brand Integration"],
  },
  {
    icon: Package,
    image: kitchenImg,
    title: "Custom Furniture",
    description: "Bespoke furniture pieces designed and crafted to perfectly complement your unique space. Each piece is a work of art, combining functionality with aesthetic excellence.",
    features: ["Custom Design", "Premium Materials", "Handcrafted Quality", "Perfect Fit"],
  },
  {
    icon: Sparkles,
    image: bathroomImg,
    title: "Renovation Management",
    description: "Complete renovation project management from concept to completion. We coordinate all aspects of your renovation, ensuring a smooth process and exceptional results.",
    features: ["Project Planning", "Contractor Coordination", "Timeline Management", "Quality Control"],
  },
  {
    icon: Compass,
    image: restaurantImg,
    title: "Design Consultation",
    description: "Expert guidance for your interior design projects. Whether you need a complete design or just professional advice, our consultation services provide the expertise you need.",
    features: ["Style Assessment", "Budget Planning", "Material Selection", "Layout Optimization"],
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-accent/5 via-background to-primary/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[conic-gradient(from_45deg,transparent,rgba(var(--accent-rgb),0.1),transparent)]" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent leading-normal pb-2">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive interior design solutions tailored to bring your vision to life with precision and creativity
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.slice(0, 3).map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-card via-card to-accent/5 backdrop-blur-sm rounded-3xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 border border-accent/20 hover:border-accent/30 relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 group-hover:scale-105 transition-all duration-300">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-display font-bold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-accent mr-3 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Explore Button */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-accent to-accent/80 text-white hover:from-accent/90 hover:to-accent/70 hover:scale-110 hover:shadow-2xl text-lg px-10 py-3 rounded-full font-bold transition-all duration-300">
            <Link to="/services">
              Explore All Services
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
