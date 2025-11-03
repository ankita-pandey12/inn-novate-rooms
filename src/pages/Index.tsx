import { HeroSection } from "@/components/HeroSection";
import { DashboardStats } from "@/components/DashboardStats";
import { RoomCard } from "@/components/RoomCard";
import { BookingCalendar } from "@/components/BookingCalendar";
import { BookingsTable } from "@/components/BookingsTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import deluxeSuite from "@/assets/deluxe-suite.jpg";
import standardRoom from "@/assets/standard-room.jpg";
import executiveSuite from "@/assets/executive-suite.jpg";

const Index = () => {
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
      name: "Standard Room 108",
      type: "Cozy and comfortable for any stay",
      capacity: 2,
      price: 150,
      status: "maintenance" as const,
      amenities: ["WiFi", "TV"],
      imageUrl: standardRoom
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      <main className="container mx-auto px-4 py-12">
        <Tabs defaultValue="dashboard" className="space-y-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 bg-muted h-12">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-background">
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="rooms" className="data-[state=active]:bg-background">
              Rooms
            </TabsTrigger>
            <TabsTrigger value="bookings" className="data-[state=active]:bg-background">
              Bookings
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="dashboard" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-foreground">Good morning! 👋</h2>
              <p className="text-muted-foreground">Here's what's happening with your hotel today</p>
            </div>
            <DashboardStats />
            <BookingsTable />
          </TabsContent>
          
          <TabsContent value="rooms" className="space-y-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-2 text-foreground">Our Rooms</h2>
                  <p className="text-muted-foreground">Find the perfect space for your guests</p>
                </div>
                
                <div className="grid gap-6 md:grid-cols-2">
                  {rooms.map((room, i) => (
                    <RoomCard key={i} {...room} />
                  ))}
                </div>
              </div>
              
              <div className="md:w-96">
                <BookingCalendar />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="bookings" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-foreground">All Reservations</h2>
              <p className="text-muted-foreground">Manage guest bookings and room assignments</p>
            </div>
            <BookingsTable />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
