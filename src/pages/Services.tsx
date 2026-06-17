import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, Hammer, PaintBucket, Home, Wrench, HardHat, Ruler, Shield, ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { useLanguage } from "../i18n/LanguageContext"; // Import du hook

const Services = () => {
  const { t } = useLanguage();

  // On mappe les icônes sur la structure de traduction
  const iconMap: { [key: string]: any } = {
    Building2, Hammer, PaintBucket, Home, Wrench, HardHat, Ruler, Shield
  };

  // Liste des services indexée pour le mapping
  const serviceList = [
    { icon: Building2 }, { icon: Hammer }, { icon: PaintBucket }, 
    { icon: Home }, { icon: Wrench }, { icon: Ruler }, 
    { icon: HardHat }, { icon: Shield }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent font-medium text-sm mb-6">
              {t.services.badge}
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              {t.services.title}
            </h1>
            <p className="text-lg text-primary-foreground/80">
              {t.services.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {t.services.items.map((service, index) => {
              const IconComponent = serviceList[index].icon;
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-16 h-16 accent-gradient rounded-xl flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  <div className={`bg-muted rounded-xl p-12 flex items-center justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <IconComponent className="w-32 h-32 text-accent/20" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            {t.cta.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>
          
          <Button 
            variant="accent" 
            size="lg" 
            className="md:scale-110 w-full sm:w-auto max-w-full h-auto py-3 px-4 sm:px-6 inline-flex items-center justify-center whitespace-normal text-center" 
            asChild
          >
            <Link to="/contact/#devis">
              <span className="text-sm sm:text-base md:text-lg font-semibold break-words">
                {t.hero.cta_quote}
              </span>
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;