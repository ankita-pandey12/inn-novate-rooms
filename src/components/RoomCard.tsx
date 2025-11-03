import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Wifi, Coffee, Tv, Wind } from "lucide-react";

interface RoomCardProps {
  name: string;
  type: string;
  capacity: number;
  price: number;
  status: "available" | "occupied" | "maintenance";
  amenities: string[];
  imageUrl: string;
}

export const RoomCard = ({ name, type, capacity, price, status, amenities, imageUrl }: RoomCardProps) => {
  const statusInfo = {
    available: { color: "bg-emerald-50 text-emerald-700 border-emerald-200", label: "Available Now" },
    occupied: { color: "bg-rose-50 text-rose-700 border-rose-200", label: "Currently Booked" },
    maintenance: { color: "bg-amber-50 text-amber-700 border-amber-200", label: "Under Maintenance" }
  };

  const amenityIcons: Record<string, typeof Wifi> = {
    wifi: Wifi,
    breakfast: Coffee,
    tv: Tv,
    ac: Wind,
  };

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border group">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3">
          <Badge className={statusInfo[status].color} variant="outline">
            {statusInfo[status].label}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription className="text-sm">{type}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>Fits {capacity} guests comfortably</span>
          </div>
          
          <div className="flex gap-2 flex-wrap">
            {amenities.map((amenity, i) => {
              const Icon = amenityIcons[amenity.toLowerCase()] || Wifi;
              return (
                <div key={i} className="flex items-center gap-1.5 text-xs bg-muted px-3 py-1.5 rounded-full">
                  <Icon className="w-3.5 h-3.5" />
                  <span className="capitalize">{amenity}</span>
                </div>
              );
            })}
          </div>
          
          <div className="flex items-end justify-between pt-4 border-t border-border">
            <div>
              <div className="text-sm text-muted-foreground mb-0.5">Starting from</div>
              <div>
                <span className="text-3xl font-bold text-primary">${price}</span>
                <span className="text-sm text-muted-foreground ml-1">per night</span>
              </div>
            </div>
            <Button 
              variant={status === "available" ? "default" : "secondary"}
              disabled={status !== "available"}
              size="lg"
            >
              {status === "available" ? "Book Room" : "Not Available"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
