import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Shield, Code, Cloud, Smartphone, Headphones, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Création de sites web",
      description: "Sites vitrines, e-commerce et applications web sur-mesure",
      features: ["Design responsive", "SEO optimisé", "Performance maximale", "CMS intégré"],
      price: "À partir de 1500€"
    },
    {
      icon: Code,
      title: "Développement sur-mesure",
      description: "Applications métiers et logiciels personnalisés",
      features: ["Analyse des besoins", "Architecture scalable", "API & intégrations", "Tests complets"],
      price: "Sur devis"
    },
    {
      icon: Shield,
      title: "Cybersécurité",
      description: "Protection et sécurisation de vos systèmes",
      features: ["Audit sécurité", "Formations équipes", "Monitoring 24/7", "Plan de reprise"],
      price: "À partir de 800€/mois"
    },
    {
      icon: Smartphone,
      title: "Applications mobiles",
      description: "Apps iOS et Android natives ou hybrides",
      features: ["UI/UX design", "Développement natif", "Tests utilisateurs", "Publication stores"],
      price: "À partir de 3000€"
    },
    {
      icon: Cloud,
      title: "Solutions Cloud",
      description: "Migration et gestion d'infrastructures cloud",
      features: ["Migration sécurisée", "Optimisation coûts", "Monitoring", "Support technique"],
      price: "À partir de 500€/mois"
    },
    {
      icon: Headphones,
      title: "Support & maintenance",
      description: "Assistance technique et maintenance continue",
      features: ["Support 24/7", "Mises à jour", "Sauvegardes", "Optimisations"],
      price: "À partir de 200€/mois"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhatsAppButton />
      
      <main className="pt-16">
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Nos <span className="gradient-text">services</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Des solutions digitales complètes pour transformer et faire évoluer votre entreprise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <Card key={index} className="shadow-card hover-lift bg-card/80 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold">
                      {service.title}
                    </CardTitle>
                    <CardDescription>
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t pt-4">
                      <div className="text-lg font-semibold text-primary mb-3">
                        {service.price}
                      </div>
                      <Button variant="outline" className="w-full">
                        Demander un devis
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-card max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Besoin d'une solution personnalisée ?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Contactez-nous pour discuter de votre projet et obtenir un devis gratuit adapté à vos besoins spécifiques.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="shadow-glow">
                    Demander un devis gratuit
                  </Button>
                  <Button size="lg" variant="outline">
                    Planifier un appel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;