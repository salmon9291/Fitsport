import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryScroller from "@/components/CategoryScroller";
import ExerciseGrid from "@/components/ExerciseGrid";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { isUnauthorizedError } from "@/lib/authUtils";
import { useLocation } from "wouter";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();
  const [, setLocation] = useLocation();

  const { data: exercises = [] } = useQuery<any[]>({
    queryKey: [
      "/api/exercises",
      {
        search: searchQuery,
        category: selectedCategory !== "Todos" ? selectedCategory : undefined,
      },
    ],
  });

  const handleFavorite = async (exerciseId: string) => {
    try {
      const checkResponse = await fetch(`/api/favorites/${exerciseId}/check`);
      const checkData = await checkResponse.json();
      
      if (checkData.isFavorite) {
        await apiRequest("DELETE", `/api/favorites/${exerciseId}`);
        toast({
          title: "Eliminado de favoritos",
          description: "El ejercicio ha sido eliminado de tus favoritos",
        });
      } else {
        await apiRequest("POST", "/api/favorites", { exerciseId });
        toast({
          title: "Agregado a favoritos",
          description: "El ejercicio ha sido agregado a tus favoritos",
        });
      }
      
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
          description: "No se pudo actualizar el favorito",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="min-h-screen">
      <Header
        onAuthClick={() => setLocation("/dashboard")}
        onSearchChange={setSearchQuery}
      />
      <Hero />
      <CategoryScroller onCategoryChange={setSelectedCategory} />
      <ExerciseGrid
        exercises={exercises}
        onExerciseClick={(id) => setLocation(`/exercise/${id}`)}
        onFavorite={handleFavorite}
      />
    </div>
  );
}
