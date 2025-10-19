import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Palette, Sun, Moon } from "lucide-react";

interface MaterialOption {
  id: string;
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  image: string;
}

interface MaterialToggleProps {
  projectImage: string;
  projectTitle: string;
}

const materialOptions: MaterialOption[] = [
  {
    id: "warm",
    name: "Warm Palette",
    colors: {
      primary: "hsl(25, 47%, 15%)",
      secondary: "hsl(30, 25%, 85%)",
      accent: "hsl(35, 77%, 62%)"
    },
    image: "/src/assets/project-bedroom.jpg"
  },
  {
    id: "cool",
    name: "Cool Palette", 
    colors: {
      primary: "hsl(210, 29%, 24%)",
      secondary: "hsl(210, 40%, 90%)",
      accent: "hsl(195, 100%, 50%)"
    },
    image: "/src/assets/project-kitchen.jpg"
  },
  {
    id: "monochrome",
    name: "Monochrome",
    colors: {
      primary: "hsl(0, 0%, 13%)",
      secondary: "hsl(0, 0%, 95%)",
      accent: "hsl(0, 0%, 60%)"
    },
    image: "/src/assets/project-office.jpg"
  }
];

const MaterialToggle = ({ projectImage, projectTitle }: MaterialToggleProps) => {
  const [selectedMaterial, setSelectedMaterial] = useState(materialOptions[0]);
  const [isDayMode, setIsDayMode] = useState(true);

  return (
    <div className="bg-card rounded-xl p-6 shadow-soft">
      <div className="flex items-center gap-2 mb-4">
        <Palette className="text-accent" size={20} />
        <h3 className="text-lg font-display font-semibold">Material & Mood Toggle</h3>
      </div>
      
      {/* Image Preview with Dynamic Styling */}
      <div 
        className="relative h-48 rounded-lg overflow-hidden mb-4 transition-all duration-500"
        style={{
          filter: isDayMode ? 'brightness(1.1) contrast(1.05)' : 'brightness(0.7) contrast(1.2) saturate(0.8) hue-rotate(10deg)',
        }}
      >
        <img
          src={selectedMaterial.image}
          alt={`${projectTitle} - ${selectedMaterial.name}`}
          className="w-full h-full object-cover transition-all duration-500"
        />
        
        {/* Color Overlay */}
        <div 
          className="absolute inset-0 mix-blend-overlay transition-all duration-500"
          style={{
            background: `linear-gradient(135deg, ${selectedMaterial.colors.accent}20, ${selectedMaterial.colors.primary}10)`
          }}
        />
        
        {/* Day/Night Toggle */}
        <div className="absolute top-3 right-3">
          <Button
            size="sm"
            variant="outline"
            onClick={() => setIsDayMode(!isDayMode)}
            className="bg-white/90 hover:bg-white border-0 shadow-sm"
          >
            {isDayMode ? <Sun size={16} /> : <Moon size={16} />}
          </Button>
        </div>
      </div>

      {/* Material Options */}
      <div className="space-y-3">
        <p className="text-sm text-muted-foreground">Choose Material Palette:</p>
        <div className="grid grid-cols-1 gap-2">
          {materialOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelectedMaterial(option)}
              className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-300 hover:shadow-md ${
                selectedMaterial.id === option.id
                  ? 'border-accent bg-accent/5 shadow-sm'
                  : 'border-border hover:border-accent/50'
              }`}
            >
              {/* Color Swatches */}
              <div className="flex gap-1">
                <div 
                  className="w-4 h-4 rounded-full border border-white shadow-sm"
                  style={{ backgroundColor: option.colors.primary }}
                />
                <div 
                  className="w-4 h-4 rounded-full border border-white shadow-sm"
                  style={{ backgroundColor: option.colors.secondary }}
                />
                <div 
                  className="w-4 h-4 rounded-full border border-white shadow-sm"
                  style={{ backgroundColor: option.colors.accent }}
                />
              </div>
              
              <span className="text-sm font-medium">{option.name}</span>
              
              {selectedMaterial.id === option.id && (
                <Badge className="ml-auto bg-accent text-accent-foreground text-xs">
                  Active
                </Badge>
              )}
            </button>
          ))}
        </div>
      </div>


    </div>
  );
};

export default MaterialToggle;