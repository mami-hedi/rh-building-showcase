import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Users, Target, Award, Lightbulb } from "lucide-react";
import Layout from "@/components/Layout";
import projectCommercial from "@/assets/project-commercial.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque projet, avec une attention méticuleuse aux détails.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins.",
    },
    {
      icon: Award,
      title: "Qualité",
      description: "Nous utilisons uniquement des matériaux de première qualité pour garantir la durabilité.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Nous adoptons les dernières technologies et techniques de construction.",
    },
  ];

  const timeline = [
    { year: "2003", event: "Création de l'entreprise" },
    { year: "2008", event: "Premier projet de plus de 100 logements" },
    { year: "2012", event: "Obtention de la certification ISO 9001" },
    { year: "2016", event: "Expansion régionale" },
    { year: "2020", event: "Cap des 500 projets réalisés" },
    { year: "2024", event: "Lancement du pôle construction durable" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent font-medium text-sm mb-6">
              À Propos
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              Plus de 20 ans d'expertise au service du bâtiment
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Entreprise Générale de Bâtiment RH est une société familiale fondée en 2003, spécialisée dans la construction et la rénovation de bâtiments.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-heading font-semibold uppercase tracking-wider text-sm">
                Notre Histoire
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-6">
                Une passion transmise de génération en génération
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Fondée en 2003 par Robert Hervé, Entreprise Générale de Bâtiment RH est née d'une passion pour le métier de bâtisseur transmise de père en fils depuis trois générations.
                </p>
                <p>
                  Aujourd'hui dirigée par la deuxième génération, notre entreprise a su évoluer tout en conservant les valeurs qui ont fait son succès : l'excellence, la rigueur et le respect des engagements.
                </p>
                <p>
                  Avec plus de 500 projets réalisés et une équipe de 50 professionnels qualifiés, nous sommes devenus un acteur incontournable de la construction en Île-de-France.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={projectCommercial}
                alt="Notre histoire"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-heading font-semibold uppercase tracking-wider text-sm">
              Nos Valeurs
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-4">
              Ce qui nous guide au quotidien
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-8 card-shadow text-center"
              >
                <div className="w-16 h-16 accent-gradient rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-heading font-semibold uppercase tracking-wider text-sm">
              Notre Parcours
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-4">
              Les étapes clés de notre histoire
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-center gap-8">
                    <div className="w-16 h-16 accent-gradient rounded-full flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-accent-foreground font-heading font-bold text-sm">
                        {item.year}
                      </span>
                    </div>
                    <div className="bg-card rounded-xl p-6 card-shadow flex-1">
                      <p className="text-foreground font-medium">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-heading font-semibold uppercase tracking-wider text-sm">
              Notre Équipe
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-4">
              Des professionnels passionnés
            </h2>
            <p className="text-muted-foreground text-lg">
              Notre équipe de 50 professionnels qualifiés met son expertise à votre service.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Ingénieurs", value: "8" },
              { label: "Chefs de chantier", value: "12" },
              { label: "Ouvriers qualifiés", value: "25" },
              { label: "Administratifs", value: "5" },
            ].map((stat, index) => (
              <div key={index} className="bg-card rounded-xl p-8 card-shadow">
                <p className="text-4xl font-heading font-bold text-accent mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Envie de nous rejoindre ?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Nous sommes toujours à la recherche de talents passionnés. Contactez-nous pour découvrir nos opportunités.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Nous contacter
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
