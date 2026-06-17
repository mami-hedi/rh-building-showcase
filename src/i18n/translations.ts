export type Language = "fr" | "en";

export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      gallery: "Galerie",
      about: "À Propos",
      contact: "Contact",
      quote: "Devis Gratuit",
    },
    gallery: {
  all: "Tous",
  garden: "Jardin & Piscine",
  flooring: "Plancher",
  arabian: "Style Arabe",
  pool: "Rénovation Piscine",
},
    // --- NOUVELLE SECTION ABOUT AJOUTÉE ---
    about: {
      badge: "À Propos",
      title: "Expertise au service du bâtiment",
      subtitle: "Entreprise Générale de Bâtiment RH est une structure dynamique qui accompagne de A à Z ses clients dans leurs projets de rénovation et de construction en Tunisie.",
      story: {
        badge: "Notre Histoire",
        title: "Une vision bâtie sur le savoir-faire",
        paragraphs: [
          "Fondée par Hichem Rassil, Entreprise Générale de Bâtiment RH est née de la volonté d'apporter une approche rigoureuse et novatrice au secteur du bâtiment.",
          "Sous l'impulsion de son fondateur, notre entreprise s'est structurée pour offrir une expertise technique pointue, plaçant la satisfaction client et le respect des engagements au cœur de chaque intervention.",
          "Parcours de terrain, exigence de la qualité et maîtrise des enjeux de construction moderne : nous nous positionnons aujourd'hui comme un partenaire de confiance pour tous vos projets en Tunisie, de la conception à la réalisation finale."
        ]
      },
      values: {
        badge: "Nos Valeurs",
        title: "Ce qui nous guide au quotidien",
        excellence: { title: "Excellence", desc: "Nous visons l'excellence dans chaque projet, avec une attention méticuleuse aux détails." },
        collaboration: { title: "Collaboration", desc: "Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins." },
        quality: { title: "Qualité", desc: "Nous utilisons uniquement des matériaux de première qualité pour garantir la durabilité." },
        innovation: { title: "Innovation", desc: "Nous adoptons les dernières technologies et techniques de construction." }
      },
      team: {
        title: "Des professionnels passionnés",
        description: "Notre équipe dédiée, dirigée par Hichem Rassil, met son savoir-faire et son expertise technique au service de la réussite de vos projets sur tout le territoire tunisien.",
        points: ["Projets sur-mesure", "Qualité certifiée", "Suivi personnalisé"]
      },
      cta: {
        title: "Envie de nous rejoindre ou de lancer votre projet ?",
        subtitle: "Nous sommes à votre écoute pour discuter de vos besoins et vous accompagner dans toutes vos réalisations partout en Tunisie.",
        button: "Nous contacter"
      }
    },
    hero: {
      badge: "Expertise • Qualité • Confiance",
      title1: "Construisons ensemble",
      title2: "vos projets d'avenir",
      subtitle: "Entreprise Générale de Bâtiment RH vous accompagne dans tous vos projets de construction et de rénovation avec professionnalisme et savoir-faire.",
      cta_quote: "Demander un devis gratuit",
      cta_services: "Découvrir nos services",
    },
    stats: {
      experience: "Années d'expérience",
      projects: "Projets réalisés",
      professionals: "Professionnels",
      satisfaction: "Clients satisfaits",
    },
    services: {
      badge: "Nos Services",
      title: "Une expertise complète du bâtiment",
      subtitle: "De la conception à la réalisation, nous vous accompagnons à chaque étape de votre projet.",
      see_all: "Voir tous nos services",
      items: [
        { title: "Construction Neuve", description: "Réalisation complète de bâtiments résidentiels et commerciaux" },
        { title: "Gros Œuvre", description: "Fondations, structures, maçonnerie et charpente" },
        { title: "Second Œuvre", description: "Plâtrerie, peinture, carrelage et finitions" },
        { title: "Rénovation", description: "Modernisation et réhabilitation de bâtiments existants" },
        { title: "Aménagement", description: "Aménagement intérieur sur mesure" },
        { title: "Conseil", description: "Accompagnement technique de vos projets" },
      ],
    },
    projects: {
      badge: "Nos Réalisations",
      title: "Projets récents",
      subtitle: "Découvrez quelques-unes de nos réalisations qui témoignent de notre savoir-faire.",
      see_all: "Voir toute la galerie",
    },
    why_us: {
      badge: "Pourquoi nous choisir",
      title: "L'excellence au service de vos projets",
      subtitle: "Forts d'une solide expertise, nous mettons notre savoir-faire et notre passion au service de vos projets de construction et de rénovation.",
      points: [
        "Équipe qualifiée et expérimentée",
        "Respect des délais et du budget",
        "Matériaux de qualité supérieure",
        "Garantie décennale sur tous nos travaux",
        "Suivi personnalisé de chaque projet",
      ],
      learn_more: "En savoir plus sur nous",
      call_us: "Appelez-nous",
    },
    cta: {
      title: "Prêt à démarrer votre projet ?",
      subtitle: "Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis gratuit sans engagement.",
      button: "Demander un devis gratuit",
    },
    footer: {
      description: "Votre partenaire de confiance pour tous vos projets de construction et de rénovation depuis plus de 20 ans.",
      navigation: "Navigation",
      our_services: "Nos Services",
      contact: "Contact",
      rights: "Tous droits réservés.",
    },
    contact_page: {
      badge: "Contact",
      title: "Parlons de votre projet",
      subtitle: "Vous avez un projet de construction ou de rénovation ? Contactez-nous pour obtenir un devis gratuit et sans engagement.",
      coordinates: "Nos coordonnées",
      phone: "Téléphone",
      address: "Adresse",
      hours: "Horaires",
      hours_value: "Lun-Ven: 8h-18h",
      form_title: "Demande de devis gratuit",
      form_subtitle: "Remplissez le formulaire ci-dessous et nous vous répondrons sous 24h.",
      name: "Nom complet",
      email: "Email",
      phone_label: "Téléphone",
      subject: "Sujet",
      message: "Message",
      message_placeholder: "Décrivez votre projet en quelques mots...",
      send: "Envoyer ma demande",
      sending: "Envoi en cours...",
      open_maps: "Ouvrir dans Google Maps",
      faq_title: "Questions fréquentes",
      faqs: [
        { q: "Comment obtenir un devis ?", a: "Remplissez le formulaire ci-dessus ou appelez-nous directement. Nous vous répondrons sous 24h avec une première estimation." },
        { q: "Quels sont vos délais d'intervention ?", a: "Les délais varient selon la nature et l'ampleur du projet. Nous vous communiquerons un planning précis lors de l'étude de votre dossier." },
        { q: "Proposez-vous des facilités de paiement ?", a: "Oui, nous proposons un échelonnement des paiements selon l'avancement des travaux. Les modalités sont définies dans le devis." },
      ],
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      gallery: "Gallery",
      about: "About",
      contact: "Contact",
      quote: "Free Quote",
    },

    gallery: {
  all: "All",
  garden: "Garden & Pool",
  flooring: "Flooring",
  arabian: "Arabian Style",
  pool: "Pool Renovation",
},

    // --- NOUVELLE SECTION ABOUT (EN) ---
    about: {
      badge: "About Us",
      title: "Expertise in the building sector",
      subtitle: "Entreprise Générale de Bâtiment RH is a dynamic company that supports its clients from A to Z in their renovation and construction projects in Tunisia.",
      story: {
        badge: "Our Story",
        title: "A vision built on know-how",
        paragraphs: [
          "Founded by Hichem Rassil, Entreprise Générale de Bâtiment RH was born from the desire to bring a rigorous and innovative approach to the building sector.",
          "Driven by its founder, our company has structured itself to offer sharp technical expertise, placing client satisfaction and commitment respect at the heart of every intervention.",
          "Field experience, quality requirements, and mastery of modern construction challenges: we position ourselves today as a trusted partner for all your projects in Tunisia, from design to final realization."
        ]
      },
      values: {
        badge: "Our Values",
        title: "What guides us daily",
        excellence: { title: "Excellence", desc: "We aim for excellence in every project, with meticulous attention to detail." },
        collaboration: { title: "Collaboration", desc: "We work closely with our clients to understand their needs." },
        quality: { title: "Quality", desc: "We only use top-quality materials to ensure durability." },
        innovation: { title: "Innovation", desc: "We adopt the latest technologies and construction techniques." }
      },
      team: {
        title: "Passionate professionals",
        description: "Our dedicated team, led by Hichem Rassil, puts its know-how and technical expertise at the service of your projects' success throughout Tunisia.",
        points: ["Tailor-made projects", "Certified quality", "Personalized follow-up"]
      },
      cta: {
        title: "Want to join us or launch your project?",
        subtitle: "We are at your disposal to discuss your needs and support you in all your projects throughout Tunisia.",
        button: "Contact us"
      }
    },
    hero: {
      badge: "Expertise • Quality • Trust",
      title1: "Let's build together",
      title2: "your future projects",
      subtitle: "Entreprise Générale de Bâtiment RH supports you in all your construction and renovation projects with professionalism and expertise.",
      cta_quote: "Request a free quote",
      cta_services: "Discover our services",
    },
    stats: {
      experience: "Years of experience",
      projects: "Projects completed",
      professionals: "Professionals",
      satisfaction: "Satisfied clients",
    },
    services: {
      badge: "Our Services",
      title: "Complete building expertise",
      subtitle: "From design to completion, we support you at every stage of your project.",
      see_all: "See all our services",
      items: [
        { title: "New Construction", description: "Complete construction of residential and commercial buildings" },
        { title: "Structural Work", description: "Foundations, structures, masonry and framework" },
        { title: "Finishing Work", description: "Plastering, painting, tiling and finishes" },
        { title: "Renovation", description: "Modernisation and rehabilitation of existing buildings" },
        { title: "Interior Design", description: "Custom interior fittings" },
        { title: "Consulting", description: "Technical support for your projects" },
      ],
    },
    projects: {
      badge: "Our Achievements",
      title: "Recent projects",
      subtitle: "Discover some of our most emblematic projects that showcase our expertise.",
      see_all: "View full gallery",
    },
    why_us: {
      badge: "Why choose us",
      title: "Excellence at the service of your projects",
      subtitle: "With solid expertise, we bring our know-how and passion to your construction and renovation projects.",
      points: [
        "Qualified and experienced team",
        "Deadlines and budget respected",
        "Superior quality materials",
        "Ten-year guarantee on all our work",
        "Personalised follow-up for each project",
      ],
      learn_more: "Learn more about us",
      call_us: "Call us",
    },
    cta: {
      title: "Ready to start your project?",
      subtitle: "Contact us today to discuss your project and get a free, no-obligation quote.",
      button: "Request a free quote",
    },
    footer: {
      description: "Your trusted partner for all construction and renovation projects for over 20 years.",
      navigation: "Navigation",
      our_services: "Our Services",
      contact: "Contact",
      rights: "All rights reserved.",
    },
    contact_page: {
      badge: "Contact",
      title: "Let's talk about your project",
      subtitle: "Do you have a construction or renovation project? Contact us for a free, no-obligation quote.",
      coordinates: "Our contact details",
      phone: "Phone",
      address: "Address",
      hours: "Opening hours",
      hours_value: "Mon-Fri: 8am-6pm",
      form_title: "Request a free quote",
      form_subtitle: "Fill in the form below and we will get back to you within 24 hours.",
      name: "Full name",
      email: "Email",
      phone_label: "Phone",
      subject: "Subject",
      message: "Message",
      message_placeholder: "Describe your project in a few words...",
      send: "Send my request",
      sending: "Sending...",
      open_maps: "Open in Google Maps",
      faq_title: "Frequently asked questions",
      faqs: [
        { q: "How do I get a quote?", a: "Fill in the form above or call us directly. We will reply within 24 hours with an initial estimate." },
        { q: "What are your response times?", a: "Timelines vary depending on the nature and scope of the project. We will provide a precise schedule when reviewing your file." },
        { q: "Do you offer payment plans?", a: "Yes, we offer staged payments according to work progress. Terms are defined in the quote." },
      ],
    },
  },
} as const;

export type TranslationKeys = typeof translations.fr;