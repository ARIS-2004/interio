import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { updatePageMetadata } from "@/lib/metadata";

const blogPosts = [
  {
    id: 1,
    title: "5 Interior Design Trends Dominating 2024",
    excerpt: "Discover the latest trends shaping modern interior design, from sustainable materials to bold color palettes.",
    image: "/src/assets/hero-living.jpg",
    category: "Trends",
    date: "2024-01-15",
    readTime: "5 min read",
    featured: true
  },
  {
    id: 2,
    title: "Maximizing Small Spaces: Design Tips That Work",
    excerpt: "Transform cramped quarters into functional, beautiful spaces with these expert design strategies.",
    image: "/src/assets/project-bedroom.jpg",
    category: "Residential",
    date: "2024-01-10",
    readTime: "7 min read",
    featured: false
  },
  {
    id: 3,
    title: "Sustainable Materials in Modern Design",
    excerpt: "How eco-friendly materials are revolutionizing interior design without compromising on style.",
    image: "/src/assets/project-kitchen.jpg",
    category: "Materials",
    date: "2024-01-05",
    readTime: "6 min read",
    featured: true
  },
  {
    id: 4,
    title: "Commercial Space Design: Creating Productive Environments",
    excerpt: "The psychology behind workspace design and how it impacts productivity and employee wellbeing.",
    image: "/src/assets/project-office.jpg",
    category: "Commercial",
    date: "2023-12-28",
    readTime: "8 min read",
    featured: false
  },
  {
    id: 5,
    title: "Color Psychology in Interior Design",
    excerpt: "Understanding how colors affect mood and behavior in different spaces.",
    image: "/src/assets/project-bathroom.jpg",
    category: "Trends",
    date: "2023-12-20",
    readTime: "4 min read",
    featured: false
  },
  {
    id: 6,
    title: "Behind the Scenes: Our Design Process",
    excerpt: "Take a look at how we transform client visions into stunning reality through our proven process.",
    image: "/src/assets/project-restaurant.jpg",
    category: "Process",
    date: "2023-12-15",
    readTime: "10 min read",
    featured: true
  }
];

const categories = ["All", "Trends", "Residential", "Commercial", "Materials", "Process"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);

  useEffect(() => {
    updatePageMetadata('blog');
  }, []);

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);
  
  const nextFeatured = () => {
    setCurrentFeaturedIndex((prev) => (prev + 1) % featuredPosts.length);
  };
  
  const prevFeatured = () => {
    setCurrentFeaturedIndex((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Insights & <span className="text-gradient-gold">Inspiration</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover the latest trends, tips, and behind-the-scenes stories from the world of interior design
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts Carousel */}
      {featuredPosts.length > 0 && (
        <section className="pt-0 pb-8 bg-gradient-to-br from-muted/20 via-background to-accent/5 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(var(--accent-rgb),0.1),transparent_70%)]" />
          </div>
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="relative">
              <div className="bg-gradient-to-br from-card via-card to-accent/5 backdrop-blur-sm rounded-3xl overflow-hidden shadow-strong border border-accent/20 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-80 md:h-full overflow-hidden">
                    <img 
                      src={featuredPosts[currentFeaturedIndex].image} 
                      alt={featuredPosts[currentFeaturedIndex].title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <Badge className="absolute top-6 left-6 bg-accent text-accent-foreground shadow-lg">
                      Featured
                    </Badge>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <Badge variant="outline" className="w-fit mb-6 border-accent/30 text-accent">
                      {featuredPosts[currentFeaturedIndex].category}
                    </Badge>
                    <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
                      {featuredPosts[currentFeaturedIndex].title}
                    </h3>
                    <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                      {featuredPosts[currentFeaturedIndex].excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-accent" />
                        {new Date(featuredPosts[currentFeaturedIndex].date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-accent" />
                        {featuredPosts[currentFeaturedIndex].readTime}
                      </div>
                    </div>
                    <Button className="w-fit bg-gradient-to-r from-accent to-accent/80 text-accent-foreground hover:from-accent/90 hover:to-accent/70 hover:scale-105 hover:shadow-lg transition-all duration-300 px-8 py-3">
                      Read Article
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Navigation Buttons - Desktop */}
              <Button
                onClick={prevFeatured}
                className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/90 hover:bg-background border border-border text-foreground shadow-lg hover:scale-110 transition-all duration-300"
              >
                <ChevronLeft size={20} />
              </Button>
              <Button
                onClick={nextFeatured}
                className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/90 hover:bg-background border border-border text-foreground shadow-lg hover:scale-110 transition-all duration-300"
              >
                <ChevronRight size={20} />
              </Button>
              
              {/* Navigation Buttons - Mobile */}
              <div className="flex md:hidden justify-center gap-4 mt-4">
                <Button
                  onClick={prevFeatured}
                  className="w-12 h-12 rounded-full bg-background/90 hover:bg-background border border-border text-foreground shadow-lg hover:scale-110 transition-all duration-300"
                >
                  <ChevronLeft size={20} />
                </Button>
                <Button
                  onClick={nextFeatured}
                  className="w-12 h-12 rounded-full bg-background/90 hover:bg-background border border-border text-foreground shadow-lg hover:scale-110 transition-all duration-300"
                >
                  <ChevronRight size={20} />
                </Button>
              </div>
              
              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {featuredPosts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFeaturedIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentFeaturedIndex 
                        ? "bg-accent scale-125" 
                        : "bg-accent/30 hover:bg-accent/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}



      {/* Blog Grid */}
      <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-accent/5 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(var(--accent-rgb),0.1),transparent_60%)]" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-normal pb-2">
              Latest Articles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Stay updated with our latest insights and design inspiration
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`transition-all duration-300 rounded-full px-6 py-3 ${
                    selectedCategory === category 
                      ? "bg-accent text-accent-foreground shadow-lg scale-105" 
                      : "hover:border-accent hover:text-accent hover:scale-105"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post, index) => (
              <article 
                key={post.id} 
                className="group bg-gradient-to-br from-card via-card to-accent/5 backdrop-blur-sm rounded-3xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 border border-accent/20 hover:border-accent/30 relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <Badge 
                    className="absolute top-4 left-4 bg-accent/90 text-accent-foreground shadow-lg"
                  >
                    {post.category}
                  </Badge>
                </div>
                <div className="p-8 relative z-10">
                  <h3 className="text-xl font-display font-bold mb-4 line-clamp-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-accent" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-accent" />
                      {post.readTime}
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full justify-between p-0 h-auto text-accent hover:text-accent/80 font-semibold">
                    Read More
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-12 bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10 relative overflow-hidden">
        <div className="w-full px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Stay Updated
          </h2>
          <p className="text-muted-foreground mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest design insights, trends, and exclusive content delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 rounded-xl border border-accent/20 bg-background/80 backdrop-blur-sm focus:border-accent focus:outline-none transition-colors"
            />
            <Button className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground hover:from-accent/90 hover:to-accent/70 hover:scale-105 hover:shadow-lg transition-all duration-300 px-8 py-3 rounded-xl font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;