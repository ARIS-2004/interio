import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { updatePageMetadata } from "@/lib/metadata";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  useEffect(() => {
    updatePageMetadata('contact');
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your inquiry! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-accent/10 via-background to-primary/5 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_30%_40%,rgba(var(--accent-rgb),0.2),transparent_70%)]" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">

          
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 animate-fade-in">
            Let's Create <span className="text-gradient-gold">Together</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your space? Get in touch with our award-winning team for a personalized consultation
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-accent/5 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-[conic-gradient(from_45deg,transparent,rgba(var(--primary-rgb),0.1),transparent)]" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-accent/10">
              <h2 className="text-3xl font-display font-bold mb-2">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">We'll respond within 24 hours</p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Rahul Sharma"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="rahul@gmail.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  >
                    <option value="">Select a project type</option>
                    <option value="residential">Residential Design</option>
                    <option value="commercial">Commercial Space</option>
                    <option value="renovation">Renovation</option>
                    <option value="consultation">Design Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project requirements, budget, and timeline..."
                    rows={5}
                    className="w-full"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-accent via-accent to-accent/80 text-accent-foreground hover:from-accent/90 hover:via-accent/85 hover:to-accent/70 hover:scale-105 hover:shadow-strong hover:-translate-y-1 transition-all duration-300 py-4 px-8 font-bold text-lg rounded-xl group"
                >
                  <span className="flex items-center justify-center gap-3">
                    Send Message
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-display font-bold mb-2">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-8">Multiple ways to reach our team</p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-accent/10 hover:border-accent/20 transition-all duration-300 hover:shadow-soft">
                  <div className="flex gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Visit Our Studio</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Action Area II, Newtown<br />
                        Kolkata, West Bengal 700156<br />
                        India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-accent/10 hover:border-accent/20 transition-all duration-300 hover:shadow-soft">
                  <div className="flex gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Call Us</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        +91 98765 43210<br />
                        Mon-Fri: 10:00 AM - 7:00 PM IST
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-accent/10 hover:border-accent/20 transition-all duration-300 hover:shadow-soft">
                  <div className="flex gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Email Us</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        hello@interioaura.in<br />
                        projects@interioaura.in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent/10 via-card/80 to-primary/5 backdrop-blur-sm rounded-2xl p-8 border border-accent/20">
                <h3 className="text-2xl font-display font-bold mb-6 text-center">
                  Office Hours
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-accent/10">
                    <span className="text-muted-foreground font-medium">Monday - Friday</span>
                    <span className="font-bold text-accent">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-accent/10">
                    <span className="text-muted-foreground font-medium">Saturday</span>
                    <span className="font-bold text-accent">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground font-medium">Sunday</span>
                    <span className="font-bold text-muted-foreground">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(var(--accent-rgb),0.2),transparent_70%)]" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-normal pb-2">
              Find Us on the Map
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Located in the heart of Newtown, Kolkata - easily accessible by metro and road
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-card/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-strong border-2 border-accent/20 hover:border-accent/30 transition-all duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0123456789!2d88.4324!3d22.5726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM0JzIxLjQiTiA4OMKwMjUnNTYuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group text-center p-8 bg-gradient-to-br from-card/80 via-card/60 to-accent/5 backdrop-blur-sm rounded-3xl border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105 hover:shadow-strong hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-3 group-hover:text-accent transition-colors duration-300">By Metro</h3>
                <p className="text-muted-foreground leading-relaxed">New Town Station<br />5 minute walk</p>
              </div>
              
              <div className="group text-center p-8 bg-gradient-to-br from-card/80 via-card/60 to-accent/5 backdrop-blur-sm rounded-3xl border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105 hover:shadow-strong hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-3 group-hover:text-accent transition-colors duration-300">By Car</h3>
                <p className="text-muted-foreground leading-relaxed">Free parking available<br />Easy road access</p>
              </div>
              
              <div className="group text-center p-8 bg-gradient-to-br from-card/80 via-card/60 to-accent/5 backdrop-blur-sm rounded-3xl border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105 hover:shadow-strong hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-3 group-hover:text-accent transition-colors duration-300">Visit Hours</h3>
                <p className="text-muted-foreground leading-relaxed">Monday - Saturday<br />10:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Contact;
