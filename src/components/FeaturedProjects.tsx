import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import bedroomImg from "@/assets/project-bedroom.jpg";
import kitchenImg from "@/assets/project-kitchen.jpg";
import officeImg from "@/assets/project-office.jpg";

const projects = [
  {
    id: 1,
    title: "Modern Luxury Bedroom",
    category: "Residential",
    image: bedroomImg,
    description: "Contemporary elegance with warm tones",
  },
  {
    id: 2,
    title: "Open Concept Kitchen",
    category: "Residential",
    image: kitchenImg,
    description: "Functional beauty in every detail",
  },
  {
    id: 3,
    title: "Executive Office Suite",
    category: "Commercial",
    image: officeImg,
    description: "Sophistication meets productivity",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-accent/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(var(--accent-rgb),0.1),transparent_70%)]" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-normal pb-2">
            Featured <span className="text-gradient-gold">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of award-winning designs that transform ordinary spaces into extraordinary experiences
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/portfolio/${project.id}`}
              className="group bg-gradient-to-br from-card via-card to-accent/5 backdrop-blur-sm rounded-3xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 border border-accent/20 hover:border-accent/30 relative block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
              
              <div className="p-6 relative z-10">
                <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-medium mb-3 inline-block">
                  {project.category}
                </span>
                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center text-accent group-hover:translate-x-2 transition-transform">
                  <span className="text-sm font-medium">View Project</span>
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-accent to-accent/80 text-white hover:from-accent/90 hover:to-accent/70 hover:scale-110 hover:shadow-2xl text-lg px-10 py-3 rounded-full font-bold transition-all duration-300">
            <Link to="/portfolio">
              View All Projects
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
