import ExerciseCard from "./ExerciseCard";

interface Exercise {
  id: string;
  title: string;
  category: string;
  duration: string;
  difficulty: "Fácil" | "Intermedio" | "Difícil";
  calories: string;
  image: string;
}

interface ExerciseGridProps {
  exercises: Exercise[];
  onExerciseClick?: (id: string) => void;
  onFavorite?: (id: string) => void;
}

export default function ExerciseGrid({
  exercises,
  onExerciseClick,
  onFavorite,
}: ExerciseGridProps) {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold font-display">
            Ejercicios Destacados
          </h2>
          <p className="text-muted-foreground">
            {exercises.length} ejercicios
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises.map((exercise) => (
            <ExerciseCard
              key={exercise.id}
              {...exercise}
              onClick={onExerciseClick}
              onFavorite={onFavorite}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
