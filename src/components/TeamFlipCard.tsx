interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

interface TeamFlipCardProps {
  member: TeamMember;
  index: number;
}

import { useState } from "react";

const TeamFlipCard = ({ member, index }: TeamFlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="group perspective-1000 animate-fade-in md:cursor-default cursor-pointer"
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={handleClick}
    >
      <div className={`relative w-full h-96 preserve-3d transition-transform duration-700 md:group-hover:rotate-y-180 ${isFlipped ? 'rotate-y-180' : ''}`} style={{ transformStyle: 'preserve-3d' }}>
        {/* Front */}
        <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden shadow-strong border border-accent/20 hover:border-accent/40 transition-all duration-300" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <h3 className="text-2xl font-display font-bold mb-2">
                {member.name}
              </h3>
              <p className="text-accent text-sm font-semibold bg-accent/20 px-3 py-1 rounded-full inline-block">{member.role}</p>
            </div>
          </div>
          <div className="absolute top-4 right-4">
            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-card via-card to-accent/5 rounded-3xl p-8 flex flex-col justify-center shadow-strong border border-accent/20 backdrop-blur-sm" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-3xl" />
          <div className="text-center relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-display font-bold mb-3">
              {member.name}
            </h3>
            <p className="text-accent font-semibold mb-6 bg-accent/10 px-4 py-2 rounded-full inline-block">{member.role}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {member.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamFlipCard;