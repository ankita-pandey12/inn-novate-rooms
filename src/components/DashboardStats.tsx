import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Hotel, Calendar, DollarSign, Users } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: typeof Hotel;
  trend?: string;
}

const StatCard = ({ title, value, icon: Icon, trend }: StatCardProps) => (
  <Card className="shadow-md border-border hover:shadow-lg transition-all">
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium text-muted-foreground">
        {title}
      </CardTitle>
      <Icon className="h-5 w-5 text-primary" />
    </CardHeader>
    <CardContent>
      <div className="text-3xl font-bold text-foreground">{value}</div>
      {trend && (
        <p className="text-xs text-muted-foreground mt-1">{trend}</p>
      )}
    </CardContent>
  </Card>
);

export const DashboardStats = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Rooms"
        value="48"
        icon={Hotel}
        trend="12 available"
      />
      <StatCard
        title="Today's Check-ins"
        value="8"
        icon={Calendar}
        trend="5 pending"
      />
      <StatCard
        title="Revenue (MTD)"
        value="$24,500"
        icon={DollarSign}
        trend="+12% from last month"
      />
      <StatCard
        title="Occupancy Rate"
        value="75%"
        icon={Users}
        trend="36 rooms occupied"
      />
    </div>
  );
};
