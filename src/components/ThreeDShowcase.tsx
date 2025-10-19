import { useState, useRef, useEffect } from "react";
import { RotateCcw, Zap, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ThreeDShowcaseProps {
  images: string[];
  title: string;
  description?: string;
  className?: string;
}

const ThreeDShowcase = ({ images, title, description, className = "" }: ThreeDShowcaseProps) => {
  const [currentLayer, setCurrentLayer] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextLayer = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentLayer((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const selectLayer = (index: number) => {
    if (isAnimating || index === currentLayer) return;
    setIsAnimating(true);
    setCurrentLayer(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="mb-6">
        <h3 className="text-2xl font-display font-bold mb-3 text-premium">{title}</h3>
        {description && (
          <p className="text-base text-muted-foreground leading-relaxed">{description}</p>
        )}
      </div>

      <div className="relative h-96 card-premium hover:shadow-glow transition-all duration-500">
        {/* Premium Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-accent via-purple-500 to-pink-500 rounded-3xl blur-sm opacity-20 animate-pulse" />
        
        {/* Layer Container */}
        <div className="relative w-full h-full rounded-3xl overflow-hidden">
          {/* Image Layers */}
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                index === currentLayer 
                  ? 'opacity-100 z-10 scale-100' 
                  : index < currentLayer 
                    ? 'opacity-0 z-0 scale-95 -translate-x-4'
                    : 'opacity-0 z-0 scale-95 translate-x-4'
              }`}
            >
              <img
                src={image}
                alt={`${title} - Layer ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              
              {/* Enhanced Layer overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />
              
              {/* Premium Layer indicator */}
              {index === currentLayer && (
                <div className="absolute top-6 left-6 bg-gradient-to-r from-accent to-purple-500 text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-xl border border-white/20 backdrop-blur-sm animate-fade-in">
                  <Layers size={16} className="inline mr-2" />
                  Layer {index + 1} of {images.length}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Premium Controls */}
        <div className="absolute top-6 right-6 flex gap-3 z-20">
          <Button
            size="sm"
            variant="outline"
            onClick={nextLayer}
            disabled={isAnimating}
            className="bg-gradient-to-br from-white/95 to-gray-100/95 hover:from-white hover:to-gray-50 border-2 border-white/40 shadow-xl backdrop-blur-md hover:scale-110 transition-all duration-300 disabled:opacity-50"
          >
            <Layers size={18} className="text-accent" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setCurrentLayer(0)}
            disabled={isAnimating}
            className="bg-gradient-to-br from-white/95 to-gray-100/95 hover:from-white hover:to-gray-50 border-2 border-white/40 shadow-xl backdrop-blur-md hover:scale-110 transition-all duration-300 disabled:opacity-50"
          >
            <RotateCcw size={18} className="text-accent" />
          </Button>
        </div>

        {/* Premium Layer Navigation */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/20 shadow-xl">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => selectLayer(index)}
              disabled={isAnimating}
              className={`relative w-4 h-4 rounded-full transition-all duration-300 disabled:opacity-50 ${
                index === currentLayer 
                  ? 'bg-accent scale-125 shadow-lg' 
                  : 'bg-white/50 hover:bg-white/80 hover:scale-110'
              }`}
            >
              {index === currentLayer && (
                <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-75" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Premium Instructions */}
      <div className="mt-6 text-center">
        <p className="text-sm text-muted-foreground font-medium">
          <span className="text-accent font-bold">Click dots</span> to switch layers • 
          <span className="text-accent font-bold">Use controls</span> to navigate
        </p>
      </div>
    </div>
  );
};

export default ThreeDShowcase;