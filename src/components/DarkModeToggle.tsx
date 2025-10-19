import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
    setIsInitialized(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative w-12 h-8 overflow-hidden hover:bg-accent/10 transition-all duration-300 rounded-full bg-gradient-to-r from-orange-200 to-blue-200"
    >
      {/* Container for sliding animation */}
      <div className="relative w-full h-full flex items-center">
        {/* Sun Icon */}
        <Sun 
          className={`absolute h-5 w-5 text-orange-500 left-1/2 transform -translate-x-1/2 ${
            isInitialized ? 'transition-all duration-700 ease-in-out' : ''
          } ${
            isDark 
              ? 'translate-x-[-300%] rotate-180 opacity-0' 
              : 'translate-x-[-50%] rotate-0 opacity-100'
          }`} 
        />
        {/* Moon Icon */}
        <Moon 
          className={`absolute h-5 w-5 text-blue-600 left-1/2 transform -translate-x-1/2 ${
            isInitialized ? 'transition-all duration-700 ease-in-out' : ''
          } ${
            isDark 
              ? 'translate-x-[-50%] rotate-0 opacity-100' 
              : 'translate-x-[300%] rotate-180 opacity-0'
          }`} 
        />

      </div>
    </Button>
  );
};

export default DarkModeToggle;