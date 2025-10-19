import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Home,
  Building2,
  Palette,
  Package,
  Sparkles,
  Compass,
  Award,
  Users,
  Clock,
  Shield,
  Check,
  Calculator,
  Calendar,
} from "lucide-react";
import { updatePageMetadata } from "@/lib/metadata";
import { useEffect, useState, useRef } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import bedroomImg from "@/assets/project-bedroom.jpg";
import kitchenImg from "@/assets/project-kitchen.jpg";
import officeImg from "@/assets/project-office.jpg";
import bathroomImg from "@/assets/project-bathroom.jpg";
import restaurantImg from "@/assets/project-restaurant.jpg";

const services = [
  {
    icon: Home,
    image: bedroomImg,
    title: "Residential Design",
    description:
      "Transform your house into a personalized sanctuary with our comprehensive residential interior design services. We work closely with homeowners to create spaces that reflect their personality, lifestyle, and aspirations.",
    features: [
      "Space Planning",
      "Color Consultation",
      "Furniture Selection",
      "Custom Millwork",
    ],
  },
  {
    icon: Building2,
    image: officeImg,
    title: "Commercial Spaces",
    description:
      "Create inspiring work environments that enhance productivity and reflect your brand identity. From corporate offices to retail spaces, we design commercial interiors that make a lasting impression.",
    features: [
      "Office Design",
      "Retail Spaces",
      "Hospitality Design",
      "Brand Integration",
    ],
  },

  {
    icon: Package,
    image: kitchenImg,
    title: "Custom Furniture",
    description:
      "Bespoke furniture pieces designed and crafted to perfectly complement your unique space. Each piece is a work of art, combining functionality with aesthetic excellence.",
    features: [
      "Custom Design",
      "Premium Materials",
      "Handcrafted Quality",
      "Perfect Fit",
    ],
  },
  {
    icon: Sparkles,
    image: bathroomImg,
    title: "Renovation Management",
    description:
      "Complete renovation project management from concept to completion. We coordinate all aspects of your renovation, ensuring a smooth process and exceptional results.",
    features: [
      "Project Planning",
      "Contractor Coordination",
      "Timeline Management",
      "Quality Control",
    ],
  },
  {
    icon: Compass,
    image: restaurantImg,
    title: "Design Consultation",
    description:
      "Expert guidance for your interior design projects. Whether you need a complete design or just professional advice, our consultation services provide the expertise you need.",
    features: [
      "Style Assessment",
      "Budget Planning",
      "Material Selection",
      "Layout Optimization",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Consultation",
    description: "Initial meeting to understand your vision, needs, and budget",
  },
  {
    step: "02",
    title: "Concept",
    description:
      "Develop design concepts and mood boards tailored to your style",
  },
  {
    step: "03",
    title: "Design Development",
    description: "Detailed plans, 3D renderings, and material selections",
  },
  {
    step: "04",
    title: "Implementation",
    description: "Project execution with careful coordination and oversight",
  },
  {
    step: "05",
    title: "Handover",
    description: "Final walkthrough and delivery of your transformed space",
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: "Award-Winning Designs",
    description:
      "Over 50 industry awards and recognition for excellence in interior design",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "15+ years of combined experience with certified interior designers",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "98% of projects completed on schedule with transparent timeline management",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description:
      "Comprehensive warranty and post-completion support for all our projects",
  },
];

const pricingTiers = [
  {
    name: "Basic",
    price: "₹80,000",
    period: "per room",
    description: "Perfect for budget-conscious homeowners",
    features: [
      "Space planning & layout",
      "Color consultation",
      "Furniture recommendations",
      "2D floor plans",
      "Basic material selection",
      "Project timeline",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "₹1,50,000",
    period: "per room",
    description: "Most popular choice for complete makeovers",
    features: [
      "Everything in Basic",
      "3D visualization",
      "Custom furniture design",
      "Premium material selection",
      "Lighting design",
      "Project management",
      "Installation supervision",
    ],
    popular: true,
  },
  {
    name: "Luxury",
    price: "₹3,00,000",
    period: "per room",
    description: "Ultimate luxury experience with premium finishes",
    features: [
      "Everything in Premium",
      "Luxury material sourcing",
      "Custom millwork",
      "Smart home integration",
      "Dedicated project manager",
      "White-glove service",
      "1-year warranty",
    ],
    popular: false,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "Initial meeting to understand your vision, needs, and budget",
    details:
      "We start with a comprehensive consultation where our designers visit your space, understand your lifestyle, preferences, and budget. This includes measuring the space, discussing your vision, and identifying any structural considerations.",
    duration: "1-2 hours",
    deliverables: [
      "Space assessment",
      "Style questionnaire",
      "Budget discussion",
      "Timeline overview",
    ],
  },
  {
    step: "02",
    title: "Concept",
    description:
      "Develop design concepts and mood boards tailored to your style",
    details:
      "Our team creates initial design concepts based on your consultation. We develop mood boards, color palettes, and style directions that align with your vision and functional requirements.",
    duration: "3-5 days",
    deliverables: [
      "Mood boards",
      "Color schemes",
      "Style concepts",
      "Initial layouts",
    ],
  },
  {
    step: "03",
    title: "Design Development",
    description: "Detailed plans, 3D renderings, and material selections",
    details:
      "We create detailed design plans including 3D visualizations, material specifications, furniture selections, and technical drawings. This phase ensures every detail is planned before implementation.",
    duration: "1-2 weeks",
    deliverables: [
      "3D renderings",
      "Technical drawings",
      "Material samples",
      "Furniture specifications",
    ],
  },
  {
    step: "04",
    title: "Implementation",
    description: "Project execution with careful coordination and oversight",
    details:
      "Our project management team coordinates all aspects of implementation including contractor scheduling, material delivery, and quality control. We ensure everything is executed according to plan.",
    duration: "4-8 weeks",
    deliverables: [
      "Project timeline",
      "Contractor coordination",
      "Quality inspections",
      "Progress updates",
    ],
  },
  {
    step: "05",
    title: "Handover",
    description: "Final walkthrough and delivery of your transformed space",
    details:
      "We conduct a final walkthrough to ensure everything meets our quality standards and your expectations. We provide care instructions and warranty information for your new space.",
    duration: "1 day",
    deliverables: [
      "Final walkthrough",
      "Care instructions",
      "Warranty documentation",
      "Project photos",
    ],
  },
];

const faqs = [
  {
    question: "How long does a typical interior design project take?",
    answer:
      "Project timelines vary based on scope and complexity. Residential projects typically take 8-16 weeks, while commercial projects can range from 12-24 weeks. We provide detailed timelines during the consultation phase.",
  },
  {
    question: "Do you work within specific budget ranges?",
    answer:
      "We work with various budget ranges and will discuss your budget during the initial consultation. We believe great design is achievable at any budget level and will tailor our approach accordingly.",
  },
  {
    question: "Can you work with existing furniture and decor?",
    answer:
      "Absolutely! We love incorporating pieces that have sentimental value or are in great condition. We'll assess your existing items and seamlessly integrate them into the new design.",
  },
  {
    question: "Do you provide 3D renderings of the design?",
    answer:
      "Yes, 3D visualization is included in all our design packages. This helps you visualize the final result before implementation begins, ensuring you're completely satisfied with the design.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We primarily serve the greater metropolitan area but also take on select projects nationwide. Contact us to discuss your location and project requirements.",
  },
  {
    question: "Do you handle permits and contractor coordination?",
    answer:
      "Yes, we manage all aspects of the project including permits, contractor coordination, and timeline management. You can relax while we handle the details.",
  },
];

const Services = () => {
  const [activeStep, setActiveStep] = useState(0);
  const detailsRef = useRef<HTMLDivElement>(null);
  const [roomSize, setRoomSize] = useState("");
  const [roomType, setRoomType] = useState("");
  const [packageType, setPackageType] = useState("");
  const [estimatedCost, setEstimatedCost] = useState(0);

  useEffect(() => {
    updatePageMetadata("services");
  }, []);

  const calculateCost = () => {
    if (!roomSize || !roomType || !packageType) return;

    const sizeMultiplier = {
      small: 1,
      medium: 1.5,
      large: 2.5,
      xlarge: 4,
    };

    const typeMultiplier = {
      bedroom: 80000,
      kitchen: 150000,
      living: 120000,
      bathroom: 100000,
      office: 90000,
    };

    const packageMultiplier = {
      basic: 1,
      premium: 1.8,
      luxury: 3.2,
    };

    const baseCost =
      typeMultiplier[roomType] *
      sizeMultiplier[roomSize] *
      packageMultiplier[packageType];
    setEstimatedCost(baseCost);
  };

  useEffect(() => {
    calculateCost();
  }, [roomSize, roomType, packageType]);

  const bookConsultation = () => {
    toast.success("Consultation booked! We'll contact you within 24 hours.");
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 animate-fade-in">
            Our <span className="text-gradient-gold">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Comprehensive interior design solutions that bring your vision to
            life with precision, creativity, and expertise
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className=" bg-gradient-to-br from-muted/20 via-background to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(var(--accent-rgb),0.1),transparent_70%)]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-card via-card to-accent/5 backdrop-blur-sm rounded-3xl p-8 hover-lift border border-accent/20 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 group-hover:scale-105 transition-all duration-300">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 rounded-full bg-accent mr-3 flex-shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300"
                >
                  <Link to="/contact">
                    <Calendar className="mr-2" size={16} />
                    Book Service
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Process Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[conic-gradient(from_45deg,transparent,rgba(var(--accent-rgb),0.1),transparent)]" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent leading-normal pb-2">
              Our Design Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Click on each step to learn more about our proven methodology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
            {processSteps.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveStep(index);
                  // Scroll to details on mobile with extra offset
                  if (window.innerWidth < 768 && detailsRef.current) {
                    setTimeout(() => {
                      const elementTop = detailsRef.current!.getBoundingClientRect().top + window.pageYOffset;
                      const offsetPosition = elementTop - 100; // Extra 100px offset for mobile
                      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }, 100);
                  }
                }}
                className={`group text-center bg-gradient-to-br from-card via-card to-accent/5 backdrop-blur-sm rounded-3xl p-6 border transition-all duration-500 hover:scale-105 relative overflow-hidden cursor-pointer ${
                  activeStep === index
                    ? "border-accent shadow-accent/20 shadow-strong scale-105"
                    : "border-accent/20 shadow-soft hover:border-accent/30 hover:shadow-strong"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-500 ${
                    activeStep === index
                      ? "from-accent/10 to-transparent opacity-100"
                      : "from-accent/5 to-transparent opacity-0 group-hover:opacity-100"
                  }`}
                />
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-full text-xl font-display font-bold flex items-center justify-center mx-auto mb-4 transition-all duration-300 shadow-lg ${
                      activeStep === index
                        ? "bg-gradient-to-br from-accent to-accent/80 text-white scale-110"
                        : "bg-gradient-to-br from-accent/20 to-accent/10 text-accent group-hover:scale-110"
                    }`}
                  >
                    {item.step}
                  </div>
                  <h3
                    className={`text-lg font-display font-bold mb-2 transition-colors ${
                      activeStep === index ? "text-accent" : "text-foreground"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Detailed Step Information */}
          <div ref={detailsRef} className="max-w-4xl mx-auto bg-gradient-to-br from-card via-card to-accent/5 backdrop-blur-sm rounded-3xl p-8 border border-accent/20 shadow-soft">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/80 text-white text-lg font-bold flex items-center justify-center mr-4">
                    {processSteps[activeStep].step}
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-accent">
                      {processSteps[activeStep].title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Duration: {processSteps[activeStep].duration}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {processSteps[activeStep].details}
                </p>
                {activeStep === 0 && (
                  <Button
                    asChild
                    className="bg-gradient-to-r from-accent to-accent/80 text-white hover:scale-105"
                  >
                    <Link to="/contact">
                      <Calendar className="mr-2" size={16} />
                      Start This Step
                    </Link>
                  </Button>
                )}
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4">What You'll Receive:</h4>
                <ul className="space-y-3">
                  {processSteps[activeStep].deliverables.map(
                    (deliverable, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check
                          className="text-accent mr-3 flex-shrink-0"
                          size={16}
                        />
                        <span className="text-sm">{deliverable}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-accent/5 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(var(--accent-rgb),0.1),transparent_60%)]" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-normal pb-2">
              Why Choose InterioAura?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              What sets us apart in the world of interior design and makes us
              the preferred choice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="group text-center bg-gradient-to-br from-card via-card to-accent/5 backdrop-blur-sm rounded-3xl p-8 hover-lift border border-accent/20 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="text-accent" size={36} />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-accent/5 via-background to-primary/5 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[conic-gradient(from_45deg,transparent,rgba(var(--accent-rgb),0.1),transparent)]" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent leading-normal pb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get answers to common questions about our design process and
              services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-gradient-to-br from-card via-card to-accent/5 backdrop-blur-sm rounded-3xl px-8 py-2 border border-accent/20 shadow-soft hover:shadow-strong transition-all duration-300 hover:border-accent/30"
                >
                  <AccordionTrigger className="text-left font-display font-bold text-lg hover:text-accent transition-colors py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Services;
