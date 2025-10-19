import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import DarkModeToggle from "@/components/DarkModeToggle";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Awards", path: "/awards" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-3 left-6 right-6 z-50 bg-gradient-to-r from-white/60 via-white/50 to-white/60 backdrop-blur-md shadow-2xl border border-white/50 rounded-3xl transition-all duration-700">
      {/* Premium Glass Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 rounded-3xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-3xl" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group relative flex-shrink-0">
            <img src={logo} alt="InterioAura" className="h-10 w-auto transition-all duration-500 group-hover:scale-110 relative z-10 drop-shadow-xl filter brightness-110 contrast-110" />
            <div className="hidden lg:block relative z-10">
              <span className="text-xl font-display font-bold bg-gradient-to-r from-slate-800 via-accent to-purple-600 bg-clip-text text-transparent drop-shadow-sm">InterioAura</span>
              <div className="text-xs text-slate-600 font-bold tracking-[0.15em] opacity-80">DESIGN STUDIO</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 flex-1 justify-center max-w-2xl mx-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-bold transition-all duration-400 relative group rounded-xl overflow-hidden ${
                  location.pathname === link.path
                    ? "text-white bg-gradient-to-r from-accent to-purple-500 shadow-lg scale-105"
                    : "text-black hover:text-white hover:bg-gradient-to-r hover:from-accent/80 hover:to-purple-400 hover:scale-105 hover:shadow-md drop-shadow-lg"
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                {location.pathname !== link.path && (
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-all duration-400" />
                )}
              </Link>
            ))}
          </div>

          {/* Dark Mode Toggle & CTA Button */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <div className="p-2 rounded-xl hover:scale-110 transition-all duration-300">
              <DarkModeToggle />
            </div>
            <Button asChild variant="default" className="relative overflow-hidden bg-gradient-to-r from-accent via-purple-500 to-pink-500 text-white hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 px-6 py-2.5 rounded-2xl font-bold border-0 group">
              <Link to="/contact" className="relative z-10 flex items-center gap-2">
                <span className="font-extrabold tracking-wide text-sm">Get a Quote</span>
                <ShoppingCart size={16} className="group-hover:animate-bounce transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 bg-black/80 dark:bg-white/80 text-white dark:text-black hover:text-accent transition-colors rounded-lg backdrop-blur-sm border border-white/20 dark:border-black/20"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-accent"
                      : "text-foreground hover:text-accent"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-4">
                <DarkModeToggle />
                <Button asChild className="flex-1 ml-4 bg-accent text-accent-foreground hover:bg-accent/90 micro-bounce ripple-effect">
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Get a Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
