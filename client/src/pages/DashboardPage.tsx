import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import UserStats from "@/components/UserStats";
import ExerciseGrid from "@/components/ExerciseGrid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { isUnauthorizedError } from "@/lib/authUtils";

export default function DashboardPage() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const { toast } = useToast();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      toast({
        title: "No autenticado",
        description: "Iniciando sesión...",
        variant: "destructive",
      });
      setTimeout(() => {
        window.location.href = "/api/login";
      }, 500);
    }
  }, [isAuthenticated, isLoading, toast]);

  const { data: favorites = [] } = useQuery<any[]>({
    queryKey: ["/api/favorites"],
    enabled: isAuthenticated,
  });

  const handleFavorite = async (exerciseId: string) => {
    try {
      await apiRequest("DELETE", `/api/favorites/${exerciseId}`);
      toast({
        title: "Eliminado de favoritos",
        description: "El ejercicio ha sido eliminado de tus favoritos",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/favorites"] });
    } catch (error: any) {
      if (isUnauthorizedError(error)) {
        toast({
          title: "No autenticado",
          description: "Iniciando sesión...",
          variant: "destructive",
        });
        setTimeout(() => {
          window.location.href = "/api/login";
        }, 500);
      } else {
        toast({
          title: "Error",
          description: "No se pudo eliminar el favorito",
          variant: "destructive",
        });
      }
    }
  };

  const handleLogout = () => {
    window.location.href = "/api/logout";
  };

  if (isLoading || !user) {
    return null;
  }

  const userData = user as any;
  const userInitials = userData.firstName && userData.lastName
    ? `${userData.firstName[0]}${userData.lastName[0]}`
    : userData.email?.[0]?.toUpperCase() || "U";

  const userName = userData.firstName && userData.lastName
    ? `${userData.firstName} ${userData.lastName}`
    : userData.email || "Usuario";

  return (
    <div className="min-h-screen">
      <Header
        onAuthClick={() => setLocation("/dashboard")}
        onSearchChange={() => {}}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  {userData.profileImageUrl && (
                    <AvatarImage src={userData.profileImageUrl} alt={userName} className="object-cover" />
                  )}
                  <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                    {userInitials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-3xl font-display">
                    Bienvenido, {userName}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Sigue progresando hacia tus objetivos
                  </p>
                </div>
              </div>
              <Button variant="outline" onClick={handleLogout} data-testid="button-logout">
                Cerrar Sesión
              </Button>
            </div>
          </CardHeader>
        </Card>

        <div className="mb-12">
          <h2 className="text-2xl font-bold font-display mb-6">
            Tu Progreso
          </h2>
          <UserStats />
        </div>

        <div>
          <h2 className="text-2xl font-bold font-display mb-6">
            Tus Ejercicios Favoritos
          </h2>
          {favorites.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <p className="text-muted-foreground mb-4">
                  Aún no tienes ejercicios favoritos
                </p>
                <Button onClick={() => setLocation("/")}>
                  Explorar Ejercicios
                </Button>
              </CardContent>
            </Card>
          ) : (
            <ExerciseGrid
              exercises={favorites}
              onExerciseClick={(id) => setLocation(`/exercise/${id}`)}
              onFavorite={handleFavorite}
            />
          )}
        </div>
      </div>
    </div>
  );
}
