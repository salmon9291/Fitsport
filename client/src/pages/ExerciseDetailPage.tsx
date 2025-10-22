import { useRoute } from "wouter";
import Header from "@/components/Header";
import ExerciseDetail from "@/components/ExerciseDetail";
import { exercises } from "@/data/exercises";

export default function ExerciseDetailPage() {
  const [, params] = useRoute("/exercise/:id");
  const exerciseId = params?.id ? parseInt(params.id) : null;

  const exercise = exerciseId
    ? exercises.find(ex => ex.id === exerciseId)
    : null;

  if (!exercise) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-muted-foreground">Ejercicio no encontrado</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ExerciseDetail exercise={exercise} />
    </div>
  );
}