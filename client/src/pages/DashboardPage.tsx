import { useState } from "react";
import Header from "@/components/Header";
import UserStats from "@/components/UserStats";
import ExerciseGrid from "@/components/ExerciseGrid";
import AuthModal from "@/components/AuthModal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import pushupImage from "@assets/generated_images/Push-up_exercise_demonstration_fdb19427.png";
import plankImage from "@assets/generated_images/Plank_exercise_demonstration_bf07cd17.png";

const favoriteExercises = [
  {
    id: "1",
    title: "Flexiones",
    category: "Fuerza",
    duration: "15 min",
    difficulty: "Intermedio" as const,
    calories: "120 kcal",
    image: pushupImage,
  },
  {
    id: "5",
    title: "Plancha Abdominal",
    category: "Fuerza",
    duration: "10 min",
    difficulty: "Intermedio" as const,
    calories: "90 kcal",
    image: plankImage,
  },
];

export default function DashboardPage() {
  const [authModalOpen, setAuthModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header
        onAuthClick={() => setAuthModalOpen(true)}
        onSearchChange={(query) => console.log("Search:", query)}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                  U
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-3xl font-display">
                  Bienvenido, Usuario
                </CardTitle>
                <p className="text-muted-foreground">
                  Sigue progresando hacia tus objetivos
                </p>
              </div>
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
          <ExerciseGrid
            exercises={favoriteExercises}
            onExerciseClick={(id) => console.log("Exercise clicked:", id)}
            onFavorite={(id) => console.log("Favorited:", id)}
          />
        </div>
      </div>

      <AuthModal
        open={authModalOpen}
        onOpenChange={setAuthModalOpen}
        onLogin={(username, password) =>
          console.log("Login:", username, password)
        }
        onSignup={(username, password) =>
          console.log("Signup:", username, password)
        }
      />
    </div>
  );
}
