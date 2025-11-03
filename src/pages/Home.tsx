import { HeroSection } from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Shield, Sparkles, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: Calendar,
      title: "Easy Booking",
      description: "Reserve your room in just a few clicks with our simple booking system"
    },
    {
      icon: Shield,
      title: "Secure & Safe",
      description: "Your information is protected with industry-standard security"
    },
    {
      icon: Sparkles,
      title: "Premium Comfort",
      description: "Experience luxury amenities and exceptional hospitality"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Our team is always here to help make your stay perfect"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-foreground">Why Choose Riverside?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're committed to making every stay memorable with our attention to detail and warm hospitality
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, i) => (
            <Card key={i} className="border-border hover:shadow-lg transition-all text-center">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary via-primary to-accent rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to book your stay?</h2>
          <p className="text-white/90 mb-6 max-w-xl mx-auto text-lg">
            Browse our rooms and find the perfect accommodation for your visit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/rooms">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                View All Rooms
              </Button>
            </Link>
            <Link to="/booking">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
                Book Directly
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
