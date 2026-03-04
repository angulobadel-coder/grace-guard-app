import { AdminLayout } from "@/components/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const mockAlerts = [
  { id: 1, member: "María García", type: "Necesito oración", message: "Por favor oren por mi familia, estamos pasando por un momento difícil.", date: "4 Mar 2026", read: false },
  { id: 2, member: "Carlos López", type: "No pude asistir", message: "Estuve enfermo y no pude ir al servicio del domingo.", date: "3 Mar 2026", read: false },
  { id: 3, member: "Ana Martínez", type: "Situación familiar", message: "Mi madre está hospitalizada, agradezco sus oraciones.", date: "2 Mar 2026", read: true },
  { id: 4, member: "Pedro Sánchez", type: "Necesito oración", message: "Tengo una entrevista de trabajo importante mañana.", date: "1 Mar 2026", read: true },
];

const AdminAlerts = () => {
  const markRead = (id: number) => {
    toast.success("Alerta marcada como leída");
  };

  return (
    <AdminLayout title="Alertas y Oraciones">
      <div className="space-y-4 animate-fade-in">
        <p className="text-sm text-muted-foreground">
          Solicitudes privadas enviadas por los miembros de la iglesia.
        </p>

        <div className="space-y-3">
          {mockAlerts.map((alert) => (
            <Card key={alert.id} className={alert.read ? "opacity-70" : "border-accent/30"}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm">{alert.member}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                        {alert.type}
                      </span>
                      {!alert.read && (
                        <span className="w-2 h-2 rounded-full bg-accent" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{alert.message}</p>
                    <p className="text-xs text-muted-foreground mt-2">{alert.date}</p>
                  </div>
                  {!alert.read && (
                    <Button variant="ghost" size="sm" className="gap-1" onClick={() => markRead(alert.id)}>
                      <Check className="h-4 w-4" />
                      Leída
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminAlerts;
