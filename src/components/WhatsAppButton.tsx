import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+33123456789"; // Remplacer par le vrai numéro
    const message = "Bonjour ALLNTIC, je souhaiterais obtenir des informations sur vos services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 rounded-full bg-accent hover:bg-accent/90 shadow-glow transition-all duration-300 hover:scale-110 animate-pulse"
        size="icon"
      >
        <MessageCircle className="h-7 w-7 text-accent-foreground" />
        <span className="sr-only">Contacter via WhatsApp</span>
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-16 right-0 bg-card/90 backdrop-blur-sm text-card-foreground px-3 py-2 rounded-lg shadow-card text-sm whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300">
        Contactez-nous sur WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-card/90" />
      </div>
    </div>
  );
};

export default WhatsAppButton;