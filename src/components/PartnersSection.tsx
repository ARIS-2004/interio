import InfiniteCarousel from "@/components/InfiniteCarousel";
import { Link } from "react-router-dom";

const partners = [
  {
    name: "Herman Miller",
    logo: "https://logos-world.net/wp-content/uploads/2024/08/Herman-Miller-Logo-1968.png"
  },
  {
    name: "Benjamin Moore",
    logo: "https://vectorified.com/image/benjamin-moore-logo-vector-22.jpg"
  },
  {
    name: "Restoration Hardware",
    logo: "https://tse3.mm.bing.net/th/id/OIP.boWStQ5ajF8lirAWIZFEXAHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    name: "Philips",
    logo: "https://tse1.mm.bing.net/th/id/OIP.oem75_uenBC2d1x7pAZ94QHaHa?cb=12&w=2048&h=2048&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    name: "Kohler",
    logo: "https://asset.brandfetch.io/idk81EBstm/id5fBXpZKZ.jpeg"
  },
  {
    name: "IKEA",
    logo: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "West Elm",
    logo: "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "CB2",
    logo: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }
];

const PartnersSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[conic-gradient(from_45deg,transparent,rgba(var(--primary-rgb),0.1),transparent)]" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-normal pb-2">
            Our Trusted Partners
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Working with the best brands in the industry to deliver exceptional results
          </p>
        </div>
        
        <div className="overflow-hidden">
          <div 
            className="flex animate-scroll-seamless"
            style={{
              width: `${partners.length * 3 * 200}px`,
              animationDuration: '30s'
            }}
          >
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 w-48 h-24 mx-4 bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 overflow-hidden relative"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Partnership CTA */}
        <div className="mt-20 bg-gradient-to-br from-accent/10 via-background to-primary/5 rounded-3xl p-12 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(var(--accent-rgb),0.2),transparent_70%)]" />
          </div>
          
          <div className="relative z-10">

            
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-normal">
              Interested in Partnering With Us?
            </h3>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              We're always looking to collaborate with exceptional brands that share our commitment to quality and design excellence.
            </p>
            
            <Link 
              to="/contact"
              className="inline-block bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-strong hover:-translate-y-1 group"
            >
              Contact Us About Partnership
              <svg className="w-5 h-5 ml-2 inline-block transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;