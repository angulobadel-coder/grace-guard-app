import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import logo from "@/assets/logo-cfa.png";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast.success("Sesión iniciada correctamente");
      navigate("/admin");
      setLoading(false);
    }, 800);
  };

  return (
    <div className="halos relative min-h-screen flex items-center justify-center px-4 py-10 overflow-hidden">
      <div className="halo-blue" />

      <div className="relative z-10 w-full max-w-md glass p-8 sm:p-10 animate-fade-in">
        <Link to="/" className="flex justify-center mb-6">
          <img src={logo} alt="Centro Familiar de Alabanza" className="h-32 w-auto drop-shadow-2xl" />
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-3xl mb-2">Bienvenido</h1>
          <p className="text-sm text-muted-foreground">Accede a tu cuenta de CFA</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground/80">Correo electrónico</Label>
            <input
              id="email"
              type="email"
              placeholder="correo@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="glass-input w-full h-11 px-4 text-sm"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-foreground/80">Contraseña</Label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="glass-input w-full h-11 px-4 text-sm"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="btn-warm w-full h-12 rounded-xl text-base font-medium gap-2 border-0"
          >
            <LogIn className="h-4 w-4" />
            {loading ? "Ingresando..." : "Ingresar"}
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-muted-foreground space-y-1.5">
          <p>
            ¿No tienes cuenta?{" "}
            <Link to="/register/member" className="text-gradient-warm font-semibold hover:opacity-80">
              Regístrate
            </Link>
          </p>
          <p className="text-xs opacity-70">
            ¿Eres pastor?{" "}
            <Link to="/register/admin" className="underline hover:text-foreground">
              Registro de administrador
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
