import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TeamFlipCard from "@/components/TeamFlipCard";
import Chatbot from "@/components/Chatbot";
import { Target, Eye, Award } from "lucide-react";
import { updatePageMetadata } from "@/lib/metadata";
import { useEffect } from "react";

const team = [
  {
    name: "Priya Sharma",
    role: "Founder & Lead Designer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    bio: "With over 15 years of experience, Priya brings a unique blend of artistic vision and practical expertise to every project, specializing in luxury residential and commercial spaces.",
  },
  {
    name: "Arjun Patel",
    role: "Senior Interior Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    bio: "Arjun specializes in commercial spaces and sustainable design, creating environments that inspire productivity and well-being while maintaining aesthetic excellence.",
  },
  {
    name: "Kavya Reddy",
    role: "3D Visualization Specialist",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    bio: "Kavya transforms concepts into stunning photorealistic renders, helping clients visualize their dream spaces with cutting-edge 3D technology and artistic flair.",
  },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To create transformative interior spaces that enhance the quality of life and reflect the unique personality of each client, while maintaining the highest standards of design excellence.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To be recognized as the leading interior design firm that seamlessly blends innovation, sustainability, and timeless elegance in every project we undertake.",
  },
  {
    icon: Award,
    title: "Our Values",
    description: "Excellence, integrity, creativity, and sustainability guide every decision we make. We believe in building lasting relationships through exceptional service and outstanding results.",
  },
];

const About = () => {
  useEffect(() => {
    updatePageMetadata('about');
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 animate-fade-in">
            About <span className="text-gradient-gold">Us</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            A passionate team of designers dedicated to transforming spaces and exceeding expectations across India
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-accent/10 via-background to-primary/5 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_30%_40%,rgba(var(--accent-rgb),0.2),transparent_70%)]" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-6 text-center hover:bg-accent/10 transition-all duration-300 hover:scale-105 hover:-translate-y-2 border">
              <p className="text-3xl md:text-4xl font-display font-bold mb-2">25+</p>
              <p className="text-muted-foreground font-medium text-sm">Expert Employees</p>
            </div>
            
            <div className="bg-card rounded-2xl p-6 text-center hover:bg-accent/10 transition-all duration-300 hover:scale-105 hover:-translate-y-2 border">
              <p className="text-3xl md:text-4xl font-display font-bold mb-2">500+</p>
              <p className="text-muted-foreground font-medium text-sm">Happy Clients</p>
            </div>
            
            <div className="bg-card rounded-2xl p-6 text-center hover:bg-accent/10 transition-all duration-300 hover:scale-105 hover:-translate-y-2 border">
              <p className="text-3xl md:text-4xl font-display font-bold mb-2">1000+</p>
              <p className="text-muted-foreground font-medium text-sm">Projects Done</p>
            </div>
            
            <div className="bg-card rounded-2xl p-6 text-center hover:bg-accent/10 transition-all duration-300 hover:scale-105 hover:-translate-y-2 border">
              <p className="text-3xl md:text-4xl font-display font-bold mb-2">15+</p>
              <p className="text-muted-foreground font-medium text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-accent/5 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(var(--accent-rgb),0.1),transparent_70%)]" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-normal pb-2">Our Story</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                From humble beginnings to award-winning excellence
              </p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-accent"></div>
              
              <div className="space-y-12">
                <div className="relative flex items-start gap-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center text-accent-foreground font-bold text-xl shadow-lg z-10">
                    2009
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-card via-card to-accent/5 backdrop-blur-sm rounded-3xl p-8 hover-lift border border-accent/20 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <h3 className="text-2xl font-display font-bold mb-4 text-foreground">The Beginning</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Founded in 2009, InterioAura began with a simple vision: to create interior spaces that inspire, comfort, and elevate the human experience. What started as a small studio in Kolkata has grown into an award-winning design firm.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative flex items-start gap-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center text-accent-foreground font-bold text-xl shadow-lg z-10">
                    2015
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-card via-card to-accent/5 backdrop-blur-sm rounded-3xl p-8 hover-lift border border-accent/20 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <h3 className="text-2xl font-display font-bold mb-4 text-foreground">Expansion & Growth</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Expanded our services across major Indian cities, establishing partnerships with leading architects and contractors. Our team grew to include specialists in commercial design and sustainable materials.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative flex items-start gap-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center text-accent-foreground font-bold text-xl shadow-lg z-10">
                    2020
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-card via-card to-accent/5 backdrop-blur-sm rounded-3xl p-8 hover-lift border border-accent/20 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <h3 className="text-2xl font-display font-bold mb-4 text-foreground">Award Recognition</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Achieved significant industry recognition with over 50 awards for design excellence. Our innovative approach to sustainable luxury design set new standards in the Indian interior design industry.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative flex items-start gap-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center text-accent-foreground font-bold text-xl shadow-lg z-10">
                    2024
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-card via-card to-accent/5 backdrop-blur-sm rounded-3xl p-8 hover-lift border border-accent/20 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <h3 className="text-2xl font-display font-bold mb-4 text-foreground">Today & Beyond</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Today, with over 1,000 completed projects and a team of 25+ experts, we continue to push boundaries in interior design. Our focus remains on creating spaces that are both beautiful and functional, sustainable yet luxurious.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-accent/5 via-background to-primary/5 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[conic-gradient(from_45deg,transparent,rgba(var(--accent-rgb),0.1),transparent)]" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent leading-normal pb-2">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The principles that guide every design decision and client interaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-card via-card to-accent/5 backdrop-blur-sm rounded-3xl p-8 text-center hover-lift border border-accent/20 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 relative overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 relative z-10">
                  <value.icon className="text-accent" size={36} />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4 text-foreground relative z-10">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-accent/5 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(var(--accent-rgb),0.1),transparent_60%)]" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-normal pb-2">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The talented designers behind our award-winning projects, bringing creativity and expertise to every space
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <TeamFlipCard key={index} member={member} index={index} />
            ))}
          </div>
          

        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default About;
