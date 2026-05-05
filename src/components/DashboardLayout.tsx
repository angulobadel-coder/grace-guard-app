import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, CalendarCheck, Bell, LogOut, User, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo-cfa.png";

interface AdminLayoutProps {
  children: ReactNode;
  title: string;
}

const adminLinks = [
  { to: "/admin", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/admin/members", icon: Users, label: "Miembros" },
  { to: "/admin/attendance", icon: CalendarCheck, label: "Asistencia" },
  { to: "/admin/alerts", icon: Bell, label: "Alertas" },
];

const memberLinks = [
  { to: "/member", icon: LayoutDashboard, label: "Mi Panel" },
  { to: "/member/alerts", icon: Send, label: "Solicitudes" },
  { to: "/member/profile", icon: User, label: "Mi Perfil" },
];

export const AdminLayout = ({ children, title }: AdminLayoutProps) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
        <div className="p-5 flex items-center gap-3 border-b border-sidebar-border">
          <img src={logo} alt="CFA" className="h-10 w-auto" />
          <div>
            <p className="font-serif text-lg leading-tight">CFA</p>
            <p className="text-xs opacity-70">Administración</p>
          </div>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {adminLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
                location.pathname === link.to
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "hover:bg-sidebar-accent/50"
              )}
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="p-3 border-t border-sidebar-border">
          <Link
            to="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm hover:bg-sidebar-accent/50 transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Cerrar sesión
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <header className="bg-card border-b px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl md:text-2xl">{title}</h1>
          {/* Mobile nav */}
          <div className="flex md:hidden gap-2">
            {adminLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "p-2 rounded-lg transition-colors",
                  location.pathname === link.to ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-muted"
                )}
              >
                <link.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </header>
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export const MemberLayout = ({ children, title }: AdminLayoutProps) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
        <div className="p-5 flex items-center gap-3 border-b border-sidebar-border">
          <img src={logo} alt="CFA" className="h-10 w-auto" />
          <div>
            <p className="font-serif text-lg leading-tight">CFA</p>
            <p className="text-xs opacity-70">Mi Cuenta</p>
          </div>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {memberLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
                location.pathname === link.to
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "hover:bg-sidebar-accent/50"
              )}
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="p-3 border-t border-sidebar-border">
          <Link
            to="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm hover:bg-sidebar-accent/50 transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Cerrar sesión
          </Link>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="bg-card border-b px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl md:text-2xl">{title}</h1>
          <div className="flex md:hidden gap-2">
            {memberLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "p-2 rounded-lg transition-colors",
                  location.pathname === link.to ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-muted"
                )}
              >
                <link.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </header>
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
};
