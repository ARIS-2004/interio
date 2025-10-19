import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";
import { ReactNode } from "react";

interface ScrollAnimatedSectionProps {
  children: ReactNode;
  animation?: 'fade' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate';
  delay?: number;
  className?: string;
  parallax?: boolean;
  parallaxSpeed?: number;
}

const ScrollAnimatedSection = ({
  children,
  animation = 'fade',
  delay = 0,
  className = "",
  parallax = false,
  parallaxSpeed = 0.5
}: ScrollAnimatedSectionProps) => {
  const { ref: animRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: parallaxRef, offset } = useParallax(parallaxSpeed);

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-700 ease-out";
    
    if (!isVisible) {
      switch (animation) {
        case 'slideUp':
          return `${baseClasses} opacity-0 translate-y-12`;
        case 'slideLeft':
          return `${baseClasses} opacity-0 translate-x-12`;
        case 'slideRight':
          return `${baseClasses} opacity-0 -translate-x-12`;
        case 'scale':
          return `${baseClasses} opacity-0 scale-95`;
        case 'rotate':
          return `${baseClasses} opacity-0 rotate-3 scale-95`;
        default:
          return `${baseClasses} opacity-0`;
      }
    }
    
    return `${baseClasses} opacity-100 translate-x-0 translate-y-0 scale-100 rotate-0`;
  };

  const combinedRef = (el: HTMLDivElement | null) => {
    if (animRef) animRef.current = el;
    if (parallax && parallaxRef) parallaxRef.current = el;
  };

  return (
    <div
      ref={combinedRef}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transform: parallax ? `translateY(${offset}px)` : undefined
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimatedSection;