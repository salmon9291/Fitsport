import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import ExerciseDetail from "@/components/ExerciseDetail";
import { useLocation, useParams } from "wouter";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { isUnauthorizedError } from "@/lib/authUtils";
import { useAuth } from "@/hooks/useAuth";

export default function ExerciseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const { isAuthenticated } = useAuth();

  const { data: exercise, isLoading } = useQuery<any>({
    queryKey: ["/api/exercises", id],
    queryFn: async () => {
      const response = await fetch(`/api/exercises/${id}`);
      if (!response.ok) throw new Error("Failed to fetch exercise");
      return response.json();
    },
  });

  const handleStart = async () => {
    if (!isAuthenticated) {
      toast({
        title: "Inicia sesión",
        description: "Debes iniciar sesión para comenzar un ejercicio",
      });
      setTimeout(() => {
        window.location.href = "/api/login";
      }, 1000);
      return;
    }

    toast({
      title: "¡Comenzando ejercicio!",
      description: "El temporizador ha iniciado",
    });
  };

  if (isLoading || !exercise) {
    return (
      <div className="min-h-screen">
        <Header
          onAuthClick={() => setLocation("/dashboard")}
          onSearchChange={() => {}}
        />
        <div className="flex items-center justify-center h-[70vh]">
          <p className="text-muted-foreground">Cargando ejercicio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header
        onAuthClick={() => setLocation("/dashboard")}
        onSearchChange={() => {}}
      />

      <ExerciseDetail
        title={exercise.title}
        category={exercise.category}
        duration={exercise.duration}
        difficulty={exercise.difficulty}
        calories={exercise.calories}
        image={exercise.image}
        instructions={exercise.instructions}
        benefits={exercise.benefits}
        tips={exercise.tips}
        onBack={() => setLocation("/")}
        onStart={handleStart}
      />
    </div>
  );
}
