import { useState } from "react";
import { MemberLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Save } from "lucide-react";
import { toast } from "sonner";

const MemberProfile = () => {
  const [form, setForm] = useState({
    name: "María García",
    phone: "+1 234 5678",
    email: "maria@email.com",
    birthdate: "1990-05-15",
    address: "Calle Principal 123",
  });

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Perfil actualizado");
  };

  return (
    <MemberLayout title="Mi Perfil">
      <div className="max-w-lg animate-fade-in">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Información Personal</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSave} className="space-y-4">
              <div className="space-y-2">
                <Label>Nombre completo</Label>
                <Input value={form.name} onChange={update("name")} required />
              </div>
              <div className="space-y-2">
                <Label>Teléfono</Label>
                <Input value={form.phone} onChange={update("phone")} required />
              </div>
              <div className="space-y-2">
                <Label>Correo electrónico</Label>
                <Input value={form.email} onChange={update("email")} type="email" required />
              </div>
              <div className="space-y-2">
                <Label>Fecha de nacimiento</Label>
                <Input value={form.birthdate} onChange={update("birthdate")} type="date" required />
              </div>
              <div className="space-y-2">
                <Label>Dirección</Label>
                <Input value={form.address} onChange={update("address")} />
              </div>
              <Button type="submit" className="gap-2">
                <Save className="h-4 w-4" />
                Guardar cambios
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </MemberLayout>
  );
};

export default MemberProfile;
