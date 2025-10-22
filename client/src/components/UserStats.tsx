import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Flame, Clock, Target } from "lucide-react";

interface StatCardProps {
  icon: React.ElementType;
  title: string;
  value: string;
  subtitle: string;
}

function StatCard({ icon: Icon, title, value, subtitle }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between gap-1 space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold" data-testid={`stat-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {value}
        </div>
        <p className="text-xs text-muted-foreground">{subtitle}</p>
      </CardContent>
    </Card>
  );
}

export default function UserStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        icon={Trophy}
        title="Entrenamientos"
        value="24"
        subtitle="Este mes"
      />
      <StatCard
        icon={Flame}
        title="Calorías"
        value="3,450"
        subtitle="Esta semana"
      />
      <StatCard
        icon={Clock}
        title="Tiempo Total"
        value="12.5h"
        subtitle="Este mes"
      />
      <StatCard
        icon={Target}
        title="Racha Actual"
        value="7 días"
        subtitle="¡Sigue así!"
      />
    </div>
  );
}
