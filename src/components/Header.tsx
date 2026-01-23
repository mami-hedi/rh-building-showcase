import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Galerie", path: "/galerie" },
    { name: "À Propos", path: "/a-propos" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 accent-gradient rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-heading font-bold text-xl">RH</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-heading font-bold text-foreground text-sm leading-tight">
                Entreprise Générale
              </p>
              <p className="font-heading font-bold text-sm leading-tight text-gradient">
                de Bâtiment RH
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-300 ${
                  isActive(link.path)
                    ? "text-accent"
                    : "text-foreground hover:text-accent"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+33123456789" className="flex items-center gap-2 text-foreground hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">01 23 45 67 89</span>
            </a>
            <Button variant="accent" asChild>
              <Link to="/contact">Devis Gratuit</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium py-2 transition-colors ${
                  isActive(link.path)
                    ? "text-accent"
                    : "text-foreground hover:text-accent"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="accent" className="mt-2" asChild>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                Devis Gratuit
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
