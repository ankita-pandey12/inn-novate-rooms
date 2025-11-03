import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bed, Users, Wifi, Coffee } from "lucide-react";

interface RoomCardProps {
  name: string;
  type: string;
  capacity: number;
  price: number;
  status: "available" | "occupied" | "maintenance";
  amenities: string[];
  imageUrl?: string;
}

export const RoomCard = ({ name, type, capacity, price, status, amenities }: RoomCardProps) => {
  const statusColors = {
    available: "bg-green-500/10 text-green-700 border-green-200",
    occupied: "bg-red-500/10 text-red-700 border-red-200",
    maintenance: "bg-yellow-500/10 text-yellow-700 border-yellow-200"
  };

  const amenityIcons: Record<string, typeof Wifi> = {
    wifi: Wifi,
    breakfast: Coffee,
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all border-border">
      <div className="h-48 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 flex items-center justify-center">
        <Bed className="w-16 h-16 text-primary/30" />
      </div>
      
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <div>
            <CardTitle className="text-xl">{name}</CardTitle>
            <CardDescription className="text-sm mt-1">{type}</CardDescription>
          </div>
          <Badge className={statusColors[status]} variant="outline">
            {status}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{capacity} guests</span>
            </div>
          </div>
          
          <div className="flex gap-2 flex-wrap">
            {amenities.map((amenity, i) => {
              const Icon = amenityIcons[amenity.toLowerCase()] || Wifi;
              return (
                <div key={i} className="flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded-md">
                  <Icon className="w-3 h-3" />
                  <span>{amenity}</span>
                </div>
              );
            })}
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div>
              <span className="text-2xl font-bold text-primary">${price}</span>
              <span className="text-sm text-muted-foreground">/night</span>
            </div>
            <Button 
              variant={status === "available" ? "default" : "secondary"}
              disabled={status !== "available"}
              className="shadow-sm"
            >
              {status === "available" ? "Book Now" : "Unavailable"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
