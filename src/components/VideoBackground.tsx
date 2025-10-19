import { useRef, useEffect, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoBackgroundProps {
  videoSrc?: string;
  fallbackImage: string;
  children: React.ReactNode;
  className?: string;
  overlay?: boolean;
}

const VideoBackground = ({ 
  videoSrc, 
  fallbackImage, 
  children, 
  className = "",
  overlay = true 
}: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay failed, show controls
        setShowControls(true);
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Create a simple video loop using CSS animation as fallback
  const createVideoLoop = () => {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center animate-slow-zoom"
          style={{ backgroundImage: `url(${fallbackImage})` }}
        />
      </div>
    );
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Video or Fallback */}
      {videoSrc ? (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted={isMuted}
          loop
          playsInline
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          <source src={videoSrc} type="video/mp4" />
          {/* Fallback for unsupported video */}
          {createVideoLoop()}
        </video>
      ) : (
        createVideoLoop()
      )}

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-900/50 to-transparent" />
      )}

      {/* Video Controls */}
      {videoSrc && (
        <div 
          className={`absolute bottom-4 right-4 flex gap-2 transition-opacity duration-300 ${
            showControls ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Button
            size="sm"
            variant="outline"
            onClick={togglePlay}
            className="bg-white/90 hover:bg-white border-0 shadow-sm"
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={toggleMute}
            className="bg-white/90 hover:bg-white border-0 shadow-sm"
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </Button>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;