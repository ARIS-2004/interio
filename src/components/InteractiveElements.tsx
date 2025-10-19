import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

interface InteractiveElementsProps {
  className?: string;
}

const InteractiveElements = ({ className = "" }: InteractiveElementsProps) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {/* Quick Contact */}
      <div className="bg-gradient-to-r from-accent to-purple-500 rounded-xl p-4 text-white">
        <div className="flex items-center gap-2 mb-2">
          <Clock className="text-white" size={18} />
          <h3 className="text-base font-bold">Free Consultation</h3>
        </div>
        <p className="text-xs mb-3 opacity-90">Book your 30-min design call</p>
        <Button 
          asChild
          size="sm" 
          className="w-full bg-white text-accent hover:bg-gray-100 font-bold"
        >
          <Link to="/contact">Schedule Now</Link>
        </Button>
      </div>
    </div>
  );
};

export default InteractiveElements;