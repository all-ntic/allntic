import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, MessageCircle, Phone, HelpCircle } from "lucide-react";

const FAQSection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const faqData = [
    {
      id: "services",
      question: "Quels sont les services proposés par ALLNTIC ?",
      answer: "ALLNTIC propose : Maintenance informatique (PC Windows/Linux, installation, optimisation), Réseaux & infrastructure (câblage, configuration, support), Conception de sites web (vitrine, e-commerce, SEO), Cybersécurité (protection des données, antivirus, firewall), Vidéosurveillance (installation et configuration de caméras), Infographie (logos, affiches, flyers, supports visuels)",
      category: "Services",
      keywords: ["services", "maintenance", "site web", "cybersécurité", "vidéosurveillance", "infographie"]
    },
    {
      id: "deplacement",
      question: "Est-ce que vous proposez des dépannages à domicile ou sur site ?",
      answer: "Oui. ALLNTIC se déplace à domicile ou dans les locaux professionnels pour assurer le dépannage, l'installation et la configuration des équipements.",
      category: "Intervention",
      keywords: ["dépannage", "domicile", "déplacement", "sur site", "intervention"]
    },
    {
      id: "ecommerce",
      question: "Est-ce que vous développez des sites e-commerce ?",
      answer: "Oui. ALLNTIC crée des sites e-commerce complets avec intégration de solutions de paiement en ligne et gestion de catalogue produits.",
      category: "Développement web",
      keywords: ["e-commerce", "boutique en ligne", "paiement", "vente", "catalogue"]
    },
    {
      id: "contact",
      question: "Comment puis-je vous contacter rapidement ?",
      answer: "Vous pouvez nous contacter : Par téléphone : (+225) 07 78 02 33 31, Via le formulaire de contact du site, Ou directement avec le bouton WhatsApp intégré sur toutes les pages du site",
      category: "Contact",
      keywords: ["contact", "téléphone", "whatsapp", "formulaire"]
    },
    {
      id: "sav",
      question: "Proposez-vous un service après-vente (SAV) ?",
      answer: "Oui. ALLNTIC assure un suivi après installation, avec possibilité de contrats de maintenance réguliers pour les entreprises.",
      category: "Support",
      keywords: ["sav", "service après-vente", "maintenance", "suivi", "support"]
    },
    {
      id: "zone",
      question: "Quelle est votre zone d'intervention ?",
      answer: "ALLNTIC est basé à Koumassi, Abidjan, mais peut intervenir dans toute la Côte d'Ivoire selon les besoins.",
      category: "Géographie",
      keywords: ["zone", "intervention", "abidjan", "koumassi", "côte d'ivoire", "déplacement"]
    },
    {
      id: "clients",
      question: "Quels types de clients travaillez-vous avec ?",
      answer: "Nous travaillons avec : Particuliers (dépannage informatique, sécurité PC), PME et commerçants (sites web, cybersécurité, vidéosurveillance), Institutions, écoles, associations",
      category: "Clients",
      keywords: ["clients", "particuliers", "pme", "entreprises", "institutions", "écoles"]
    },
    {
      id: "contrats",
      question: "Proposez-vous des contrats de maintenance pour les entreprises ?",
      answer: "Oui. Nous proposons des contrats adaptés aux PME et institutions afin d'assurer la sécurité, la disponibilité et la performance de leur système informatique.",
      category: "Maintenance",
      keywords: ["contrats", "maintenance", "entreprises", "pme", "institutions", "sécurité"]
    },
    {
      id: "atouts",
      question: "Quels sont vos atouts principaux ?",
      answer: "- Expertise locale et adaptée aux besoins ivoiriens - Large gamme de services numériques - Intervention rapide et personnalisée - Slogan : 'Simplifiez votre quotidien numérique'",
      category: "Entreprise",
      keywords: ["atouts", "expertise", "local", "ivoirien", "rapide", "personnalisé"]
    },
    {
      id: "devis",
      question: "Comment puis-je demander un devis ?",
      answer: "Vous pouvez demander un devis : Via le bouton 'Demander un devis' sur le site, Par téléphone au (+225) 07 78 02 33 31, Ou directement via WhatsApp",
      category: "Devis",
      keywords: ["devis", "prix", "tarif", "estimation", "gratuit"]
    }
  ];

  const filteredFAQ = faqData.filter(item =>
    searchTerm === "" ||
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const categories = [...new Set(faqData.map(item => item.category))];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Questions <span className="gradient-text">fréquentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Trouvez rapidement les réponses à vos questions sur nos services numériques
          </p>
          
          {/* Smart Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Rechercher dans la FAQ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Badge key={category} variant="secondary" className="cursor-pointer">
              {category}
            </Badge>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          {filteredFAQ.length > 0 ? (
            <Accordion type="single" collapsible className="space-y-4">
              {filteredFAQ.map((item) => (
                <AccordionItem key={item.id} value={item.id} className="border-none">
                  <Card className="shadow-card hover-lift">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-start space-x-3 text-left">
                        <HelpCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-foreground">
                            {item.question}
                          </div>
                          <Badge variant="outline" className="mt-2">
                            {item.category}
                          </Badge>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="text-muted-foreground leading-relaxed ml-8">
                        {item.answer.split('\n').map((line, index) => (
                          <p key={index} className="mb-2">
                            {line}
                          </p>
                        ))}
                      </div>
                    </AccordionContent>
                  </Card>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-center">Aucun résultat trouvé</CardTitle>
                <CardDescription className="text-center">
                  Essayez d'autres mots-clés ou contactez-nous directement
                </CardDescription>
              </CardHeader>
            </Card>
          )}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <Card className="max-w-md mx-auto shadow-card bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                <span>Une autre question ?</span>
              </CardTitle>
              <CardDescription>
                Notre équipe est à votre disposition pour vous aider
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>(+225) 07 78 02 33 31</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Ou utilisez le chat IA en bas à gauche pour une réponse immédiate
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;