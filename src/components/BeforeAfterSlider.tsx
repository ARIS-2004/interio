import { useState, useRef, useEffect } from "react";
import { Move } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
  title?: string;
  description?: string;
}

const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  className = ""
}: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
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
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden rounded-3xl cursor-grab active:cursor-grabbing select-none shadow-2xl border-4 border-white/20 backdrop-blur-sm ${className}`}
      style={{ aspectRatio: '16/10' }}
    >
      {/* Premium Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-accent via-purple-500 to-pink-500 rounded-3xl blur-sm opacity-30 animate-pulse" />
      
      {/* Before Image */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          draggable={false}
        />
        <div className="absolute top-6 left-6 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-xl border border-white/20 backdrop-blur-sm">
          {beforeLabel}
        </div>
      </div>

      {/* After Image */}
      <div 
        className="absolute inset-0 overflow-hidden rounded-3xl"
        style={{ clipPath: `polygon(${sliderPosition}% 0%, 100% 0%, 100% 100%, ${sliderPosition}% 100%)` }}
      >
        <img
          src={afterImage}
          alt={afterLabel}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          draggable={false}
        />
        <div className="absolute top-6 right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-xl border border-white/20 backdrop-blur-sm">
          {afterLabel}
        </div>
      </div>

      {/* Premium Slider Line */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-white via-accent to-white shadow-2xl z-10"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute inset-0 bg-white/50 blur-sm" />
      </div>

      {/* Premium Slider Handle */}
      <div
        className="absolute top-1/2 w-16 h-16 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-full shadow-2xl flex items-center justify-center cursor-grab active:cursor-grabbing z-20 transform -translate-y-1/2 -translate-x-1/2 hover:scale-125 transition-transform duration-200 border-4 border-white/50 backdrop-blur-md"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-purple-500/20 rounded-full animate-pulse" />
        <Move className="text-accent relative z-10" size={24} />
      </div>

      {/* Premium Instructions */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 text-white px-6 py-3 rounded-2xl text-sm font-bold backdrop-blur-md border border-white/20 shadow-xl">
        <span className="bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">Drag</span> to compare
      </div>
    </div>
  );
};

export default BeforeAfterSlider;