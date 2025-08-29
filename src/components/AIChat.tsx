import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

const ALLNTIC_KNOWLEDGE_BASE = `
ALLNTIC est une société ivoirienne spécialisée dans la maintenance informatique et les services numériques.

INFORMATIONS DE BASE:
- Société: ALLNTIC
- Slogan: "Simplifiez votre quotidien numérique"
- Localisation: Koumassi, Abidjan, Côte d'Ivoire (près du Camp Commando – Sicogi 1)
- Téléphone: (+225) 07 78 02 33 31
- Site/blog: all-ntic.blogspot.com

SERVICES PROPOSÉS:
1. Maintenance informatique
   - Diagnostic, réparation et optimisation de PC (Windows & Linux)
   - Installation de systèmes d'exploitation et logiciels
   - Sécurité et optimisation de la performance

2. Réseaux & Infrastructure
   - Câblage réseau et configuration
   - Installation et paramétrage d'équipements
   - Support et gestion de parcs informatiques

3. Conception de sites web
   - Sites vitrines, portfolios, blogs
   - Sites e-commerce
   - Optimisation SEO & hébergement sécurisé

4. Cybersécurité
   - Protection des données
   - Sécurisation des accès réseaux et comptes
   - Solutions antivirus et firewall

5. Vidéosurveillance
   - Installation de caméras de sécurité
   - Paramétrage et maintenance

6. Infographie & multimédia
   - Création de visuels (logos, affiches, flyers)
   - Édition et utilitaires divers

CLIENTS CIBLES:
- Particuliers (dépannage informatique, sécurité, PC personnels)
- Petites et Moyennes Entreprises (PME)
- Commerces (vidéosurveillance, caisse connectée)
- Institutions et associations locales

FAQ COMMUNE:
- Dépannages à domicile: OUI, ALLNTIC se déplace
- Sites e-commerce: OUI, avec intégration paiement en ligne
- Service après-vente: OUI, avec contrats de maintenance
- Zone d'intervention: Principalement Abidjan, mais peut intervenir dans toute la Côte d'Ivoire
- Contrats maintenance: OUI, adaptés aux PME et institutions
`;

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Bonjour ! Je suis l\'assistant IA d\'ALLNTIC. Comment puis-je vous aider avec nos services numériques ?',
      sender: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessageToOpenAI = async (userMessage: string): Promise<string> => {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content: `Tu es un assistant intelligent pour ALLNTIC, une société ivoirienne de services numériques. Utilise EXCLUSIVEMENT les informations suivantes pour répondre aux questions des clients. Si une question sort de ce contexte, redirige gentiment vers le contact téléphonique ou WhatsApp.

${ALLNTIC_KNOWLEDGE_BASE}

Règles importantes:
- Réponds uniquement en français
- Sois professionnel mais accessible
- Utilise les informations exactes fournies
- Si tu ne sais pas, recommande de contacter ALLNTIC directement
- Mets en avant les services adaptés à chaque demande
- Encourage toujours la prise de contact pour un devis personnalisé`
            },
            {
              role: 'user',
              content: userMessage
            }
          ],
          max_tokens: 500,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    if (!apiKey) {
      setShowApiKeyInput(true);
      toast({
        title: "Clé API requise",
        description: "Veuillez entrer votre clé API OpenAI pour utiliser le chat.",
      });
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const aiResponse = await sendMessageToOpenAI(inputValue);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        sender: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de contacter l'IA. Vérifiez votre clé API.",
        variant: "destructive"
      });
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Désolé, je rencontre un problème technique. Contactez-nous directement au (+225) 07 78 02 33 31 pour une assistance immédiate.",
        sender: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleApiKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      setShowApiKeyInput(false);
      toast({
        title: "Clé API enregistrée",
        description: "Vous pouvez maintenant utiliser le chat IA !",
      });
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="rounded-full shadow-glow hover-lift bg-gradient-primary"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
          {!isOpen && (
            <span className="ml-2 hidden sm:inline">Chat IA</span>
          )}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 z-40 w-80 sm:w-96">
          <Card className="shadow-elegant animate-scale-in bg-card/95 backdrop-blur-md">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Bot className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Assistant ALLNTIC</CardTitle>
                </div>
                <Badge variant="secondary" className="text-xs">
                  IA
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* API Key Input */}
              {showApiKeyInput && (
                <form onSubmit={handleApiKeySubmit} className="space-y-2">
                  <Input
                    type="password"
                    placeholder="Votre clé API OpenAI..."
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="text-sm"
                  />
                  <Button type="submit" size="sm" className="w-full">
                    Valider
                  </Button>
                </form>
              )}

              {/* Messages */}
              <ScrollArea className="h-80 w-full pr-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.sender === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        <div className="flex items-start space-x-2">
                          {message.sender === 'assistant' && (
                            <Bot className="h-4 w-4 mt-0.5 text-primary" />
                          )}
                          {message.sender === 'user' && (
                            <User className="h-4 w-4 mt-0.5" />
                          )}
                          <div className="text-sm">{message.content}</div>
                        </div>
                        <div className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString('fr-FR', {
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-muted text-muted-foreground rounded-lg p-3 max-w-[80%]">
                        <div className="flex items-center space-x-2">
                          <Bot className="h-4 w-4 text-primary" />
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span className="text-sm">En train d'écrire...</span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              {/* Input Form */}
              <form onSubmit={handleSubmit} className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Posez votre question..."
                  disabled={isLoading || !apiKey}
                  className="flex-1"
                />
                <Button type="submit" size="sm" disabled={isLoading || !apiKey}>
                  <Send className="h-4 w-4" />
                </Button>
              </form>

              <div className="text-xs text-muted-foreground text-center">
                Propulsé par OpenAI • ALLNTIC
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default AIChat;