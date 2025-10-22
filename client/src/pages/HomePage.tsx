import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryScroller from "@/components/CategoryScroller";
import ExerciseGrid from "@/components/ExerciseGrid";
import { exercises } from "@/data/exercises";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const filteredExercises = selectedCategory === "Todos"
    ? exercises
    : exercises.filter(ex => ex.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <CategoryScroller
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <ExerciseGrid exercises={filteredExercises} />
      </div>
    </div>
  );
}