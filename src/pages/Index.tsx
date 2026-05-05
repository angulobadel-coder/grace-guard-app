import { Link } from "react-router-dom";
import { Users, Shield, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-cfa.png";

const Index = () => {
  return (
    <div className="halos relative min-h-screen flex flex-col items-center justify-center px-4 py-10 overflow-hidden">
      <div className="halo-blue" />

      <div className="relative z-10 w-full max-w-lg glass p-8 sm:p-12 text-center animate-fade-in">
        <img
          src={logo}
          alt="Centro Familiar de Alabanza"
          className="h-44 w-auto mx-auto mb-6 drop-shadow-2xl"
        />

        <h1 className="text-3xl sm:text-4xl mb-3">
          Sistema <span className="text-gradient-warm">Administrativo</span>
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground mb-8 max-w-sm mx-auto">
          Plataforma interna para el control de miembros, asistencia y comunicación de nuestra iglesia.
        </p>

        <div className="space-y-3">
          <Link to="/login" className="block">
            <Button className="btn-warm w-full h-12 rounded-xl text-base gap-2 border-0">
              <LogIn className="h-4 w-4" />
              Iniciar Sesión
            </Button>
          </Link>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <Link to="/register/admin">
              <Button variant="outline" className="w-full h-11 rounded-xl gap-2 bg-white/5 border-white/15 text-foreground hover:bg-white/10 hover:text-foreground">
                <Shield className="h-4 w-4" />
                Pastor
              </Button>
            </Link>
            <Link to="/register/member">
              <Button variant="outline" className="w-full h-11 rounded-xl gap-2 bg-white/5 border-white/15 text-foreground hover:bg-white/10 hover:text-foreground">
                <Users className="h-4 w-4" />
                Miembro
              </Button>
            </Link>
          </div>
        </div>

        <p className="mt-8 text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} Centro Familiar de Alabanza · iglesiacfa.com
        </p>
      </div>
    </div>
  );
};

export default Index;
