import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, Hammer, PaintBucket, Home, Wrench, HardHat, ArrowRight, CheckCircle, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import { useLanguage } from "../i18n/LanguageContext"; // Import du hook

// Vos imports d'images restent inchangés
import heroImage from "@/assets/hero-construction.jpg";
import jardinetpiscine from "@/assets/jardinetpiscine.jpg";
import renovationPiscine from "@/assets/renovationpiscine1.jpg";
import GenieCivilPlancher1 from "@/assets/Genie-Civil-Plancher-1.jpg";
import GenieCivilPlancher2 from "@/assets/Genie-Civil-Plancher-2.jpg";
import SEO from "@/components/SEO";

const Index = () => {
  const { t } = useLanguage();

  // Mapping des icônes pour les services dynamiques
  const iconMap: { [key: string]: any } = {
    Building2, Hammer, PaintBucket, Home, Wrench, HardHat
  };

  // Les données sont maintenant injectées via t.services.items
  const servicesData = t.services.items.map((item, index) => ({
    ...item,
    icon: Object.values(iconMap)[index]
  }));

  const stats = [
    { value: "20+", label: t.stats.experience },
    { value: "500+", label: t.stats.projects },
    { value: "50+", label: t.stats.professionals },
    { value: "100%", label: t.stats.satisfaction },
  ];

  const projects = [
    { image: jardinetpiscine, title: "Jardin & piscine" },
    { image: renovationPiscine, title: "Renovation Piscine" },
    { image: GenieCivilPlancher1, title: "Plancher" }
  ];

  return (

    <Layout>
       <SEO
  title="Accueil"
  description="Entreprise Générale de Bâtiment RH — Construction, rénovation et aménagement en Tunisie. Devis gratuit."
  url="https://rh-building-showcase.vercel.app/"
/>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="absolute inset-0 hero-gradient opacity-85" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block px-4 py-2 accent-gradient rounded-full text-accent-foreground font-medium text-sm mb-6">
              {t.hero.badge}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              {t.hero.title1}
              <span className="block text-accent">{t.hero.title2}</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  {t.hero.cta_quote}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/services">{t.hero.cta_services}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-heading font-bold text-accent mb-2">{stat.value}</p>
                <p className="text-primary-foreground/80 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-heading font-semibold uppercase tracking-wider text-sm">{t.services.badge}</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-4">{t.services.title}</h2>
            <p className="text-muted-foreground text-lg">{t.services.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <div key={index} className="group bg-card rounded-xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 border border-border">
                <div className="w-14 h-14 accent-gradient rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="default" size="lg" asChild>
              <Link to="/services">
                {t.services.see_all}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-heading font-semibold uppercase tracking-wider text-sm">{t.projects.badge}</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-4">{t.projects.title}</h2>
            <p className="text-muted-foreground text-lg">{t.projects.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-heading font-bold text-primary-foreground">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-heading font-semibold uppercase tracking-wider text-sm">{t.why_us.badge}</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-6">{t.why_us.title}</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{t.why_us.subtitle}</p>
              
              <ul className="space-y-4">
                {t.why_us.points.map((point, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
              <Button variant="accent" size="lg" className="mt-8" asChild>
                <Link to="/a-propos">{t.why_us.learn_more}</Link>
              </Button>
            </div>

            <div className="relative">
              <img src={GenieCivilPlancher2} alt="Expertise" className="rounded-xl shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-6 card-shadow border border-border">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 accent-gradient rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t.why_us.call_us}</p>
                    <p className="text-xl font-heading font-bold text-foreground">98 30 89 69</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">{t.cta.title}</h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">{t.cta.subtitle}</p>
          <Button variant="hero" size="lg" className="md:scale-110" asChild>
            <Link to="/contact/#devis">
              {t.cta.button}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;