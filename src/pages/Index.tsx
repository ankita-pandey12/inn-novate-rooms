import { HeroSection } from "@/components/HeroSection";
import { DashboardStats } from "@/components/DashboardStats";
import { RoomCard } from "@/components/RoomCard";
import { BookingCalendar } from "@/components/BookingCalendar";
import { BookingsTable } from "@/components/BookingsTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const rooms = [
    {
      name: "Deluxe Suite 101",
      type: "Deluxe Suite",
      capacity: 2,
      price: 250,
      status: "available" as const,
      amenities: ["WiFi", "Breakfast"]
    },
    {
      name: "Standard Room 205",
      type: "Standard Room",
      capacity: 2,
      price: 150,
      status: "available" as const,
      amenities: ["WiFi"]
    },
    {
      name: "Executive Suite 301",
      type: "Executive Suite",
      capacity: 4,
      price: 350,
      status: "occupied" as const,
      amenities: ["WiFi", "Breakfast"]
    },
    {
      name: "Standard Room 108",
      type: "Standard Room",
      capacity: 2,
      price: 150,
      status: "maintenance" as const,
      amenities: ["WiFi"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      <main className="container mx-auto px-4 py-12">
        <Tabs defaultValue="dashboard" className="space-y-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 bg-muted">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="rooms">Rooms</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="dashboard" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-foreground">Dashboard Overview</h2>
              <p className="text-muted-foreground">Monitor your hotel's performance at a glance</p>
            </div>
            <DashboardStats />
            <BookingsTable />
          </TabsContent>
          
          <TabsContent value="rooms" className="space-y-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-2 text-foreground">Available Rooms</h2>
                <p className="text-muted-foreground mb-6">Browse and manage room inventory</p>
                
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
              <h2 className="text-3xl font-bold mb-2 text-foreground">Booking Management</h2>
              <p className="text-muted-foreground">View and manage all reservations</p>
            </div>
            <BookingsTable />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
