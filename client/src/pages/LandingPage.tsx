import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import CategoryScroller from "@/components/CategoryScroller";
import { useQuery } from "@tanstack/react-query";
import ExerciseGrid from "@/components/ExerciseGrid";
import { useState } from "react";
import { Dumbbell, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function LandingPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");

  const { data: exercises = [] } = useQuery<any[]>({
    queryKey: ["/api/exercises", { search: searchQuery, category: selectedCategory !== "Todos" ? selectedCategory : undefined }],
  });

  const handleLogin = () => {
    window.location.href = "/api/login";
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex h-16 items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Dumbbell className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold font-display text-primary">
                FitOrange
              </span>
            </div>

            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar ejercicios..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  data-testid="input-search"
                />
              </div>
            </div>

            <Button onClick={handleLogin} data-testid="button-login">
              <User className="h-4 w-4 mr-2" />
              Iniciar Sesión
            </Button>
          </div>
        </div>
      </header>

      <Hero />
      <CategoryScroller onCategoryChange={setSelectedCategory} />
      <ExerciseGrid
        exercises={exercises}
        onExerciseClick={(id) => {
          window.location.href = `/exercise/${id}`;
        }}
        onFavorite={() => {
          window.location.href = "/api/login";
        }}
      />
    </div>
  );
}
