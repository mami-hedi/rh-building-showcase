import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, Hammer, PaintBucket, Home, Wrench, HardHat, Ruler, Shield, ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Construction Neuve",
      description: "Nous réalisons tous types de constructions neuves : maisons individuelles, immeubles résidentiels, bâtiments commerciaux et industriels. De la conception à la livraison, nous garantissons un travail de qualité.",
      features: ["Maisons individuelles", "Immeubles collectifs", "Bâtiments commerciaux", "Locaux industriels"],
    },
    {
      icon: Hammer,
      title: "Gros Œuvre",
      description: "Notre expertise en gros œuvre couvre l'ensemble des travaux structurels : fondations, murs porteurs, dalles, charpentes. Nous utilisons des techniques modernes pour garantir la solidité de vos constructions.",
      features: ["Fondations", "Maçonnerie", "Structures béton", "Charpente"],
    },
    {
      icon: PaintBucket,
      title: "Second Œuvre",
      description: "Nous prenons en charge tous les travaux de finition : plâtrerie, peinture, revêtements de sol, menuiserie. Chaque détail est soigné pour un rendu impeccable.",
      features: ["Plâtrerie", "Peinture", "Carrelage", "Menuiserie"],
    },
    {
      icon: Home,
      title: "Rénovation",
      description: "Que ce soit pour une rénovation complète ou partielle, nous modernisons vos espaces tout en respectant le caractère de votre bien. Extension, surélévation, réhabilitation : nous avons la solution.",
      features: ["Rénovation complète", "Extension", "Surélévation", "Réhabilitation"],
    },
    {
      icon: Wrench,
      title: "Aménagement Intérieur",
      description: "Nous créons des espaces intérieurs sur mesure adaptés à vos besoins et à votre style de vie. Cuisine, salle de bain, dressing : chaque projet est unique.",
      features: ["Cuisines", "Salles de bain", "Dressings", "Espaces de vie"],
    },
    {
      icon: Ruler,
      title: "Études & Conception",
      description: "Notre bureau d'études vous accompagne dans la conception de vos projets. Plans, études techniques, permis de construire : nous gérons toutes les démarches administratives.",
      features: ["Plans architecturaux", "Études techniques", "Permis de construire", "Suivi de chantier"],
    },
    {
      icon: HardHat,
      title: "Maîtrise d'Œuvre",
      description: "En tant que maître d'œuvre, nous coordonnons l'ensemble des intervenants sur votre chantier. Nous garantissons le respect des délais, du budget et de la qualité.",
      features: ["Coordination de chantier", "Gestion des sous-traitants", "Contrôle qualité", "Respect des délais"],
    },
    {
      icon: Shield,
      title: "Garanties & SAV",
      description: "Tous nos travaux sont couverts par une garantie décennale. Notre service après-vente reste à votre disposition pour assurer votre satisfaction à long terme.",
      features: ["Garantie décennale", "Garantie biennale", "Garantie de parfait achèvement", "SAV réactif"],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent font-medium text-sm mb-6">
              Nos Services
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              Des solutions complètes pour tous vos projets
            </h1>
            <p className="text-lg text-primary-foreground/80">
              De la construction neuve à la rénovation, nous offrons une gamme complète de services pour répondre à tous vos besoins en bâtiment.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 accent-gradient rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-muted rounded-xl p-12 flex items-center justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <service.icon className="w-32 h-32 text-accent/20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
      Besoin d'un service spécifique ?
    </h2>
    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
      Contactez-nous pour discuter de votre projet. Nous vous proposerons une solution adaptée à vos besoins et à votre budget.
    </p>
    
    {/* Correction de la taille, gestion du responsive et du retour à la ligne */}
    <Button 
      variant="accent" 
      size="lg" 
      className="md:scale-110 w-full sm:w-auto max-w-full h-auto py-3 px-4 sm:px-6 inline-flex items-center justify-center whitespace-normal text-center" 
      asChild
    >
      <Link to="/contact/#devis">
        <span className="text-sm sm:text-base md:text-lg font-semibold break-words">
          Demander un devis gratuit
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
