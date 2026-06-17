import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Layout from "@/components/Layout";
import { useLanguage } from "../i18n/LanguageContext";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID  = "service_18v9ua3";
const EMAILJS_TEMPLATE_ID = "ymvt0qe";
const EMAILJS_PUBLIC_KEY  = "p6mRm2nJJEtpO8AY4";

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  formData.name,
          from_email: formData.email,
          phone:      formData.phone,
          subject:    formData.subject,
          message:    formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "✅ Message envoyé !",
        description: "Nous vous répondrons dans les 24h.",
      });

      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "❌ Erreur d'envoi",
        description: "Une erreur est survenue. Veuillez réessayer ou nous appeler directement.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Phone, title: t.contact_page.phone, content: "98 30 89 69", link: "tel:+21698308969" },
    { icon: Phone, title: "WhatsApp", content: "55 30 81 16", link: "https://wa.me/21655308116" },
    { icon: Mail, title: t.contact_page.email, content: "entgbrh@gmail.com", link: "mailto:entgbrh@gmail.com" },
    { icon: MapPin, title: t.contact_page.address, content: "Avenue des Nations Unies, Hammamet - 8050", link: "https://www.google.com/maps/search/?api=1&query=Avenue+des+Nations+Unies+Hammamet+8050" },
    { icon: Clock, title: t.contact_page.hours, content: t.contact_page.hours_value, link: null },
  ];

  return (
    <Layout>
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent font-medium text-sm mb-6">
              {t.contact_page.badge}
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              {t.contact_page.title}
            </h1>
            <p className="text-lg text-primary-foreground/80">
              {t.contact_page.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Colonne gauche — infos contact */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-8">
                {t.contact_page.coordinates}
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 accent-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{info.title}</p>
                      {info.link ? (
                        
                         <a href={info.link}
                          className="text-muted-foreground hover:text-accent transition-colors"
                          target={info.link.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl overflow-hidden border border-border h-64">
                <iframe
                  src="https://maps.google.com/maps?q=CH4M%2B8XV%2C+Hammamet+Sud&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map"
                />
              </div>
              
               <a href="https://www.google.com/maps/search/?api=1&query=CH4M%2B8XV+Hammamet+Sud"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-accent hover:underline font-medium"
              >
                <MapPin className="w-4 h-4" /> {t.contact_page.open_maps}
              </a>
            </div>

            {/* Colonne droite — formulaire */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl p-8 card-shadow border border-border">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
                  {t.contact_page.form_title}
                </h2>
                <p className="text-muted-foreground mb-8">{t.contact_page.form_subtitle}</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {t.contact_page.name} *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {t.contact_page.email} *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t.contact_page.phone_label}
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t.contact_page.subject} *
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t.contact_page.message} *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="resize-none"
                      placeholder={t.contact_page.message_placeholder}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                        </svg>
                        {t.contact_page.sending}
                      </span>
                    ) : (
                      <>
                        {t.contact_page.send}
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-12 text-center">
            {t.contact_page.faq_title}
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {t.contact_page.faqs.map((faq, index) => (
              <div key={index} className="bg-card rounded-xl p-6 card-shadow">
                <h3 className="font-heading font-bold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;