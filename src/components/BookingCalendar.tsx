import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { DateRange } from "react-day-picker";

export const BookingCalendar = () => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: undefined,
  });

  return (
    <Card className="shadow-md border-border">
      <CardHeader>
        <CardTitle>Select Dates</CardTitle>
        <CardDescription>Choose your check-in and check-out dates</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <Calendar
          mode="range"
          selected={date}
          onSelect={setDate}
          numberOfMonths={1}
          className="rounded-md border border-border"
        />
      </CardContent>
    </Card>
  );
};
