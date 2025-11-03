import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Booking {
  id: string;
  guestName: string;
  room: string;
  checkIn: string;
  checkOut: string;
  status: "confirmed" | "pending" | "checked-in" | "checked-out";
  amount: number;
  nights: number;
}

const mockBookings: Booking[] = [
  {
    id: "RB-2847",
    guestName: "Emma Thompson",
    room: "Deluxe Suite 101",
    checkIn: "Dec 15, 2024",
    checkOut: "Dec 18, 2024",
    status: "confirmed",
    amount: 750,
    nights: 3
  },
  {
    id: "RB-2848",
    guestName: "James Wilson",
    room: "Standard Room 205",
    checkIn: "Dec 16, 2024",
    checkOut: "Dec 17, 2024",
    status: "pending",
    amount: 150,
    nights: 1
  },
  {
    id: "RB-2845",
    guestName: "Sophia Martinez",
    room: "Executive Suite 301",
    checkIn: "Dec 14, 2024",
    checkOut: "Dec 20, 2024",
    status: "checked-in",
    amount: 2100,
    nights: 6
  }
];

export const BookingsTable = () => {
  const statusConfig = {
    confirmed: { color: "bg-blue-50 text-blue-700 border-blue-200", label: "Confirmed" },
    pending: { color: "bg-amber-50 text-amber-700 border-amber-200", label: "Awaiting Payment" },
    "checked-in": { color: "bg-emerald-50 text-emerald-700 border-emerald-200", label: "Guest Here" },
    "checked-out": { color: "bg-gray-50 text-gray-600 border-gray-200", label: "Checked Out" }
  };

  return (
    <Card className="shadow-sm border-border">
      <CardHeader>
        <CardTitle>Recent Reservations</CardTitle>
        <CardDescription>Keep track of guest bookings and room assignments</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border border-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-semibold">Reference</TableHead>
                <TableHead className="font-semibold">Guest</TableHead>
                <TableHead className="font-semibold">Room</TableHead>
                <TableHead className="font-semibold">Check-in</TableHead>
                <TableHead className="font-semibold">Check-out</TableHead>
                <TableHead className="font-semibold">Nights</TableHead>
                <TableHead className="font-semibold">Status</TableHead>
                <TableHead className="font-semibold">Total</TableHead>
                <TableHead className="font-semibold"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockBookings.map((booking) => (
                <TableRow key={booking.id} className="hover:bg-muted/30">
                  <TableCell className="font-mono text-sm">{booking.id}</TableCell>
                  <TableCell className="font-medium">{booking.guestName}</TableCell>
                  <TableCell className="text-muted-foreground">{booking.room}</TableCell>
                  <TableCell>{booking.checkIn}</TableCell>
                  <TableCell>{booking.checkOut}</TableCell>
                  <TableCell>{booking.nights}</TableCell>
                  <TableCell>
                    <Badge className={statusConfig[booking.status].color} variant="outline">
                      {statusConfig[booking.status].label}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-semibold">${booking.amount}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                      Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};
