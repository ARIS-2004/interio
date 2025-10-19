import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { X, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-living.jpg";
import logo from "@/assets/logo 2.png";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationModal = ({ isOpen, onClose }: ConsultationModalProps) => {
  const [formData, setFormData] = useState({
    propertyType: "",
    location: "",
    name: "",
    mobile: "",
    whatsappUpdates: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
    onClose();
  };

  return (
    <div className="max-sm:px-[5px] sm:px-8">
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl max-sm:max-w-[calc(100vw-10px)] p-0 bg-white rounded-2xl overflow-hidden border-0 shadow-2xl">
        <DialogTitle className="sr-only">Free Design Consultation</DialogTitle>


        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors z-30 bg-white/90 rounded-full p-2 hover:bg-white shadow-sm"
        >
          <X size={16} />
        </button>

        <div className="flex h-[600px] max-sm:h-auto max-sm:w-full">
          {/* Left side - Image */}
          <div className="w-1/2 max-sm:w-2/5 relative">
            {/* Logo on image side */}
            <div className="absolute top-4 left-4 z-20">
              <img
                src={logo}
                alt="InterioAura"
                style={{ height: "120px" }}
                className="w-auto"
              />
            </div>
            <img
              src={heroImg}
              alt="Interior Design"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Right side - Form */}
          <div className="w-1/2 max-sm:w-3/5 p-6 max-sm:p-1 flex flex-col justify-center relative">
            <div className="mb-3 mt-4 max-sm:mt-8 pr-8 max-sm:pr-6">
              <h2 className="text-xl max-sm:text-sm font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2 leading-tight">
                Get a free design consultation
              </h2>
              <p className="text-gray-600 text-sm max-sm:text-xs">
                Transform your space with our expert designers
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 max-sm:space-y-1">
              <div>
                <Label
                  htmlFor="propertyType"
                  className="font-medium text-gray-700 mb-2 sm:mb-1 block text-sm sm:text-xs"
                >
                  Property type
                </Label>
                <Select
                  value={formData.propertyType}
                  onValueChange={(value) =>
                    setFormData({ ...formData, propertyType: value })
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1bhk">1 BHK</SelectItem>
                    <SelectItem value="2bhk">2 BHK</SelectItem>
                    <SelectItem value="3bhk">3 BHK</SelectItem>
                    <SelectItem value="4bhk">4+ BHK / Duplex</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label
                  htmlFor="location"
                  className="font-medium text-gray-700 mb-2 sm:mb-1 block text-sm sm:text-xs"
                >
                  Property Location
                </Label>
                <Input
                  id="location"
                  type="text"
                  placeholder="Enter your location"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  className="w-full"
                />
              </div>

              <div>
                <Label
                  htmlFor="name"
                  className="font-medium text-gray-700 mb-2 sm:mb-1 block text-sm sm:text-xs"
                >
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full"
                />
              </div>

              <div>
                <Label
                  htmlFor="mobile"
                  className="font-medium text-gray-700 mb-2 sm:mb-1 block text-sm sm:text-xs"
                >
                  Mobile Number
                </Label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 sm:px-2 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm sm:text-xs">
                    +91
                  </span>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="Enter mobile number"
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                    className="rounded-l-none"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="whatsapp"
                  checked={formData.whatsappUpdates}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      whatsappUpdates: checked as boolean,
                    })
                  }
                />
                <Label
                  htmlFor="whatsapp"
                  className="text-gray-600 flex items-center text-sm sm:text-xs"
                >
                  Yes, send me updates via WhatsApp.
                  <svg
                    className="ml-1 h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="#25D366"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white font-semibold py-3 sm:py-1.5 rounded-lg transition-all duration-300 hover:shadow-lg text-sm sm:text-xs"
              >
                Book Now
              </Button>
            </form>
          </div>
        </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ConsultationModal;
