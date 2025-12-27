import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { navigationItems, smoothScrollToSection } from "@/lib/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "";
  };

  const handleNavClick = (
    item: { isHome?: boolean; targetId?: string },
    e: React.MouseEvent
  ) => {
    e.preventDefault();

    if (item.isHome) {
      smoothScrollToSection();
    } else {
      smoothScrollToSection(item.targetId);
    }

    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="flex items-center space-x-2"
          onClick={(e) => handleNavClick({ isHome: true }, e)}
          aria-label="EduHub - ESL Education Apps"
        >
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: "#D4A574" }}>
            EduHub
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="nav-link"
              onClick={(e) => handleNavClick(item, e)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-3 focus:outline-none"
          style={{ color: "#1A1A18" }}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col pt-16 px-6 md:hidden transition-all duration-300 ease-in-out",
          isMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        )}
        style={{ backgroundColor: "#FAFAF8" }}
      >
        <nav className="flex flex-col space-y-8 items-center mt-8">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg transition-colors"
              style={{ color: "#1A1A18" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F5E6D3")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              onClick={(e) => handleNavClick(item, e)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
