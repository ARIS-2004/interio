import { useState } from "react";
import { X, Bot, Zap, Phone, Mail, MessageCircle } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
    </svg>
  );

  const contactOptions = [
    {
      icon: Phone,
      label: "Call",
      href: "tel:+1234567890",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:info@interioaura.com",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: WhatsAppIcon,
      label: "WhatsApp",
      href: "https://wa.me/1234567890",
      color: "from-green-400 to-green-500",
    },
  ];

  return (
    <>
      {/* Contact Options */}
      <div className="fixed z-50 right-20 max-sm:right-12" style={{ bottom: "285px" }}>
        <div className="bg-gradient-to-br from-white/20 via-white/10 to-transparent backdrop-blur-md rounded-3xl p-2 shadow-2xl border border-white/30 relative animate-pulse-slow">
          {/* Floating particles effect */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <div
              className="absolute w-2 h-2 bg-white/30 rounded-full animate-ping"
              style={{ top: "10%", left: "20%", animationDelay: "0s" }}
            ></div>
            <div
              className="absolute w-1 h-1 bg-white/40 rounded-full animate-ping"
              style={{ top: "60%", right: "15%", animationDelay: "1s" }}
            ></div>
            <div
              className="absolute w-1.5 h-1.5 bg-white/20 rounded-full animate-ping"
              style={{ bottom: "20%", left: "30%", animationDelay: "2s" }}
            ></div>
          </div>

          {contactOptions.map((option, index) => (
            <a
              key={option.label}
              href={option.href}
              target={option.label === "WhatsApp" ? "_blank" : "_self"}
              rel={option.label === "WhatsApp" ? "noopener noreferrer" : ""}
              className={`group absolute w-12 h-12 bg-gradient-to-br ${
                option.color
              } transition-all duration-700 hover:w-32 hover:translate-x-[-72px] hover:scale-105 hover:shadow-2xl flex items-center justify-center overflow-hidden border-2 border-white/20 hover:border-white/40 ${
                index === 0
                  ? "rounded-t-2xl top-1"
                  : index === 1
                  ? "top-14"
                  : "rounded-b-2xl top-28"
              }`}
              style={{
                animationDelay: `${index * 0.3}s`,
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
              }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-inherit"></div>

              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-inherit opacity-0 group-hover:opacity-100 transition-all duration-700">
                <div className="absolute inset-2 border border-white/30 rounded-inherit animate-ping"></div>
              </div>

              {/* Enhanced label with glow - positioned on left */}
              <span className={`absolute left-4 text-white font-bold opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out whitespace-nowrap drop-shadow-lg group-hover:translate-x-1 ${
                option.label === "WhatsApp" ? "text-xs" : "text-sm"
              }`}>
                {option.label}
              </span>

              <div className="flex items-center justify-center w-full h-full group-hover:justify-end group-hover:pr-4 transition-all duration-700 relative z-10">
                {option.icon === WhatsAppIcon ? (
                  <WhatsAppIcon />
                ) : (
                  <option.icon
                    className="text-white drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                    size={20}
                  />
                )}
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out rounded-inherit"></div>
            </a>
          ))}
        </div>
      </div>

      {/* Chatbot */}
      <div className="fixed bottom-6 right-6 max-sm:right-2 z-50">
        {/* Chat Button */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-14 h-14 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-110 flex items-center justify-center group overflow-hidden"
          >
            {/* Rotating ring */}
            <div className="absolute inset-0 border-2 border-white/30 rounded-full animate-spin"></div>
            <div
              className="absolute inset-2 border border-white/20 rounded-full animate-spin"
              style={{ animationDirection: "reverse", animationDuration: "3s" }}
            ></div>

            {/* Pulsing core */}
            <div className="absolute inset-3 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>

            {/* Icon */}
            <div className="relative z-10">
              {isOpen ? (
                <X
                  className="text-white drop-shadow-lg animate-spin"
                  size={24}
                />
              ) : (
                <div className="relative animate-bounce">
                  <Bot className="text-white drop-shadow-lg" size={26} />
                  <Zap
                    className="absolute -top-2 -right-2 text-yellow-300 animate-pulse"
                    size={14}
                  />
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-400 rounded-full"></div>
                </div>
              )}
            </div>
          </button>

          {/* Online Indicator */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full border-2 border-white shadow-lg">
            <div className="absolute inset-0.5 bg-green-300 rounded-full opacity-75"></div>
          </div>
        </div>

        {/* Chat Window */}
        {isOpen && (
          <div className="absolute bottom-20 right-0 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-accent/20 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
            {/* Header */}
            <div className="bg-gradient-to-r from-accent to-accent/80 p-4 text-white">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <MessageCircle size={16} />
                </div>
                <div>
                  <h3 className="font-bold">InterioAura Assistant</h3>
                  <p className="text-xs opacity-90">Online now</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="p-4 h-64 overflow-y-auto bg-gray-50">
              <div className="mb-4">
                <div className="bg-white rounded-lg p-3 shadow-sm max-w-xs">
                  <p className="text-sm text-black">
                    Hi there! 👋 I'm here to help you with your interior design
                    needs. How can I assist you today?
                  </p>
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-accent"
                />
                <button className="bg-accent text-white p-2 rounded-lg hover:bg-accent/90 transition-colors">
                  <MessageCircle size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Chatbot;
