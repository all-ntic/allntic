import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import AIChat from "@/components/AIChat";
import FAQSection from "@/components/FAQSection";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhatsAppButton />
      <AIChat />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Foire Aux Questions
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Trouvez toutes les réponses à vos questions sur nos services numériques et notre expertise
          </p>
        </div>
      </section>

      <FAQSection />

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
                📞 (+225) 07 78 02 33 31
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-background/70 text-sm">
                <li>Maintenance informatique</li>
                <li>Conception de sites web</li>
                <li>Cybersécurité</li>
                <li>Vidéosurveillance</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Entreprise</h4>
              <ul className="space-y-2 text-background/70 text-sm">
                <li><a href="/a-propos" className="hover:text-background">À propos</a></li>
                <li><a href="/services" className="hover:text-background">Services</a></li>
                <li><a href="/contact" className="hover:text-background">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-background/70 text-sm">
                <li><a href="/faq" className="hover:text-background">FAQ</a></li>
                <li>Documentation</li>
                <li>Assistance technique</li>
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

export default FAQ;