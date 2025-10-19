import { useState, useRef, useEffect } from "react";
import { RotateCcw, Maximize2, Move3D } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PanoramaViewerProps {
  image: string;
  title?: string;
  className?: string;
}

const PanoramaViewer = ({ image, title = "360° View", className = "" }: PanoramaViewerProps) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastMouse, setLastMouse] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setLastMouse({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - lastMouse.x;
    const deltaY = e.clientY - lastMouse.y;

    setRotation(prev => ({
      x: Math.max(-45, Math.min(45, prev.x - deltaY * 0.5)),
      y: prev.y + deltaX * 0.5
    }));

    setLastMouse({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setLastMouse({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;

    const deltaX = e.touches[0].clientX - lastMouse.x;
    const deltaY = e.touches[0].clientY - lastMouse.y;

    setRotation(prev => ({
      x: Math.max(-45, Math.min(45, prev.x - deltaY * 0.5)),
      y: prev.y + deltaX * 0.5
    }));

    setLastMouse({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };

  const resetView = () => {
    setRotation({ x: 0, y: 0 });
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, lastMouse]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    // Preload image
    const img = new Image();
    img.onload = () => setIsLoaded(true);
    img.src = image;

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, [image]);

  return (
    <div className={className}>
      <div 
        ref={containerRef}
        className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-black via-gray-900 to-black shadow-2xl border-4 border-white/20 ${isFullscreen ? 'fixed inset-0 z-50 rounded-none border-0' : 'h-96'}`}
        style={{ aspectRatio: isFullscreen ? 'auto' : undefined, maxHeight: isFullscreen ? 'none' : undefined }}
    >
      {/* Premium Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-accent via-purple-500 to-pink-500 rounded-3xl blur-sm opacity-20 animate-pulse" />
      
      {/* 360° Image Container */}
      <div
        ref={imageRef}
        className="w-full h-full cursor-grab active:cursor-grabbing select-none relative z-10 rounded-3xl overflow-hidden"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: '200% 100%',
          backgroundRepeat: 'repeat-x',
          backgroundPosition: `${-rotation.y}px center`,
          transition: isDragging ? 'none' : 'background-position 0.3s ease-out'
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Enhanced Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
        
        {/* Subtle grid overlay for depth */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }} />
      </div>

      {/* Premium Controls */}

      <div className="absolute top-4 right-4 flex gap-3 z-20">
        <Button
          size="sm"
          variant="outline"
          onClick={resetView}
          className="bg-gradient-to-br from-white/95 to-gray-100/95 hover:from-white hover:to-gray-50 border-2 border-white/40 shadow-xl backdrop-blur-md hover:scale-110 transition-all duration-300"
        >
          <RotateCcw size={18} className="text-accent" />
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={toggleFullscreen}
          className="bg-gradient-to-br from-white/95 to-gray-100/95 hover:from-white hover:to-gray-50 border-2 border-white/40 shadow-xl backdrop-blur-md hover:scale-110 transition-all duration-300"
        >
          <Maximize2 size={18} className="text-accent" />
        </Button>
      </div>

      {/* Rotation indicator */}
      <div className="absolute bottom-4 right-4 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-full p-3 border border-white/30 shadow-lg">
        <div className="w-8 h-8 relative">
          <div className="absolute inset-0 border-2 border-white/30 rounded-full" />
          <div 
            className="absolute top-1 left-1/2 w-0.5 h-3 bg-accent rounded-full transform -translate-x-1/2 transition-transform duration-200"
            style={{ transform: `translate(-50%, 0) rotate(${rotation.y * 0.5}deg)` }}
          />
        </div>
      </div>

      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-30">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto mb-2" />
            <p className="text-white text-sm">Loading 360° view...</p>
          </div>
        </div>
      )}
      </div>
      
      {/* Title and Instructions below image */}
      <div className="mt-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Move3D size={18} className="text-accent" />
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-sm text-muted-foreground font-medium">
          <span className="text-accent font-bold">Drag</span> to explore • 
          <span className="text-accent font-bold">Click fullscreen</span> for immersive view
        </p>
      </div>
    </div>
  );
};

const PanoramaViewerWithText = ({ image, title = "360° View", className = "" }: PanoramaViewerProps) => {
  return (
    <div className="space-y-3">
      <PanoramaViewer image={image} title={title} className={className} />
      <div className="text-center px-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-foreground text-base font-medium">
          <span className="text-accent font-bold">Drag</span> to explore • 
          <span className="text-accent font-bold">Click fullscreen</span> for immersive view
        </p>
      </div>
    </div>
  );
};

export default PanoramaViewer;
export { PanoramaViewerWithText };