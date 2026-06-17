import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Award, Lightbulb } from "lucide-react";
import Layout from "@/components/Layout";
import projectCommercial from "@/assets/Genie-Civil-Plancher.jpg";

const About = () => {
  const values = [
    { icon: Target, title: "Excellence", description: "Nous visons l'excellence dans chaque projet, avec une attention méticuleuse aux détails." },
    { icon: Users, title: "Collaboration", description: "Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins." },
    { icon: Award, title: "Qualité", description: "Nous utilisons uniquement des matériaux de première qualité pour garantir la durabilité." },
    { icon: Lightbulb, title: "Innovation", description: "Nous adoptons les dernières technologies et techniques de construction." },
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
              Expertise au service du bâtiment
            </h1>
            <p className="text-lg text-primary-foreground/80">
              <b>Entreprise Générale de Bâtiment RH</b> est une structure dynamique qui accompagne de A à Z ses clients dans leurs projets de rénovation et de construction en Tunisie.
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
                Une vision bâtie sur le savoir-faire
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Fondée par Hichem Rassil, <b>Entreprise Générale de Bâtiment RH</b> est née de la volonté d'apporter une approche rigoureuse et novatrice au secteur du bâtiment.
                </p>
                <p>
                  Sous l'impulsion de son fondateur, notre entreprise s'est structurée pour offrir une expertise technique pointue, plaçant la satisfaction client et le respect des engagements au cœur de chaque intervention.
                </p>
                <p>
                  Parcours de terrain, exigence de la qualité et maîtrise des enjeux de construction moderne : nous nous positionnons aujourd'hui comme un partenaire de confiance pour tous vos projets en Tunisie, de la conception à la réalisation finale.
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
              <div key={index} className="bg-card rounded-xl p-8 card-shadow text-center">
                <div className="w-16 h-16 accent-gradient rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12">
            Des professionnels passionnés
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
            Notre équipe dédiée, dirigée par Hichem Rassil, met son savoir-faire et son expertise technique au service de la réussite de vos projets sur tout le territoire tunisien.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-muted rounded-xl">Projets sur-mesure</div>
            <div className="p-8 bg-muted rounded-xl">Qualité certifiée</div>
            <div className="p-8 bg-muted rounded-xl">Suivi personnalisé</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Envie de nous rejoindre ou de lancer votre projet ?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Nous sommes à votre écoute pour discuter de vos besoins et vous accompagner dans toutes vos réalisations partout en Tunisie.
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
