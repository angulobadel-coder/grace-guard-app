import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Church, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const RegisterMember = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "", phone: "", email: "", password: "", birthdate: "", address: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password.length < 6) {
      toast.error("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    setLoading(true);
    // TODO: integrate with Supabase auth
    setTimeout(() => {
      toast.success("Cuenta de miembro creada");
      navigate("/login");
      setLoading(false);
    }, 1000);
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-8">
      <Card className="w-full max-w-md animate-fade-in">
        <CardHeader className="text-center">
          <Link to="/" className="inline-flex items-center gap-2 justify-center mb-2">
            <Church className="h-8 w-8 text-accent" />
          </Link>
          <CardTitle className="text-2xl flex items-center justify-center gap-2">
            <Users className="h-5 w-5 text-accent" />
            Registro de Miembro
          </CardTitle>
          <CardDescription>Únete a la familia CFA</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre completo</Label>
              <Input id="name" placeholder="María García" value={form.name} onChange={update("name")} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input id="phone" type="tel" placeholder="+1 234 567 8900" value={form.phone} onChange={update("phone")} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input id="email" type="email" placeholder="correo@ejemplo.com" value={form.email} onChange={update("email")} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input id="password" type="password" placeholder="••••••••" value={form.password} onChange={update("password")} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="birthdate">Fecha de nacimiento</Label>
              <Input id="birthdate" type="date" value={form.birthdate} onChange={update("birthdate")} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Dirección (opcional)</Label>
              <Input id="address" placeholder="Calle, Ciudad" value={form.address} onChange={update("address")} />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Creando cuenta..." : "Crear cuenta"}
            </Button>
          </form>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            ¿Ya tienes cuenta?{" "}
            <Link to="/login" className="text-accent hover:underline font-medium">Iniciar sesión</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterMember;
