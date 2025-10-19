import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Eye, Calendar } from "lucide-react";
import { updatePageMetadata } from "@/lib/metadata";
import bedroomImg from "@/assets/project-bedroom.jpg";
import kitchenImg from "@/assets/project-kitchen.jpg";
import officeImg from "@/assets/project-office.jpg";
import bathroomImg from "@/assets/project-bathroom.jpg";
import restaurantImg from "@/assets/project-restaurant.jpg";

const categories = ["All", "Residential", "Commercial", "Renovation", "Luxury"];

const projects = [
  {
    id: 1,
    title: "Modern Luxury Bedroom",
    category: "Residential",
    image: bedroomImg,
    year: "2024",
    description:
      "A sophisticated bedroom design combining modern luxury with comfort",
    tags: ["Luxury", "Modern"],
  },
  {
    id: 2,
    title: "Open Concept Kitchen",
    category: "Residential",
    image: kitchenImg,
    year: "2024",
    description:
      "Contemporary kitchen design with seamless open concept layout",
    tags: ["Contemporary", "Family-Friendly"],
  },
  {
    id: 3,
    title: "Executive Office Suite",
    category: "Commercial",
    image: officeImg,
    year: "2023",
    description:
      "Modern executive office balancing professionalism with creativity",
    tags: ["Commercial", "Biophilic"],
  },
  {
    id: 4,
    title: "Spa-Like Bathroom Retreat",
    category: "Renovation",
    image: bathroomImg,
    year: "2023",
    description: "Luxurious bathroom renovation with spa-inspired elements",
    tags: ["Luxury", "Spa-Inspired"],
  },
  {
    id: 5,
    title: "Upscale Restaurant Interior",
    category: "Commercial",
    image: restaurantImg,
    year: "2024",
    description:
      "Elegant restaurant design creating memorable dining experiences",
    tags: ["Hospitality", "Elegant"],
  },
  {
    id: 6,
    title: "Contemporary Living Space",
    category: "Residential",
    image: bedroomImg,
    year: "2023",
    description: "Modern living space with clean lines and functional design",
    tags: ["Contemporary", "Minimalist"],
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    updatePageMetadata('portfolio');
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (p) =>
            p.category === activeCategory || p.tags.includes(activeCategory)
        );

  const displayedProjects = filteredProjects.slice(0, visibleProjects);
  const hasMore = visibleProjects < filteredProjects.length;

  const loadMore = () => {
    if (loading || !hasMore) return;
    setLoading(true);
    setTimeout(() => {
      setVisibleProjects(prev => prev + 3);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    setVisibleProjects(3);
  }, [activeCategory]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1000) {
        loadMore();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 animate-fade-in">
            Our <span className="text-gradient-gold">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            A showcase of our award-winning interior design projects that blend
            innovation, elegance, and functionality
          </p>
        </div>
      </section>
      {/* Projects Grid */}
      <section className="pt-0 pb-20 bg-gradient-to-br from-muted/20 via-background to-accent/5 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(var(--accent-rgb),0.1),transparent_60%)]" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">

            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className={`transition-all duration-300 rounded-full px-8 py-4 text-base font-medium shadow-md ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-accent to-accent/80 text-white shadow-accent/25 scale-105 border-0"
                      : "bg-white/80 dark:bg-black/60 backdrop-blur-sm border-2 border-accent/20 hover:border-accent hover:bg-accent/5 dark:hover:bg-accent/10 hover:scale-105 hover:shadow-lg dark:text-white"
                  }`}
                >
                  {category}
                  {activeCategory === category && (
                    <Badge className="ml-3 bg-white/20 text-white border-0 px-2 py-1">
                      {category === "All"
                        ? projects.length
                        : projects.filter((p) => p.category === category)
                            .length}
                    </Badge>
                  )}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <Link
                key={project.id}
                to={`/portfolio/${project.id}`}
                className="group bg-gradient-to-br from-card via-card to-accent/5 backdrop-blur-sm rounded-3xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 border border-accent/20 hover:border-accent/30 relative block"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Enhanced Hover Overlay with Project Details */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center p-6 text-white text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 mb-4">
                      <Eye className="text-white" size={20} />
                    </div>
                    <h4 className="text-lg font-bold mb-2">{project.title}</h4>
                    <p className="text-sm mb-3 opacity-90">{project.description}</p>
                    <div className="flex gap-2 mb-3">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs bg-white/20 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="text-xs opacity-75">{project.year} • {project.category}</div>
                  </div>
                </div>

                <div className="p-6 relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-accent text-accent-foreground text-xs">
                      {project.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar size={14} className="text-accent" />
                      {project.year}
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Loading Indicator */}
          {loading && (
            <div className="text-center mt-12">
              <div className="flex items-center justify-center gap-2 text-accent">
                <div className="w-6 h-6 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
                <span className="font-medium">Loading more projects...</span>
              </div>
            </div>
          )}


        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Portfolio;
