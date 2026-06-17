import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="hero-gradient text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 accent-gradient rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-heading font-bold text-xl">RH</span>
              </div>
              <div>
                <p className="font-heading font-bold text-sm leading-tight">Entreprise Générale</p>
                <p className="font-heading font-bold text-sm leading-tight text-accent">de Bâtiment RH</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">{t.footer.description}</p>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-6">{t.footer.navigation}</h3>
            <ul className="space-y-3">
              {[
                { name: t.nav.home, path: "/" },
                { name: t.nav.services, path: "/services" },
                { name: t.nav.gallery, path: "/galerie" },
                { name: t.nav.about, path: "/a-propos" },
                { name: t.nav.contact, path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-primary-foreground/80 hover:text-accent transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-6">{t.footer.our_services}</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              {t.services.items.slice(0, 5).map((item, idx) => <li key={idx}>{item.title}</li>)}
            </ul>
          </div>

          <div>
  <h3 className="font-heading font-bold text-lg mb-6">{t.footer.contact}</h3>
  <ul className="space-y-4 text-primary-foreground/80">
    <li className="flex items-start gap-3">
      <MapPin className="w-5 h-5 text-accent shrink-0" />
      
        <a href="https://maps.google.com/?q=Avenue+des+Nations+Unies+Hammamet"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-colors"
      >
        Avenue des Nations Unies, Hammamet
      </a>
    </li>
    <li className="flex items-center gap-3">
      <Phone className="w-5 h-5 text-accent shrink-0" />
      <a href="tel:+21698308969" className="hover:text-accent transition-colors">
        98 30 89 69
      </a>
    </li>
    <li className="flex items-center gap-3">
      <MessageCircle className="w-5 h-5 text-accent shrink-0" />
      <a href="https://wa.me/21655308116" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
        55 30 81 16
      </a>
    </li>
    <li className="flex items-center gap-3">
      <Mail className="w-5 h-5 text-accent shrink-0" />
      <a href="mailto:entgbrh@gmail.com" className="hover:text-accent transition-colors">
        entgbrh@gmail.com
      </a>
    </li>
  </ul>
</div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Entreprise Générale de Bâtiment RH. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;