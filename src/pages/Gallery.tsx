import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import Layout from "@/components/Layout";
import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectRenovation from "@/assets/project-renovation.jpg";
import projectIndustrial from "@/assets/project-industrial.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("Tous");

  const categories = ["Tous", "Résidentiel", "Commercial", "Rénovation", "Industriel"];

  const projects = [
    {
      image: projectResidential,
      title: "Résidence Les Jardins",
      category: "Résidentiel",
      description: "Ensemble résidentiel de 45 appartements",
    },
    {
      image: projectCommercial,
      title: "Tour Horizon",
      category: "Commercial",
      description: "Immeuble de bureaux de 15 000 m²",
    },
    {
      image: projectRenovation,
      title: "Villa Moderne",
      category: "Rénovation",
      description: "Rénovation complète d'une villa des années 70",
    },
    {
      image: projectIndustrial,
      title: "Entrepôt Logistique",
      category: "Industriel",
      description: "Centre logistique de 25 000 m²",
    },
    {
      image: projectResidential,
      title: "Les Terrasses du Parc",
      category: "Résidentiel",
      description: "Programme immobilier de standing",
    },
    {
      image: projectCommercial,
      title: "Centre Commercial Étoile",
      category: "Commercial",
      description: "Extension et modernisation",
    },
    {
      image: projectRenovation,
      title: "Maison de Maître",
      category: "Rénovation",
      description: "Restauration patrimoniale",
    },
    {
      image: projectIndustrial,
      title: "Usine Agroalimentaire",
      category: "Industriel",
      description: "Construction aux normes HACCP",
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
      <section className="py-8 bg-background border-b border-border sticky top-20 z-40">
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
          <Button variant="accent" size="xl" asChild>
            <Link to="/contact">
              Demander un devis gratuit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
