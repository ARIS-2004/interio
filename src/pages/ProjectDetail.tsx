import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import MaterialToggle from "@/components/MaterialToggle";
import InteractiveElements from "@/components/InteractiveElements";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import PanoramaViewer from "@/components/PanoramaViewer";
import ThreeDShowcase from "@/components/ThreeDShowcase";
import ScrollAnimatedSection from "@/components/ScrollAnimatedSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, MapPin, Users, Palette, ChevronLeft, ChevronRight, Home, Play } from "lucide-react";
import bedroomImg from "@/assets/project-bedroom.jpg";
import kitchenImg from "@/assets/project-kitchen.jpg";
import officeImg from "@/assets/project-office.jpg";
import bathroomImg from "@/assets/project-bathroom.jpg";
import restaurantImg from "@/assets/project-restaurant.jpg";
import heroImg from "@/assets/hero-living.jpg";

const projectsData = {
  "1": {
    id: 1,
    title: "Modern Luxury Bedroom",
    category: "Residential",
    year: "2024",
    location: "Salt Lake, Kolkata",
    client: "Private Residence",
    area: "450 sq ft",
    description: "A sophisticated bedroom design that combines modern luxury with comfort. The space features a neutral palette with gold accents, custom built-in storage, and premium materials throughout.",
    challenge: "Transform a compact bedroom into a luxurious retreat while maximizing storage and natural light.",
    solution: "We created a custom headboard wall with integrated lighting, built-in wardrobes, and used mirrors strategically to enhance the sense of space.",
    images: [bedroomImg, heroImg, kitchenImg, bathroomImg],
    videos: ["https://www.youtube.com/embed/jNQXAC9IVRw"], // Interior design video
    materials: ["Italian Marble", "Walnut Wood", "Brass Fixtures", "Silk Textiles"],
    tags: ["Luxury", "Modern", "Residential", "Custom Furniture"],
    beforeAfter: {
      before: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=60",
      after: bedroomImg
    },
    panorama: kitchenImg
  },
  "2": {
    id: 2,
    title: "Open Concept Kitchen",
    category: "Residential",
    year: "2024",
    location: "New Town, Kolkata",
    client: "Young Family",
    area: "320 sq ft",
    description: "A contemporary kitchen design that seamlessly blends functionality with style, featuring an open concept layout perfect for family gatherings.",
    challenge: "Create an open, functional kitchen that connects with the living area while maintaining distinct zones.",
    solution: "We designed a large island as the centerpiece, used consistent materials throughout, and created subtle lighting zones to define different areas.",
    images: [kitchenImg, bedroomImg, heroImg, officeImg],
    videos: ["https://www.youtube.com/embed/Uj8MsbgpjaQ"], // Kitchen design video
    materials: ["Quartz Countertops", "Oak Cabinetry", "Stainless Steel", "Ceramic Tiles"],
    tags: ["Open Concept", "Family-Friendly", "Contemporary", "Functional"],
    beforeAfter: {
      before: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=60",
      after: kitchenImg
    },
    panorama: heroImg
  },
  "3": {
    id: 3,
    title: "Executive Office Suite",
    category: "Commercial",
    year: "2023",
    location: "Sector V, Kolkata",
    client: "Tech Startup",
    area: "1200 sq ft",
    description: "A modern executive office that balances professionalism with creativity, designed to inspire productivity and impress clients.",
    challenge: "Design a space that reflects the company's innovative culture while maintaining executive-level sophistication.",
    solution: "We incorporated biophilic design elements, flexible meeting spaces, and high-end finishes to create an inspiring work environment.",
    images: [officeImg, restaurantImg, bedroomImg, heroImg],
    videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"], // Office design video
    materials: ["Reclaimed Wood", "Steel Frames", "Living Walls", "Smart Glass"],
    tags: ["Commercial", "Biophilic", "Tech", "Flexible Spaces"],
    beforeAfter: {
      before: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=60",
      after: officeImg
    },
    panorama: restaurantImg
  },
  "4": {
    id: 4,
    title: "Spa-Like Bathroom Retreat",
    category: "Renovation",
    year: "2023",
    location: "Park Street, Kolkata",
    client: "Luxury Apartment",
    area: "180 sq ft",
    description: "Luxurious bathroom renovation with spa-inspired elements that create a serene retreat within the home. Features natural materials and calming color palette.",
    challenge: "Transform a dated bathroom into a spa-like sanctuary while working within existing plumbing constraints.",
    solution: "We introduced natural stone finishes, rainfall shower system, and ambient lighting to create a tranquil spa atmosphere.",
    images: [bathroomImg, bedroomImg, heroImg, kitchenImg],
    videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"], // Bathroom design video
    materials: ["Natural Stone", "Teak Wood", "Copper Fixtures", "Glass Mosaic"],
    tags: ["Luxury", "Spa-Inspired", "Renovation", "Wellness"],
    beforeAfter: {
      before: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=60",
      after: bathroomImg
    },
    panorama: bedroomImg
  },
  "5": {
    id: 5,
    title: "Upscale Restaurant Interior",
    category: "Commercial",
    year: "2024",
    location: "Camac Street, Kolkata",
    client: "Fine Dining Restaurant",
    area: "2500 sq ft",
    description: "Elegant restaurant design creating memorable dining experiences with sophisticated ambiance and functional layout for optimal service flow.",
    challenge: "Create an upscale dining atmosphere that accommodates high-volume service while maintaining intimate seating areas.",
    solution: "We designed flexible seating zones with acoustic treatments, dramatic lighting, and premium finishes to enhance the dining experience.",
    images: [restaurantImg, officeImg, heroImg, bedroomImg],
    videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"], // Restaurant design video
    materials: ["Velvet Upholstery", "Marble Tables", "Brass Accents", "Acoustic Panels"],
    tags: ["Hospitality", "Elegant", "Commercial", "Fine Dining"],
    beforeAfter: {
      before: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=60",
      after: restaurantImg
    },
    panorama: officeImg
  },
  "6": {
    id: 6,
    title: "Contemporary Living Space",
    category: "Residential",
    year: "2023",
    location: "Ballygunge, Kolkata",
    client: "Modern Family",
    area: "800 sq ft",
    description: "Modern living space with clean lines and functional design that maximizes natural light and creates seamless indoor-outdoor connection.",
    challenge: "Design a contemporary living area that feels spacious and connected while maintaining privacy and functionality.",
    solution: "We used an open floor plan with strategic furniture placement, large windows, and neutral tones to create an airy, sophisticated space.",
    images: [bedroomImg, kitchenImg, heroImg, bathroomImg],
    videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"], // Living space design video
    materials: ["Engineered Wood", "Linen Fabrics", "Steel Frames", "Natural Stone"],
    tags: ["Contemporary", "Minimalist", "Residential", "Open Plan"],
    beforeAfter: {
      before: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=60",
      after: bedroomImg
    },
    panorama: heroImg
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState('living');

  const roomDetails = {
    living: { name: 'Living Area', size: '120 sq ft', description: 'Open concept living space with modern furnishings and natural lighting' },
    kitchen: { name: 'Kitchen', size: '80 sq ft', description: 'Fully equipped kitchen with premium appliances and custom cabinetry' },
    bedroom: { name: 'Bedroom', size: '120 sq ft', description: 'Master bedroom with built-in storage and ensuite access' }
  };

  const projectIds = Object.keys(projectsData);
  const currentIndex = projectIds.indexOf(id || '1');
  const prevProjectId = currentIndex > 0 ? projectIds[currentIndex - 1] : projectIds[projectIds.length - 1];
  const nextProjectId = currentIndex < projectIds.length - 1 ? projectIds[currentIndex + 1] : projectIds[0];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const project = projectsData[id as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link to="/portfolio">
            <Button>Back to Portfolio</Button>
          </Link>
        </div>
      </div>
    );
  }

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-accent to-purple-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      {/* Breadcrumb Navigation */}
      <section className="pt-24 pb-4 bg-background/80 dark:bg-background/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground dark:text-muted-foreground/90">
            <Link to="/" className="flex items-center gap-1 hover:text-accent transition-colors dark:text-foreground/80 dark:hover:text-accent">
              <Home size={16} />
              Home
            </Link>
            <span className="dark:text-foreground/60">/</span>
            <Link to="/portfolio" className="hover:text-accent transition-colors dark:text-foreground/80 dark:hover:text-accent">
              Portfolio
            </Link>
            <span className="dark:text-foreground/60">/</span>
            <span className="text-foreground font-medium dark:text-foreground">{project.title}</span>
          </nav>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative">
        <div className="h-[60vh] relative overflow-hidden">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover brightness-100 contrast-100 dark:brightness-100 dark:contrast-100 dark:saturate-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          {/* Back Button */}
          <div className="absolute top-8 left-8">
            <Button asChild variant="outline" className="bg-white/90 dark:bg-black/80 backdrop-blur-sm hover:bg-white dark:hover:bg-black/90 shadow-lg border-white/20 dark:border-white/40 text-foreground dark:text-white">
              <Link to="/portfolio">
                <ArrowLeft className="mr-2" size={16} />
                Back to Portfolio
              </Link>
            </Button>
          </div>

          {/* Project Title */}
          <div className="absolute bottom-8 left-8 text-white">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              {project.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-2">
              {project.title}
            </h1>
            <p className="text-xl opacity-90">{project.year}</p>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-muted-foreground mb-8">
                  {project.description}
                </p>
                
                <h2 className="text-2xl font-display font-bold mb-4">The Challenge</h2>
                <p className="mb-8">{project.challenge}</p>
                
                <h2 className="text-2xl font-display font-bold mb-4">Our Solution</h2>
                <p className="mb-8">{project.solution}</p>
              </div>

              {/* About This Project */}
              <div className="bg-card rounded-xl p-8 shadow-soft mb-8">
                <h2 className="text-2xl font-display font-bold mb-6">About This Project</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-accent">Project Overview</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      This {project.area} {project.category.toLowerCase()} space underwent a complete transformation to meet the specific needs of our client, {project.client}. Located in {project.location}, this project showcases our expertise in creating functional yet beautiful living spaces.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-accent">Design Process</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span>Initial consultation and space assessment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span>3D modeling and visualization of proposed changes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span>Material selection and color palette development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span>Custom furniture design and space optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span>Project execution with quality control at every stage</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-accent">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-muted/30 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Lighting Design</h4>
                        <p className="text-sm text-muted-foreground">Strategic placement of ambient, task, and accent lighting to enhance the space's functionality and mood.</p>
                      </div>
                      <div className="bg-muted/30 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Storage Solutions</h4>
                        <p className="text-sm text-muted-foreground">Custom-built storage systems that maximize space efficiency while maintaining aesthetic appeal.</p>
                      </div>
                      <div className="bg-muted/30 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Material Selection</h4>
                        <p className="text-sm text-muted-foreground">Premium materials chosen for durability, sustainability, and visual impact.</p>
                      </div>
                      <div className="bg-muted/30 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Space Planning</h4>
                        <p className="text-sm text-muted-foreground">Optimized layout that improves flow and functionality while creating distinct zones.</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>



              {/* Before/After Comparison */}
              {project.beforeAfter && (
                <ScrollAnimatedSection animation="slideUp" delay={50} className="mt-12">
                  <h2 className="text-2xl font-display font-bold mb-6">Before & After</h2>
                  <BeforeAfterSlider
                    beforeImage={project.beforeAfter.before}
                    afterImage={project.beforeAfter.after}
                    beforeLabel="Before Renovation"
                    afterLabel="After Renovation"
                    className="w-full"
                  />
                </ScrollAnimatedSection>
              )}

              {/* 360° Panoramic View */}
              {project.panorama && (
                <ScrollAnimatedSection animation="slideUp" delay={100} className="mt-12">
                  <h2 className="text-2xl font-display font-bold mb-6">360° Immersive View</h2>
                  <PanoramaViewer
                    image={project.panorama}
                    title={`${project.title} - 360° View`}
                    className="w-full"
                  />
                </ScrollAnimatedSection>
              )}

              {/* 3D Showcase */}
              <ScrollAnimatedSection animation="slideUp" delay={140} className="mt-12">
                <h2 className="text-2xl font-display font-bold mb-6">3D Design Layers</h2>
                <ThreeDShowcase
                  images={project.images}
                  title={project.title}
                  description="Explore different design elements and layers"
                  className="w-full"
                />
              </ScrollAnimatedSection>

            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Details */}
              <div className="bg-card p-6 rounded-xl shadow-soft">
                <h3 className="text-xl font-display font-bold mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="text-accent" size={20} />
                    <div>
                      <p className="font-medium">Year</p>
                      <p className="text-muted-foreground">{project.year}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="text-accent" size={20} />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">{project.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="text-accent" size={20} />
                    <div>
                      <p className="font-medium">Client</p>
                      <p className="text-muted-foreground">{project.client}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Palette className="text-accent" size={20} />
                    <div>
                      <p className="font-medium">Area</p>
                      <p className="text-muted-foreground">{project.area}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Materials */}
              <div className="bg-card p-6 rounded-xl shadow-soft">
                <h3 className="text-xl font-display font-bold mb-4">Materials Used</h3>
                <div className="space-y-2">
                  {project.materials.map((material, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>{material}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="bg-card p-6 rounded-xl shadow-soft">
                <h3 className="text-xl font-display font-bold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Material Toggle */}
              <MaterialToggle 
                projectImage={project.images[0]}
                projectTitle={project.title}
              />

              {/* Interactive Elements */}
              <InteractiveElements />
            </div>
          </div>
          
          {/* Full Width Image Gallery */}
          <ScrollAnimatedSection animation="slideUp" delay={200} className="mt-16">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">Project Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] rounded-xl overflow-hidden cursor-pointer hover-lift hover-3d"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 brightness-100 contrast-100"
                  />
                </div>
              ))}
              {project.videos && project.videos.map((video, index) => (
                <div
                  key={`video-${index}`}
                  className="aspect-[4/3] rounded-xl overflow-hidden cursor-pointer hover-lift hover-3d relative"
                >
                  <iframe
                    src={video}
                    title={`${project.title} - Video ${index + 1}`}
                    className="w-full h-full"
                    frameBorder="0"
                    allowFullScreen
                  />
                  <div className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                    Video
                  </div>
                </div>
              ))}
            </div>
          </ScrollAnimatedSection>
        </div>
      </section>

      {/* Next/Previous Project Navigation */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center gap-4 md:gap-0">
            <Link 
              to={`/portfolio/${prevProjectId}`}
              className="flex items-center gap-2 md:gap-3 p-2 md:p-4 bg-card rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group"
            >
              <ChevronLeft className="text-accent group-hover:-translate-x-1 transition-transform" size={16} />
              <div>
                <p className="text-xs md:text-sm text-muted-foreground">Previous Project</p>
                <p className="text-sm md:text-base font-semibold">{projectsData[prevProjectId as keyof typeof projectsData].title}</p>
              </div>
            </Link>
            
            <Link 
              to={`/portfolio/${nextProjectId}`}
              className="flex items-center gap-2 md:gap-3 p-2 md:p-4 bg-card rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="text-right">
                <p className="text-xs md:text-sm text-muted-foreground">Next Project</p>
                <p className="text-sm md:text-base font-semibold">{projectsData[nextProjectId as keyof typeof projectsData].title}</p>
              </div>
              <ChevronRight className="text-accent group-hover:translate-x-1 transition-transform" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={project.images}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
      />

      <Footer />
    </div>
  );
};

export default ProjectDetail;