import { DashboardStats } from "@/components/DashboardStats";
import { BookingsTable } from "@/components/BookingsTable";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, TrendingUp, Users, Bed } from "lucide-react";

const Dashboard = () => {
  const upcomingArrivals = [
    { name: "Emma Thompson", room: "Deluxe Suite 101", time: "2:00 PM", status: "confirmed" },
    { name: "James Wilson", room: "Standard Room 205", time: "3:30 PM", status: "pending" },
    { name: "Maria Garcia", room: "Executive Suite 302", time: "4:00 PM", status: "confirmed" },
  ];

  const roomStatus = [
    { type: "Standard Rooms", total: 20, available: 8, occupied: 10, maintenance: 2 },
    { type: "Deluxe Suites", total: 15, available: 3, occupied: 11, maintenance: 1 },
    { type: "Executive Suites", total: 13, available: 1, occupied: 11, maintenance: 1 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold mb-3 text-foreground">Dashboard</h1>
              <p className="text-muted-foreground text-lg">Welcome back! Here's your hotel overview</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Today: {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <DashboardStats />

        <div className="grid lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2 space-y-6">
            <Tabs defaultValue="bookings" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="bookings">Recent Bookings</TabsTrigger>
                <TabsTrigger value="rooms">Room Status</TabsTrigger>
              </TabsList>

              <TabsContent value="bookings" className="space-y-4">
                <BookingsTable />
              </TabsContent>

              <TabsContent value="rooms" className="space-y-4">
                <Card className="border-border shadow-sm">
                  <CardHeader>
                    <CardTitle>Room Inventory</CardTitle>
                    <CardDescription>Current status of all room types</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {roomStatus.map((category, i) => (
                        <div key={i} className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Bed className="h-5 w-5 text-primary" />
                              <span className="font-semibold">{category.type}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {category.total} total rooms
                            </span>
                          </div>
                          <div className="grid grid-cols-3 gap-3">
                            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-center">
                              <div className="text-2xl font-bold text-emerald-700">{category.available}</div>
                              <div className="text-xs text-emerald-600 mt-1">Available</div>
                            </div>
                            <div className="bg-rose-50 border border-rose-200 rounded-lg p-3 text-center">
                              <div className="text-2xl font-bold text-rose-700">{category.occupied}</div>
                              <div className="text-xs text-rose-600 mt-1">Occupied</div>
                            </div>
                            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-center">
                              <div className="text-2xl font-bold text-amber-700">{category.maintenance}</div>
                              <div className="text-xs text-amber-600 mt-1">Maintenance</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <Card className="border-border shadow-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Today's Arrivals</CardTitle>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    {upcomingArrivals.length} guests
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingArrivals.map((arrival, i) => (
                    <div key={i} className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm truncate">{arrival.name}</div>
                        <div className="text-xs text-muted-foreground">{arrival.room}</div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-muted-foreground">{arrival.time}</span>
                          <Badge
                            variant="outline"
                            className={
                              arrival.status === "confirmed"
                                ? "bg-emerald-50 text-emerald-700 border-emerald-200 text-xs"
                                : "bg-amber-50 text-amber-700 border-amber-200 text-xs"
                            }
                          >
                            {arrival.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow-sm bg-gradient-to-br from-primary via-primary to-accent text-white">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-5 w-5" />
                  <CardTitle className="text-white">Performance</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/90 text-sm">Average Daily Rate</span>
                  <span className="font-bold">$245</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/90 text-sm">RevPAR</span>
                  <span className="font-bold">$184</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/90 text-sm">Month vs Last Year</span>
                  <span className="font-bold text-emerald-300">+15%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
