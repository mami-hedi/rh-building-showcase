import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "../i18n/LanguageContext";
import FlagFR from "@/assets/flag-fr.svg";
import FlagEN from "@/assets/flag-en.svg";

const Header = () => {
  const { t, lang, setLang } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.services, path: "/services" },
    { name: t.nav.gallery, path: "/galerie" },
    { name: t.nav.about, path: "/a-propos" },
    { name: t.nav.contact, path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const LangSwitcher = ({ className }: { className?: string }) => (
    <div className={`flex items-center gap-1 ${className}`}>
      <button
        onClick={() => setLang("fr")}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
          lang === "fr"
            ? "border-border bg-secondary opacity-100"
            : "border-transparent bg-transparent opacity-40 hover:opacity-70"
        }`}
      >
        <img src={FlagFR} alt="Français" className="w-5 h-4 rounded-sm object-cover" />
        <span>FR</span>
      </button>

      <button
        onClick={() => setLang("en")}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
          lang === "en"
            ? "border-border bg-secondary opacity-100"
            : "border-transparent bg-transparent opacity-40 hover:opacity-70"
        }`}
      >
        <img src={FlagEN} alt="English" className="w-5 h-4 rounded-sm object-cover" />
        <span>EN</span>
      </button>
    </div>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 accent-gradient rounded-lg flex items-center justify-center shrink-0">
              <span className="text-accent-foreground font-heading font-bold text-lg sm:text-xl">RH</span>
            </div>
            <div>
              <p className="font-heading font-bold text-foreground text-[10px] sm:text-sm leading-tight">Entreprise Générale</p>
              <p className="font-heading font-bold text-[10px] sm:text-sm leading-tight text-gradient">de Bâtiment RH</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors ${
                  isActive(link.path) ? "text-accent" : "text-foreground hover:text-accent"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <LangSwitcher />
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+21698308969" className="flex items-center gap-2 text-foreground hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">98 30 89 69</span>
            </a>
            <Button variant="accent" asChild>
              <Link to="/contact">{t.nav.quote}</Link>
            </Button>
          </div>

          {/* Mobile Hamburger */}
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
        <div className="lg:hidden bg-card border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-accent bg-accent/10"
                    : "text-foreground hover:text-accent hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="border-t border-border mt-3 pt-4 flex flex-col gap-3">
              
               <a href="tel:+21698308969"
                className="flex items-center gap-2 px-4 py-2 text-foreground hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">98 30 89 69</span>
              </a>

              {/* Mobile: bouton orange + drapeaux sur la même ligne */}
              <div className="flex items-center gap-3">
                <Button variant="accent" asChild className="flex-1">
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    {t.nav.quote}
                  </Link>
                </Button>
                <LangSwitcher />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;