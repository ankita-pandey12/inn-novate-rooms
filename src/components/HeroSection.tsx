import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hotel-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-2xl">
          <div className="inline-block bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6 shadow-sm">
            <span className="text-sm font-medium text-primary">Welcome to Riverside Hotel</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Your home away from home
          </h1>
          
          <p className="text-xl text-white/95 mb-8 leading-relaxed">
            Manage bookings, track room availability, and create memorable stays for your guests. 
            Simple tools that help you focus on hospitality, not paperwork.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground group"
            >
              Browse Rooms
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/95 hover:bg-white text-foreground border-0 backdrop-blur-sm"
            >
              Check Availability
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
