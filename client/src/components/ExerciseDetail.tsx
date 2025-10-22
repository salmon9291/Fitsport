import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import type { Exercise } from "@/data/exercises";

interface ExerciseDetailProps {
  exercise: Exercise;
}

export default function ExerciseDetail({ exercise }: ExerciseDetailProps) {
  const [, setLocation] = useLocation();

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        variant="ghost"
        onClick={() => setLocation("/")}
        className="mb-4"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Volver
      </Button>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="aspect-video relative overflow-hidden rounded-lg bg-muted">
          <img
            src={exercise.imageUrl}
            alt={exercise.title}
            className="object-cover w-full h-full"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4">{exercise.title}</h1>

          <div className="flex items-center gap-2 mb-6">
            <Badge variant="secondary" className="text-base px-3 py-1">
              {exercise.category}
            </Badge>
            <Badge variant="outline" className="text-base px-3 py-1">
              {exercise.difficulty}
            </Badge>
            <div className="flex items-center text-muted-foreground ml-2">
              <Clock className="h-5 w-5 mr-1" />
              <span className="text-base">{exercise.duration}</span>
            </div>
          </div>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-3">Descripción</h2>
              <p className="text-muted-foreground leading-relaxed">
                {exercise.description}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}