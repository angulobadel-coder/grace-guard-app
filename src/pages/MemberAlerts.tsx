import { useState } from "react";
import { MemberLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send } from "lucide-react";
import { toast } from "sonner";

const pastAlerts = [
  { type: "Necesito oración", message: "Oren por mi salud", date: "1 Mar 2026" },
  { type: "No pude asistir", message: "Tenía cita médica", date: "20 Feb 2026" },
];

const MemberAlerts = () => {
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!type || !message.trim()) {
      toast.error("Completa todos los campos");
      return;
    }
    toast.success("Solicitud enviada al pastor");
    setType("");
    setMessage("");
  };

  return (
    <MemberLayout title="Solicitudes y Oración">
      <div className="space-y-6 animate-fade-in max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Nueva Solicitud</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label>Tipo de solicitud</Label>
                <Select value={type} onValueChange={setType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="prayer">Necesito oración</SelectItem>
                    <SelectItem value="absence">No pude asistir</SelectItem>
                    <SelectItem value="family">Situación familiar</SelectItem>
                    <SelectItem value="other">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Mensaje (privado para el pastor)</Label>
                <Textarea
                  placeholder="Escribe tu mensaje aquí..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                />
              </div>
              <Button type="submit" className="gap-2">
                <Send className="h-4 w-4" />
                Enviar solicitud
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Solicitudes Anteriores</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {pastAlerts.map((a, i) => (
                <div key={i} className="py-2 border-b last:border-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent">{a.type}</span>
                    <span className="text-xs text-muted-foreground">{a.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{a.message}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </MemberLayout>
  );
};

export default MemberAlerts;
