import { useState } from "react";
import Header from "@/components/Header";
import ExerciseDetail from "@/components/ExerciseDetail";
import AuthModal from "@/components/AuthModal";
import { useLocation } from "wouter";
import pushupImage from "@assets/generated_images/Push-up_exercise_demonstration_fdb19427.png";

export default function ExerciseDetailPage() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen">
      <Header
        onAuthClick={() => setAuthModalOpen(true)}
        onSearchChange={(query) => console.log("Search:", query)}
      />

      <ExerciseDetail
        title="Flexiones"
        category="Fuerza"
        duration="15 min"
        difficulty="Intermedio"
        calories="120 kcal"
        image={pushupImage}
        instructions={[
          "Colócate en posición de plancha con las manos separadas al ancho de los hombros",
          "Mantén el cuerpo recto desde la cabeza hasta los talones",
          "Baja el cuerpo doblando los codos hasta que el pecho casi toque el suelo",
          "Empuja hacia arriba hasta volver a la posición inicial",
          "Repite el movimiento de forma controlada",
        ]}
        benefits={[
          "Fortalece pecho, hombros y tríceps",
          "Mejora la fuerza del core",
          "Aumenta la resistencia muscular",
          "No requiere equipo especial",
        ]}
        tips={[
          "Mantén el core apretado durante todo el ejercicio",
          "No dejes que las caderas caigan",
          "Respira: inhala al bajar, exhala al subir",
          "Empieza con pocas repeticiones y aumenta gradualmente",
        ]}
        onBack={() => setLocation("/")}
        onStart={() => console.log("Start exercise clicked")}
      />

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
