import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import { useLanguage } from "../i18n/LanguageContext";

import GenieCivilPlancher from "@/assets/Genie-Civil-Plancher.jpg";
import GenieCivilPlancher1 from "@/assets/Genie-Civil-Plancher-1.jpg";
import GenieCivilPlancher3 from "@/assets/Genie-Civil-Plancher-3.jpg";
import jardinetpiscine from "@/assets/jardinetpiscine.jpg";
import jardinetpiscine1 from "@/assets/jardinetpiscine1.jpg";
import jardinetpiscine2 from "@/assets/jardinetpiscine2.jpg";
import stylearabe from "@/assets/Style-Arabe.jpg";
import renovationPiscine from "@/assets/renovationPiscine.jpg";
import renovationPiscine1 from "@/assets/renovationpiscine1.jpg";
import Arcature from "@/assets/Arcature.jpg";
import Arcature1 from "@/assets/arcature1.jpg";
import Arcature2 from "@/assets/arcature2.jpg";

const Gallery = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: "all", label: t.gallery.all },
    { id: "arcature", label: "Arcature" },
    { id: "garden", label: t.gallery.garden },
    { id: "flooring", label: t.gallery.flooring },
    { id: "arabian", label: t.gallery.arabian },
    { id: "pool", label: t.gallery.pool },
  ];

  const projects = [
    { image: jardinetpiscine, title: t.gallery.garden, category: "garden" },
    { image: jardinetpiscine1, title: t.gallery.garden, category: "garden" },
    { image: jardinetpiscine2, title: t.gallery.garden, category: "garden" },
    { image: GenieCivilPlancher, title: t.gallery.flooring, category: "flooring" },
    { image: GenieCivilPlancher1, title: t.gallery.flooring, category: "flooring" },
    { image: GenieCivilPlancher3, title: t.gallery.flooring, category: "flooring" },
    { image: stylearabe, title: "Style Arabe", category: "arabian" },
    { image: renovationPiscine, title: t.gallery.pool, category: "pool" },
    { image: renovationPiscine1, title: t.gallery.pool, category: "pool" },
    { image: Arcature, title: "Arcature", category: "arcature" },
    { image: Arcature1, title: "Arcature", category: "arcature" },
    { image: Arcature2, title: "Arcature", category: "arcature" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const goNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredProjects.length);
  };

  // keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") goPrev();
    if (e.key === "ArrowRight") goNext();
    if (e.key === "Escape") closeLightbox();
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent font-medium text-sm mb-6">
              {t.projects.badge}
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              {t.projects.title}
            </h1>
            <p className="text-lg text-primary-foreground/80">{t.projects.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-8 bg-background border-b border-border top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setLightboxIndex(null);
                }}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "accent-gradient text-accent-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grille */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl cursor-pointer"
                onClick={() => openLightbox(index)}
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Fermer */}
          <button
            className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Compteur */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {lightboxIndex + 1} / {filteredProjects.length}
          </div>

          {/* Flèche précédent */}
          <button
            className="absolute left-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Image */}
          <div
            className="max-w-5xl max-h-[85vh] mx-16 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredProjects[lightboxIndex].image}
              alt={filteredProjects[lightboxIndex].title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
          </div>

          {/* Flèche suivant */}
          <button
            className="absolute right-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Titre */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white font-heading font-bold text-lg">
            {filteredProjects[lightboxIndex].title}
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            {t.cta.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/contact">
              <span className="text-sm sm:text-base md:text-lg font-semibold">{t.cta.button}</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;