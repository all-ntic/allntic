import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhatsAppButton />
      
      <main className="pt-16">
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Contactez-<span className="gradient-text">nous</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Prêt à transformer votre présence digitale ? Parlons de votre projet !
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Formulaire de contact */}
              <Card className="shadow-card bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl">Envoyez-nous un message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="prenom">Prénom *</Label>
                      <Input id="prenom" placeholder="Votre prénom" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="nom">Nom *</Label>
                      <Input id="nom" placeholder="Votre nom" className="mt-1" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="votre@email.com" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="telephone">Téléphone</Label>
                    <Input id="telephone" placeholder="+33 1 23 45 67 89" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="entreprise">Entreprise</Label>
                    <Input id="entreprise" placeholder="Nom de votre entreprise" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="projet">Type de projet</Label>
                    <select className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background">
                      <option>Site vitrine</option>
                      <option>E-commerce</option>
                      <option>Application web</option>
                      <option>Application mobile</option>
                      <option>Cybersécurité</option>
                      <option>Support technique</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Décrivez votre projet, vos besoins, vos objectifs..."
                      className="mt-1 min-h-[100px]"
                    />
                  </div>
                  
                  <Button className="w-full shadow-glow" size="lg">
                    Envoyer le message
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    * Champs obligatoires. Nous vous répondons sous 24h.
                  </p>
                </CardContent>
              </Card>

              {/* Informations de contact */}
              <div className="space-y-8">
                <Card className="shadow-card bg-gradient-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-2xl">Nos coordonnées</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Email</div>
                        <div className="text-muted-foreground">contact@allntic.fr</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Téléphone</div>
                        <div className="text-muted-foreground">+33 1 23 45 67 89</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Adresse</div>
                        <div className="text-muted-foreground">
                          123 Rue de l'Innovation<br />
                          75001 Paris, France
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Horaires</div>
                        <div className="text-muted-foreground">
                          Lun - Ven : 9h00 - 18h00<br />
                          Support 24/7 disponible
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Réponse rapide garantie</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Nous nous engageons à vous répondre dans les meilleurs délais :
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span>Réponse par email : sous 24h</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span>Devis gratuit : sous 48h</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span>Support urgent : immédiat</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;