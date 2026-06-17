import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import Layout from "@/components/Layout";
import GenieCivilPlancher from "@/assets/Genie-Civil-Plancher.jpg";
import GenieCivilPlancher1 from "@/assets/Genie-Civil-Plancher-1.jpg";
import jardinetpiscine from "@/assets/jardinetpiscine.jpg";
import jardinetpiscine1 from "@/assets/jardinetpiscine1.jpg";
import stylearabe from "@/assets/Style-Arabe.jpg";
import renovationPiscine from "@/assets/renovationPiscine.jpg";
import renovationPiscine1 from "@/assets/renovationpiscine1.jpg";
import Arcature from "@/assets/Arcature.jpg";
import Arcature1 from "@/assets/arcature1.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("Tous");

  const categories = ["Tous", "Arcature", "Jardin & Pisicne", "Travaux de plancher", "Style Arabe","Renovation Piscine"];

  const projects = [
    {
      image: jardinetpiscine,
      title: "Jardin & Pisicne",
      category: "Jardin & Pisicne",
      
    },
    {
      image: jardinetpiscine1,
      title: "Jardin & Pisicne",
      category: "Jardin & Pisicne",
      
    },
    {
      image: GenieCivilPlancher,
      title: "Travaux de plancher",
      category: "Travaux de plancher",
      
    },
    {
      image: GenieCivilPlancher1,
      title: "Travaux de plancher",
      category: "Travaux de plancher",
      
    },
    {
      image: stylearabe,
      title: "Style Arabe",
      category: "Style Arabe",
      
    },
    {
      image: renovationPiscine,
      title: "Renovation Piscine",
      category: "Renovation Piscine",
      
    },
    {
      image: renovationPiscine1,
      title: "Renovation Piscine",
      category: "Renovation Piscine",
      
    },
    {
      image: Arcature,
      title: "Arcature",
      category: "Arcature",
      
    },
    {
      image: Arcature1,
      title: "Arcature",
      category: "Arcature",
      
    },
  ];

  const filteredProjects = activeCategory === "Tous" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent font-medium text-sm mb-6">
              Notre Galerie
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              Nos réalisations
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Découvrez quelques-uns de nos projets les plus emblématiques. Chaque réalisation témoigne de notre savoir-faire et de notre engagement envers la qualité.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
<section className="py-8 bg-background border-b border-border static md:sticky top-20 z-40">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap gap-3 justify-center">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
            activeCategory === category
              ? "accent-gradient text-accent-foreground"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  </div>
</section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
              >
                <div className="aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 accent-gradient rounded-full text-accent-foreground text-sm font-medium mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-primary-foreground">
                    {project.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm mt-1">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-primary-foreground hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Project"
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-muted">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
      Vous avez un projet similaire ?
    </h2>
    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
      Contactez-nous pour discuter de votre projet. Nous vous accompagnerons de A à Z.
    </p>
    
    {/* Harmonisation de la taille et sécurité anti-débordement mobile */}
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

export default Gallery;
