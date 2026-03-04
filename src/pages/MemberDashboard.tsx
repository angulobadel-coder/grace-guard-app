import { MemberLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarCheck, Check, X } from "lucide-react";

const attendanceHistory = [
  { date: "4 Mar 2026", service: "Servicio Dominical", present: true },
  { date: "2 Mar 2026", service: "Estudio Bíblico", present: true },
  { date: "27 Feb 2026", service: "Servicio Dominical", present: false },
  { date: "25 Feb 2026", service: "Estudio Bíblico", present: true },
  { date: "20 Feb 2026", service: "Servicio Dominical", present: true },
  { date: "18 Feb 2026", service: "Estudio Bíblico", present: true },
  { date: "13 Feb 2026", service: "Servicio Dominical", present: false },
  { date: "11 Feb 2026", service: "Estudio Bíblico", present: true },
];

const totalPresent = attendanceHistory.filter((a) => a.present).length;

const MemberDashboard = () => {
  return (
    <MemberLayout title="Mi Panel">
      <div className="space-y-6 animate-fade-in">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-5">
              <p className="text-sm text-muted-foreground">Asistencias Totales</p>
              <p className="text-3xl font-serif mt-1">{totalPresent}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <p className="text-sm text-muted-foreground">Porcentaje</p>
              <p className="text-3xl font-serif mt-1">{Math.round((totalPresent / attendanceHistory.length) * 100)}%</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <p className="text-sm text-muted-foreground">Servicios Registrados</p>
              <p className="text-3xl font-serif mt-1">{attendanceHistory.length}</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <CalendarCheck className="h-5 w-5 text-accent" />
              Historial de Asistencia
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {attendanceHistory.map((a, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                  <div>
                    <p className="text-sm font-medium">{a.service}</p>
                    <p className="text-xs text-muted-foreground">{a.date}</p>
                  </div>
                  <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full ${
                    a.present ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"
                  }`}>
                    {a.present ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                    {a.present ? "Presente" : "Ausente"}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </MemberLayout>
  );
};

export default MemberDashboard;
