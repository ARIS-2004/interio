import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Luxury Residence Client",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    content: "InterioAura transformed our home beyond our wildest dreams. The attention to detail and innovative design solutions earned them multiple awards, and we couldn't be happier.",
    rating: 5,
  },
  {
    name: "Arjun Patel",
    role: "Commercial Project CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    content: "The award-winning office design has significantly improved our team's productivity and creativity. InterioAura's expertise in commercial spaces is unmatched.",
    rating: 5,
  },
  {
    name: "Kavya Reddy",
    role: "Renovation Client",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    content: "From concept to completion, InterioAura delivered excellence at every step. It's no surprise their work wins industry awards year after year.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-accent/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(var(--accent-rgb),0.1),transparent_60%)]" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-normal pb-2">
            What Our <span className="text-gradient-gold">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from our satisfied clients who trusted us with their dream spaces
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-card via-card to-accent/5 backdrop-blur-sm rounded-3xl p-8 hover-lift border border-accent/20 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                {/* Author with Verified Badge */}
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full object-cover border-3 border-accent/30 shadow-medium group-hover:border-accent/50 transition-all duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-xs text-primary font-bold">✓</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-display font-bold text-xl mb-1">{testimonial.name}</h4>
                    <p className="text-sm text-accent font-semibold bg-accent/10 px-3 py-1 rounded-full inline-block">{testimonial.role}</p>
                  </div>
                </div>
                
                {/* Rating with Verified Label */}
                <div className="mb-6">
                  <div className="flex text-accent mb-2 justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-xl mx-0.5 drop-shadow-sm">★</span>
                    ))}
                  </div>
                  <p className="text-xs text-center text-muted-foreground font-medium">Verified Review</p>
                </div>

                {/* Content with Quote Marks */}
                <blockquote className="text-muted-foreground leading-relaxed text-center italic relative">
                  <span className="text-4xl text-accent/30 absolute -top-2 -left-2">"</span>
                  <p className="relative z-10">{testimonial.content}</p>
                  <span className="text-4xl text-accent/30 absolute -bottom-6 -right-2">"</span>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;