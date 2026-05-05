import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import logo from "@/assets/logo-cfa.png";

const RegisterMember = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "", phone: "", email: "", password: "", birthdate: "", address: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password.length < 6) return toast.error("La contraseña debe tener al menos 6 caracteres");
    setLoading(true);
    setTimeout(() => {
      toast.success("Cuenta de miembro creada");
      navigate("/login");
      setLoading(false);
    }, 800);
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const fields = [
    { id: "name", label: "Nombre completo", type: "text", placeholder: "María García", required: true },
    { id: "phone", label: "Teléfono", type: "tel", placeholder: "+1 234 567 8900", required: true },
    { id: "email", label: "Correo electrónico", type: "email", placeholder: "correo@ejemplo.com", required: true },
    { id: "password", label: "Contraseña", type: "password", placeholder: "••••••••", required: true },
    { id: "birthdate", label: "Fecha de nacimiento", type: "date", placeholder: "", required: true },
    { id: "address", label: "Dirección (opcional)", type: "text", placeholder: "Calle, Ciudad", required: false },
  ];

  return (
    <div className="halos relative min-h-screen flex items-center justify-center px-4 py-10 overflow-hidden">
      <div className="halo-blue" />
      <div className="relative z-10 w-full max-w-md glass p-8 sm:p-10 animate-fade-in">
        <Link to="/" className="flex justify-center mb-4">
          <img src={logo} alt="CFA" className="h-24 w-auto drop-shadow-2xl" />
        </Link>
        <div className="text-center mb-6">
          <h1 className="text-2xl flex items-center justify-center gap-2">
            <Users className="h-5 w-5 text-primary" /> Registro de Miembro
          </h1>
          <p className="text-sm text-muted-foreground mt-1">Únete a la familia CFA</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map((f) => (
            <div key={f.id} className="space-y-2">
              <Label htmlFor={f.id} className="text-foreground/80">{f.label}</Label>
              <input
                id={f.id}
                type={f.type}
                placeholder={f.placeholder}
                value={(form as any)[f.id]}
                onChange={update(f.id)}
                required={f.required}
                className="glass-input w-full h-11 px-4 text-sm"
              />
            </div>
          ))}

          <Button type="submit" disabled={loading} className="btn-warm w-full h-12 rounded-xl border-0">
            {loading ? "Creando cuenta..." : "Crear cuenta"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" className="text-gradient-warm font-semibold">Iniciar sesión</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterMember;
