import { AdminLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, CalendarCheck, Bell, TrendingUp } from "lucide-react";

const stats = [
  { label: "Miembros Activos", value: "47", icon: Users, change: "+3 este mes" },
  { label: "Asistencia Hoy", value: "32", icon: CalendarCheck, change: "68% asistencia" },
  { label: "Alertas Pendientes", value: "5", icon: Bell, change: "2 nuevas" },
  { label: "Promedio Mensual", value: "35", icon: TrendingUp, change: "+8% vs mes anterior" },
];

const recentMembers = [
  { name: "María García", date: "2 Mar 2026", status: "Activo" },
  { name: "Carlos López", date: "28 Feb 2026", status: "Activo" },
  { name: "Ana Martínez", date: "25 Feb 2026", status: "Activo" },
  { name: "Pedro Sánchez", date: "20 Feb 2026", status: "Inactivo" },
];

const recentAlerts = [
  { member: "María García", type: "Necesito oración", date: "Hoy" },
  { member: "Carlos López", type: "No pude asistir", date: "Ayer" },
  { member: "Ana Martínez", type: "Situación familiar", date: "Hace 2 días" },
];

const AdminDashboard = () => {
  return (
    <AdminLayout title="Dashboard">
      <div className="space-y-6 animate-fade-in">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-3xl font-serif mt-1">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                  </div>
                  <div className="p-2 rounded-lg bg-accent/10">
                    <stat.icon className="h-5 w-5 text-accent" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Members */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Miembros Recientes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentMembers.map((m) => (
                  <div key={m.name} className="flex items-center justify-between py-2 border-b last:border-0">
                    <div>
                      <p className="font-medium text-sm">{m.name}</p>
                      <p className="text-xs text-muted-foreground">Registrado: {m.date}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      m.status === "Activo" ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"
                    }`}>
                      {m.status}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Alertas Recientes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentAlerts.map((a, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                    <div>
                      <p className="font-medium text-sm">{a.member}</p>
                      <p className="text-xs text-muted-foreground">{a.type}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{a.date}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
