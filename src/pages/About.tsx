import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhatsAppButton />
      
      <main className="pt-16">
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                À propos d'<span className="gradient-text">ALLNTIC</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Notre mission : simplifier votre quotidien numérique avec des solutions innovantes et sur-mesure.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Notre histoire</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Fondée avec la vision de démocratiser les technologies numériques, ALLNTIC accompagne 
                    les entreprises et particuliers dans leur transformation digitale depuis plus de 5 ans.
                  </p>
                  <p>
                    Notre expertise couvre l'ensemble de l'écosystème numérique : du développement web 
                    et mobile à la cybersécurité, en passant par les solutions cloud et l'accompagnement technique.
                  </p>
                  <p>
                    Nous croyons que la technologie doit être au service de l'humain, simple d'utilisation 
                    et accessible à tous.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-primary/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Nos valeurs</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <div>
                      <h4 className="font-semibold text-foreground">Innovation</h4>
                      <p className="text-muted-foreground text-sm">Toujours à la pointe des dernières technologies</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                    <div>
                      <h4 className="font-semibold text-foreground">Proximité</h4>
                      <p className="text-muted-foreground text-sm">Un accompagnement personnalisé et humain</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                    <div>
                      <h4 className="font-semibold text-foreground">Excellence</h4>
                      <p className="text-muted-foreground text-sm">La qualité dans chaque projet</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;