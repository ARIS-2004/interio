interface CarouselItem {
  id: string;
  name: string;
  logo: string;
  brandLogo?: string;
  feature?: string;
  year?: string;
}

interface InfiniteCarouselProps {
  items: CarouselItem[];
  speed?: number;
  className?: string;
}

const InfiniteCarousel = ({ items, speed = 30, className = "" }: InfiniteCarouselProps) => {
  // Triple the items for truly seamless infinite loop
  const tripleItems = [...items, ...items, ...items];

  return (
    <div className={`overflow-hidden ${className}`}>
      <div 
        className="flex animate-scroll-seamless"
        style={{
          width: `${tripleItems.length * 200}px`,
          animationDuration: `${speed}s`
        }}
      >
        {tripleItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex-shrink-0 w-48 md:w-80 mx-2 md:mx-4 bg-white rounded-2xl shadow-soft hover:shadow-strong transition-all duration-300 hover:scale-105 relative overflow-hidden group cursor-pointer border border-gray-100"
            style={{ aspectRatio: '4/5' }}
          >
            {/* Publication Logo/Brand */}
            <div className="absolute top-4 left-4 z-20">
              <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center border-2 border-accent/20 p-2">
                <img 
                  src={item.brandLogo} 
                  alt={`${item.name} logo`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.outerHTML = `<span class="text-sm font-bold text-accent">${item.name.split(' ').map(word => word.charAt(0)).join('')}</span>`;
                  }}
                />
              </div>
            </div>
            
            {/* Background Image */}
            <img
              src={item.logo}
              alt={item.name}
              className="w-full h-full object-cover rounded-2xl opacity-60 dark:opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter brightness-75 dark:brightness-40 contrast-125 dark:contrast-150"
            />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10 group-hover:from-black/60 group-hover:via-black/30 group-hover:to-black/80 transition-all duration-300" />
            
            {/* Text Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-primary">
              <h4 className="font-display font-bold text-2xl mb-2 group-hover:text-white transition-colors duration-300">{item.name}</h4>
              <p className="text-base text-muted-foreground group-hover:text-white/90 mb-1 font-medium transition-colors duration-300">{item.feature}</p>
              <p className="text-sm text-muted-foreground/80 group-hover:text-white/70 mb-3 transition-colors duration-300">{item.year}</p>
              <div className="flex items-center text-sm text-accent group-hover:text-white font-medium transition-colors duration-300">
                <span className="mr-2">{item.feature?.includes('Publication') || item.feature?.includes('Design') || item.feature?.includes('Awards') ? 'Read Article' : 'Learn More'}</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;