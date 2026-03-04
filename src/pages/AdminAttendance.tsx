import { useState } from "react";
import { AdminLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarCheck, Fingerprint, Check, X } from "lucide-react";
import { toast } from "sonner";

const mockAttendance = [
  { id: 1, name: "María García", present: true },
  { id: 2, name: "Carlos López", present: true },
  { id: 3, name: "Ana Martínez", present: false },
  { id: 4, name: "Pedro Sánchez", present: false },
  { id: 5, name: "Lucía Hernández", present: true },
];

const AdminAttendance = () => {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [attendance, setAttendance] = useState(mockAttendance);

  const toggle = (id: number) => {
    setAttendance((prev) =>
      prev.map((a) => (a.id === id ? { ...a, present: !a.present } : a))
    );
  };

  const saveAttendance = () => {
    toast.success(`Asistencia guardada para ${date}`);
  };

  const presentCount = attendance.filter((a) => a.present).length;

  return (
    <AdminLayout title="Asistencia">
      <div className="space-y-4 animate-fade-in">
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <div className="flex items-center gap-3">
            <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-44" />
            <span className="text-sm text-muted-foreground">
              {presentCount}/{attendance.length} presentes
            </span>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2" onClick={() => toast.info("Simulación: Lector de huella activado")}>
              <Fingerprint className="h-4 w-4" />
              Huella Digital
            </Button>
            <Button className="gap-2" onClick={saveAttendance}>
              <CalendarCheck className="h-4 w-4" />
              Guardar
            </Button>
          </div>
        </div>

        <Card>
          <CardContent className="p-0">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left p-3 font-medium">Miembro</th>
                  <th className="text-center p-3 font-medium">Estado</th>
                  <th className="text-center p-3 font-medium">Acción</th>
                </tr>
              </thead>
              <tbody>
                {attendance.map((a) => (
                  <tr key={a.id} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="p-3 font-medium">{a.name}</td>
                    <td className="p-3 text-center">
                      <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full ${
                        a.present ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"
                      }`}>
                        {a.present ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                        {a.present ? "Presente" : "Ausente"}
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <Button variant="ghost" size="sm" onClick={() => toggle(a.id)}>
                        {a.present ? "Marcar ausente" : "Marcar presente"}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminAttendance;
