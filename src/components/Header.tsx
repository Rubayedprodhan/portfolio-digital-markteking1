import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo1.png";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2">
            {/* Logo + Name both clickable */}
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-2 group transition-transform hover:scale-105"
            >
              <div className="w-12 h-12 rounded-xl bg-[#f8f8f8] flex items-center justify-center shadow-lg">
                <img src={logo} alt="Logo" className="h-10 w-auto" />
              </div>

              <span className="font-semibold text-lg hidden sm:block group-hover:text-primary transition-colors">
                Rubayed Prodhan
              </span>
            </button>
          </div>


          {/* Desktop Navigation */}

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-4 animate-fade-in">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
