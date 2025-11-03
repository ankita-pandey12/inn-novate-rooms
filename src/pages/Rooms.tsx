import { RoomCard } from "@/components/RoomCard";
import { BookingCalendar } from "@/components/BookingCalendar";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import deluxeSuite from "@/assets/deluxe-suite.jpg";
import standardRoom from "@/assets/standard-room.jpg";
import executiveSuite from "@/assets/executive-suite.jpg";

const Rooms = () => {
  const rooms = [
    {
      name: "Deluxe Suite 101",
      type: "Perfect for couples seeking extra space",
      capacity: 2,
      price: 250,
      status: "available" as const,
      amenities: ["WiFi", "Breakfast", "TV", "AC"],
      imageUrl: deluxeSuite
    },
    {
      name: "Standard Room 205",
      type: "Cozy and comfortable for any stay",
      capacity: 2,
      price: 150,
      status: "available" as const,
      amenities: ["WiFi", "TV", "AC"],
      imageUrl: standardRoom
    },
    {
      name: "Executive Suite 301",
      type: "Spacious suite for families or groups",
      capacity: 4,
      price: 350,
      status: "occupied" as const,
      amenities: ["WiFi", "Breakfast", "TV", "AC"],
      imageUrl: executiveSuite
    },
    {
      name: "Deluxe Suite 102",
      type: "Perfect for couples seeking extra space",
      capacity: 2,
      price: 250,
      status: "available" as const,
      amenities: ["WiFi", "Breakfast", "TV", "AC"],
      imageUrl: deluxeSuite
    },
    {
      name: "Standard Room 206",
      type: "Cozy and comfortable for any stay",
      capacity: 2,
      price: 150,
      status: "available" as const,
      amenities: ["WiFi", "TV"],
      imageUrl: standardRoom
    },
    {
      name: "Executive Suite 302",
      type: "Spacious suite for families or groups",
      capacity: 4,
      price: 350,
      status: "available" as const,
      amenities: ["WiFi", "Breakfast", "TV", "AC"],
      imageUrl: executiveSuite
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-3 text-foreground">Our Rooms</h1>
          <p className="text-muted-foreground text-lg">Find the perfect space for your stay</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            {/* Filters */}
            <div className="bg-card rounded-lg border border-border p-6 mb-8 shadow-sm">
              <h3 className="font-semibold mb-4 text-foreground">Filter Rooms</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search rooms..." className="pl-9" />
                </div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Room Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="deluxe">Deluxe</SelectItem>
                    <SelectItem value="executive">Executive</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Rooms</SelectItem>
                    <SelectItem value="available">Available Only</SelectItem>
                    <SelectItem value="occupied">Occupied</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Room Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {rooms.map((room, i) => (
                <RoomCard key={i} {...room} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-96 space-y-6">
            <BookingCalendar />
            
            <div className="bg-gradient-to-br from-accent via-accent to-primary rounded-lg p-6 text-white shadow-lg">
              <h3 className="text-xl font-bold mb-2">Need help choosing?</h3>
              <p className="text-white/90 text-sm mb-4">
                Our team is ready to help you find the perfect room for your needs.
              </p>
              <div className="space-y-2 text-sm">
                <div>📞 Call: (555) 123-4567</div>
                <div>📧 Email: hello@riverside.hotel</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
