import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Academics", href: "#academics" },
    { name: "Facilities", href: "#facilities" },
    { name: "Teachers", href: "#teachers" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top bar */}
      <div
        className={`bg-primary text-primary-foreground py-2 px-4 transition-all duration-300 ${
          isScrolled ? "bg-primary/90" : "bg-primary"
        }`}
      >
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              +977-9821413117
            </span>
            <span className="hidden md:flex items-center gap-2">
              <Mail className="h-4 w-4" />
              info@shivarajschool.edu.np
            </span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Sun - Fri: 10:00 AM - 4:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-primary"
            : "bg-background/90 backdrop-blur-md shadow-md"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <a
              href="#home"
              className={`flex items-center gap-3 transition-colors ${
                isScrolled ? "text-white" : "text-primary"
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center overflow-hidden">
                <img
                  src="/public/logo.jpg"
                  alt="Shree Shivaraj Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <h1
                  className={`text-lg font-bold leading-tight transition-colors ${
                    isScrolled ? "text-white" : "text-primary"
                  }`}
                >
                  Shree Shivaraj
                </h1>
                <p
                  className={`text-xs transition-colors ${
                    isScrolled ? "text-white/80" : "text-muted-foreground"
                  }`}
                >
                  English Boarding School
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`transition-colors font-medium hover:text-primary ${
                    isScrolled ? "text-white" : "text-foreground"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button className="gold-gradient text-foreground font-semibold hover:opacity-90">
                Apply Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className={`lg:hidden p-2 transition-colors ${
                isScrolled ? "text-white" : "text-foreground"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div
              className={`lg:hidden py-4 border-t transition-colors ${
                isScrolled ? "border-white/20" : "border-border"
              }`}
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`transition-colors font-medium py-2 hover:text-primary ${
                      isScrolled ? "text-white" : "text-foreground"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <Button className="gold-gradient text-foreground font-semibold w-full mt-2">
                  Apply Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
