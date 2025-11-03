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
}

const mockBookings: Booking[] = [
  {
    id: "BK001",
    guestName: "John Smith",
    room: "Deluxe Suite 101",
    checkIn: "2024-12-15",
    checkOut: "2024-12-18",
    status: "confirmed",
    amount: 450
  },
  {
    id: "BK002",
    guestName: "Sarah Johnson",
    room: "Standard Room 205",
    checkIn: "2024-12-16",
    checkOut: "2024-12-17",
    status: "pending",
    amount: 150
  },
  {
    id: "BK003",
    guestName: "Michael Brown",
    room: "Executive Suite 301",
    checkIn: "2024-12-14",
    checkOut: "2024-12-20",
    status: "checked-in",
    amount: 900
  }
];

export const BookingsTable = () => {
  const statusColors = {
    confirmed: "bg-blue-500/10 text-blue-700 border-blue-200",
    pending: "bg-yellow-500/10 text-yellow-700 border-yellow-200",
    "checked-in": "bg-green-500/10 text-green-700 border-green-200",
    "checked-out": "bg-gray-500/10 text-gray-700 border-gray-200"
  };

  return (
    <Card className="shadow-md border-border">
      <CardHeader>
        <CardTitle>Recent Bookings</CardTitle>
        <CardDescription>Manage and track all hotel reservations</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Booking ID</TableHead>
              <TableHead>Guest Name</TableHead>
              <TableHead>Room</TableHead>
              <TableHead>Check-in</TableHead>
              <TableHead>Check-out</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockBookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell className="font-medium">{booking.id}</TableCell>
                <TableCell>{booking.guestName}</TableCell>
                <TableCell>{booking.room}</TableCell>
                <TableCell>{booking.checkIn}</TableCell>
                <TableCell>{booking.checkOut}</TableCell>
                <TableCell>
                  <Badge className={statusColors[booking.status]} variant="outline">
                    {booking.status}
                  </Badge>
                </TableCell>
                <TableCell className="font-semibold">${booking.amount}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">View</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
