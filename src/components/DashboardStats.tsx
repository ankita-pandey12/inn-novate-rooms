import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Hotel, CalendarCheck, TrendingUp, Percent } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: typeof Hotel;
  trend?: string;
  trendUp?: boolean;
}

const StatCard = ({ title, value, subtitle, icon: Icon, trend, trendUp }: StatCardProps) => (
  <Card className="shadow-sm border-border hover:shadow-md transition-all group">
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium text-muted-foreground">
        {title}
      </CardTitle>
      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
        <Icon className="h-5 w-5 text-primary" />
      </div>
    </CardHeader>
    <CardContent>
      <div className="text-3xl font-bold text-foreground mb-1">{value}</div>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
      {trend && (
        <div className={`text-xs mt-2 font-medium ${trendUp ? 'text-emerald-600' : 'text-muted-foreground'}`}>
          {trend}
        </div>
      )}
    </CardContent>
  </Card>
);

export const DashboardStats = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Room Status"
        value="48"
        subtitle="12 rooms ready to book"
        icon={Hotel}
      />
      <StatCard
        title="Today's Arrivals"
        value="8"
        subtitle="5 guests checking in soon"
        icon={CalendarCheck}
      />
      <StatCard
        title="This Month"
        value="$24,500"
        subtitle="Revenue from bookings"
        icon={TrendingUp}
        trend="↑ 12% vs last month"
        trendUp={true}
      />
      <StatCard
        title="Occupancy"
        value="75%"
        subtitle="36 rooms currently occupied"
        icon={Percent}
      />
    </div>
  );
};
