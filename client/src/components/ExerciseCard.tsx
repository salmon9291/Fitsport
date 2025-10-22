import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Clock, Flame } from "lucide-react";
import { useState } from "react";

interface ExerciseCardProps {
  id: string;
  title: string;
  category: string;
  duration: string;
  difficulty: "Fácil" | "Intermedio" | "Difícil";
  calories: string;
  image: string;
  onFavorite?: (id: string) => void;
  onClick?: (id: string) => void;
}

export default function ExerciseCard({
  id,
  title,
  category,
  duration,
  difficulty,
  calories,
  image,
  onFavorite,
  onClick,
}: ExerciseCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    onFavorite?.(id);
    console.log(`Favorite toggled for ${title}:`, !isFavorite);
  };

  const difficultyColors = {
    Fácil: "bg-green-500/10 text-green-600 border-green-500/20",
    Intermedio: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
    Difícil: "bg-red-500/10 text-red-600 border-red-500/20",
  };

  return (
    <Card
      className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer"
      onClick={() => onClick?.(id)}
      data-testid={`card-exercise-${id}`}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3">
          <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-sm border-0">
            {category}
          </Badge>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-3 right-3 backdrop-blur-sm ${
            isFavorite ? "text-primary bg-primary/20" : "text-white bg-black/30"
          }`}
          onClick={handleFavorite}
          data-testid={`button-favorite-${id}`}
        >
          <Heart className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
        </Button>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-3" data-testid={`text-title-${id}`}>
          {title}
        </h3>
        
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Flame className="h-4 w-4" />
            <span>{calories}</span>
          </div>
        </div>
        
        <Badge variant="outline" className={difficultyColors[difficulty]}>
          {difficulty}
        </Badge>
      </CardContent>
    </Card>
  );
}
