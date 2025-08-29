import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight, CheckCircle } from "lucide-react";

const Index = () => {
  const testimonials = [
    {
      name: "Marie Dubois",
      company: "Boutique Mode Paris",
      content: "ALLNTIC a transformé notre présence en ligne. Notre chiffre d'affaires a augmenté de 40% en 6 mois !",
      rating: 5,
      avatar: "MD"
    },
    {
      name: "Pierre Martin",
      company: "Startup Tech",
      content: "Une équipe professionnelle qui comprend nos besoins. Le support est exceptionnel.",
      rating: 5,
      avatar: "PM"
    },
    {
      name: "Sophie Laurent",
      company: "Cabinet Médical",
      content: "Sécurité renforcée et site parfaitement adapté à notre métier. Merci ALLNTIC !",
      rating: 5,
      avatar: "SL"
    }
  ];

  const recentProjects = [
    {
      title: "E-commerce Mode",
      category: "Site web",
      description: "Plateforme de vente en ligne avec paiements sécurisés",
      image: "🛍️"
    },
    {
      title: "App Mobile Restaurant",
      category: "Application",
      description: "Commande en ligne et fidélité client",
      image: "🍔"
    },
    {
      title: "Sécurisation IT",
      category: "Cybersécurité",
      description: "Infrastructure sécurisée pour cabinet médical",
      image: "🔒"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Portfolio Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos dernières <span className="gradient-text">réalisations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez quelques projets récents qui illustrent notre expertise et notre créativité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {recentProjects.map((project, index) => (
              <Card key={index} className="shadow-card hover-lift bg-card/80 backdrop-blur-sm group cursor-pointer">
                <CardHeader>
                  <div className="text-4xl mb-4 text-center">{project.image}</div>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                    Voir le projet
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline">
              Voir tout le portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ils nous font <span className="gradient-text">confiance</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Plus de 150 clients satisfaits nous recommandent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card bg-card/80 backdrop-blur-sm hover-lift">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-muted-foreground italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Prêt à simplifier votre quotidien numérique ?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Contactez-nous dès aujourd'hui pour un audit gratuit et découvrez comment 
              nous pouvons transformer votre présence digitale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" variant="secondary" className="shadow-glow hover-lift">
                Audit gratuit
                <CheckCircle className="ml-2 h-5 w-5" />
              </Button>
              
              <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                Planifier un appel
              </Button>
            </div>

            <div className="text-primary-foreground/70 text-sm">
              ✓ Consultation gratuite ✓ Devis sous 48h ✓ Support dédié
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">ALLNTIC</div>
              <p className="text-background/70 mb-4">
                Simplifiez votre quotidien numérique avec nos solutions innovantes.
              </p>
              <div className="text-background/70 text-sm">
                📧 contact@allntic.fr<br />
                📞 +33 1 23 45 67 89
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-background/70 text-sm">
                <li>Création de sites web</li>
                <li>Applications mobiles</li>
                <li>Cybersécurité</li>
                <li>Solutions cloud</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Entreprise</h4>
              <ul className="space-y-2 text-background/70 text-sm">
                <li><a href="/a-propos" className="hover:text-background">À propos</a></li>
                <li><a href="/portfolio" className="hover:text-background">Portfolio</a></li>
                <li><a href="/contact" className="hover:text-background">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Légal</h4>
              <ul className="space-y-2 text-background/70 text-sm">
                <li>Mentions légales</li>
                <li>Politique de confidentialité</li>
                <li>CGU</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70 text-sm">
            © 2024 ALLNTIC. Tous droits réservés. Simplifions ensemble votre quotidien numérique.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
