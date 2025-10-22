import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryScroller from "@/components/CategoryScroller";
import ExerciseGrid from "@/components/ExerciseGrid";
import AuthModal from "@/components/AuthModal";
import pushupImage from "@assets/generated_images/Push-up_exercise_demonstration_fdb19427.png";
import yogaImage from "@assets/generated_images/Yoga_warrior_pose_demonstration_caa2a224.png";
import runImage from "@assets/generated_images/Running_exercise_demonstration_bde19d34.png";
import squatImage from "@assets/generated_images/Squat_exercise_demonstration_a47cece8.png";
import plankImage from "@assets/generated_images/Plank_exercise_demonstration_bf07cd17.png";

const mockExercises = [
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
    id: "2",
    title: "Postura del Guerrero",
    category: "Yoga",
    duration: "20 min",
    difficulty: "Fácil" as const,
    calories: "80 kcal",
    image: yogaImage,
  },
  {
    id: "3",
    title: "Carrera Continua",
    category: "Cardio",
    duration: "30 min",
    difficulty: "Intermedio" as const,
    calories: "300 kcal",
    image: runImage,
  },
  {
    id: "4",
    title: "Sentadillas",
    category: "Fuerza",
    duration: "12 min",
    difficulty: "Fácil" as const,
    calories: "100 kcal",
    image: squatImage,
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
  {
    id: "6",
    title: "Yoga Flow",
    category: "Yoga",
    duration: "25 min",
    difficulty: "Fácil" as const,
    calories: "110 kcal",
    image: yogaImage,
  },
];

export default function HomePage() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredExercises = mockExercises.filter((exercise) => {
    const matchesCategory =
      selectedCategory === "Todos" || exercise.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      exercise.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exercise.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Header
        onAuthClick={() => setAuthModalOpen(true)}
        onSearchChange={setSearchQuery}
      />
      <Hero />
      <CategoryScroller onCategoryChange={setSelectedCategory} />
      <ExerciseGrid
        exercises={filteredExercises}
        onExerciseClick={(id) => console.log("Exercise clicked:", id)}
        onFavorite={(id) => console.log("Favorited:", id)}
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
