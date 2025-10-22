import ExerciseCard from "./ExerciseCard";
import type { Exercise } from "@/data/exercises";

interface ExerciseGridProps {
  exercises: Exercise[];
}

export default function ExerciseGrid({ exercises }: ExerciseGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
      {exercises.map((exercise) => (
        <ExerciseCard key={exercise.id} exercise={exercise} />
      ))}
    </div>
  );
}