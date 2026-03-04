import { useState } from "react";
import { AdminLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Trash2, Edit, UserPlus } from "lucide-react";

const mockMembers = [
  { id: 1, name: "María García", email: "maria@email.com", phone: "+1 234 5678", birthdate: "1990-05-15", status: "Activo" },
  { id: 2, name: "Carlos López", email: "carlos@email.com", phone: "+1 234 5679", birthdate: "1985-08-22", status: "Activo" },
  { id: 3, name: "Ana Martínez", email: "ana@email.com", phone: "+1 234 5680", birthdate: "1995-01-10", status: "Activo" },
  { id: 4, name: "Pedro Sánchez", email: "pedro@email.com", phone: "+1 234 5681", birthdate: "1988-11-03", status: "Inactivo" },
  { id: 5, name: "Lucía Hernández", email: "lucia@email.com", phone: "+1 234 5682", birthdate: "1992-07-28", status: "Activo" },
];

const AdminMembers = () => {
  const [search, setSearch] = useState("");
  const filtered = mockMembers.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase()) || m.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout title="Miembros">
      <div className="space-y-4 animate-fade-in">
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar miembros..."
              className="pl-9"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Button className="gap-2">
            <UserPlus className="h-4 w-4" />
            Agregar Miembro
          </Button>
        </div>

        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left p-3 font-medium">Nombre</th>
                    <th className="text-left p-3 font-medium hidden md:table-cell">Correo</th>
                    <th className="text-left p-3 font-medium hidden lg:table-cell">Teléfono</th>
                    <th className="text-left p-3 font-medium">Estado</th>
                    <th className="text-right p-3 font-medium">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((m) => (
                    <tr key={m.id} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                      <td className="p-3 font-medium">{m.name}</td>
                      <td className="p-3 text-muted-foreground hidden md:table-cell">{m.email}</td>
                      <td className="p-3 text-muted-foreground hidden lg:table-cell">{m.phone}</td>
                      <td className="p-3">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          m.status === "Activo" ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"
                        }`}>
                          {m.status}
                        </span>
                      </td>
                      <td className="p-3 text-right">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminMembers;
