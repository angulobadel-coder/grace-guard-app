import { Link } from "react-router-dom";
import { Church, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b bg-card px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Church className="h-8 w-8 text-accent" />
          <div>
            <h1 className="text-xl leading-tight">Centro Familiar de Alabanza</h1>
            <p className="text-xs text-muted-foreground tracking-wide uppercase">Sistema Administrativo</p>
          </div>
        </div>
        <Link to="/login">
          <Button>Iniciar Sesión</Button>
        </Link>
      </header>

      {/* Hero */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-2xl text-center animate-fade-in">
          <Church className="h-16 w-16 text-accent mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl mb-4">Bienvenido a CFA</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
            Plataforma de administración interna para el control de miembros, asistencia y comunicación de nuestra iglesia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register/admin">
              <Button size="lg" className="gap-2 w-full sm:w-auto">
                <Shield className="h-5 w-5" />
                Registrarse como Pastor
              </Button>
            </Link>
            <Link to="/register/member">
              <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                <Users className="h-5 w-5" />
                Registrarse como Miembro
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card px-6 py-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Centro Familiar de Alabanza — iglesiacfa.com
      </footer>
    </div>
  );
};

export default Index;
