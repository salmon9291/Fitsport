import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { Link } from "wouter";
import type { Exercise } from "@/data/exercises";

interface ExerciseCardProps {
  exercise: Exercise;
}

export default function ExerciseCard({ exercise }: ExerciseCardProps) {
  return (
    <Link href={`/exercise/${exercise.id}`}>
      <a>
        <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
          <div className="aspect-video relative overflow-hidden bg-muted">
            <img
              src={exercise.imageUrl}
              alt={exercise.title}
              className="object-cover w-full h-full"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold text-lg mb-2">{exercise.title}</h3>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary">{exercise.category}</Badge>
              <Badge variant="outline">{exercise.difficulty}</Badge>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />
            {exercise.duration}
          </CardFooter>
        </Card>
      </a>
    </Link>
  );
}