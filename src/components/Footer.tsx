import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="hero-gradient text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 accent-gradient rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-heading font-bold text-xl">RH</span>
              </div>
              <div>
                <p className="font-heading font-bold text-sm leading-tight">
                  Entreprise Générale
                </p>
                <p className="font-heading font-bold text-sm leading-tight text-accent">
                  de Bâtiment RH
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Votre partenaire de confiance pour tous vos projets de construction et de rénovation depuis plus de 20 ans.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Navigation</h3>
            <ul className="space-y-3">
              {[
                { name: "Accueil", path: "/" },
                { name: "Services", path: "/services" },
                { name: "Galerie", path: "/galerie" },
                { name: "À Propos", path: "/a-propos" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Nos Services</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>Construction neuve</li>
              <li>Rénovation</li>
              <li>Gros œuvre</li>
              <li>Second œuvre</li>
              <li>Aménagement intérieur</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  123 Avenue du Bâtiment<br />75001 Paris, France
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+33123456789" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  01 23 45 67 89
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:contact@batiment-rh.fr" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  contact@batiment-rh.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Entreprise Générale de Bâtiment RH. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
