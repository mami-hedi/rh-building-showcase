import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Award, Lightbulb } from "lucide-react";
import Layout from "@/components/Layout";
import { useLanguage } from "../i18n/LanguageContext"; // Import du hook
import projectCommercial from "@/assets/Genie-Civil-Plancher.jpg";

const About = () => {
  const { t } = useLanguage();

  // Mapping des icônes avec les textes traduits
  const values = [
    { icon: Target, title: t.about.values.excellence.title, description: t.about.values.excellence.desc },
    { icon: Users, title: t.about.values.collaboration.title, description: t.about.values.collaboration.desc },
    { icon: Award, title: t.about.values.quality.title, description: t.about.values.quality.desc },
    { icon: Lightbulb, title: t.about.values.innovation.title, description: t.about.values.innovation.desc },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent font-medium text-sm mb-6">
              {t.about.badge}
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              {t.about.title}
            </h1>
            <p className="text-lg text-primary-foreground/80">
              {t.about.subtitle}
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
                {t.about.story.badge}
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-6">
                {t.about.story.title}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {t.about.story.paragraphs.map((para: string, i: number) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={projectCommercial}
                alt={t.about.story.title}
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
              {t.about.values.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-4">
              {t.about.values.title}
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
            {t.about.team.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
            {t.about.team.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.about.team.points.map((point: string, i: number) => (
              <div key={i} className="p-8 bg-muted rounded-xl">{point}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            {t.about.cta.title}
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            {t.about.cta.subtitle}
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              {t.about.cta.button}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;