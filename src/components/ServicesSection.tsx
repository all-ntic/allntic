import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Shield, Code, Cloud, Smartphone, Headphones } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Création de sites web",
      description: "Sites vitrines, e-commerce et applications web sur-mesure, optimisés pour la performance et le SEO.",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Cybersécurité",
      description: "Protection de vos données et systèmes avec des solutions de sécurité avancées et formation équipes.",
      color: "text-destructive"
    },
    {
      icon: Code,
      title: "Développement sur-mesure",
      description: "Applications métiers, logiciels personnalisés et intégrations API pour automatiser vos processus.",
      color: "text-secondary"
    },
    {
      icon: Cloud,
      title: "Solutions Cloud",
      description: "Migration, hébergement et gestion de vos infrastructures cloud pour plus de flexibilité.",
      color: "text-accent"
    },
    {
      icon: Smartphone,
      title: "Applications mobiles",
      description: "Apps iOS et Android natives ou hybrides pour étendre votre présence digitale.",
      color: "text-primary-glow"
    },
    {
      icon: Headphones,
      title: "Support & maintenance",
      description: "Assistance technique 24/7, mises à jour et optimisations continues de vos solutions.",
      color: "text-muted-foreground"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nos services numériques
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            De la conception à la maintenance, nous accompagnons votre transformation digitale 
            avec des solutions innovantes et performantes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="shadow-card hover-lift bg-card/50 backdrop-blur-sm border-border/50 animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-primary/10 flex items-center justify-center mb-4`}>
                  <service.icon className={`h-6 w-6 ${service.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold text-card-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <Button size="lg" variant="default" className="shadow-glow">
            Découvrir tous nos services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;