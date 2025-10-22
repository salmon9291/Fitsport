import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Heart, Clock, Flame, Play } from "lucide-react";

interface ExerciseDetailProps {
  title: string;
  category: string;
  duration: string;
  difficulty: "Fácil" | "Intermedio" | "Difícil";
  calories: string;
  image: string;
  instructions: string[];
  benefits: string[];
  tips: string[];
  onBack?: () => void;
  onStart?: () => void;
}

export default function ExerciseDetail({
  title,
  category,
  duration,
  difficulty,
  calories,
  image,
  instructions,
  benefits,
  tips,
  onBack,
  onStart,
}: ExerciseDetailProps) {
  const difficultyColors = {
    Fácil: "bg-green-500/10 text-green-600 border-green-500/20",
    Intermedio: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
    Difícil: "bg-red-500/10 text-red-600 border-red-500/20",
  };

  return (
    <div className="min-h-screen">
      <div className="relative h-[40vh] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        
        <div className="absolute top-6 left-6">
          <Button
            variant="ghost"
            size="icon"
            className="backdrop-blur-md bg-white/10 text-white"
            onClick={onBack}
            data-testid="button-back"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </div>

        <div className="absolute bottom-6 left-6 right-6">
          <Badge className="bg-primary/90 text-primary-foreground mb-3">
            {category}
          </Badge>
          <h1 className="text-4xl font-bold font-display text-white mb-2">
            {title}
          </h1>
          <div className="flex items-center gap-4 text-white/90">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Flame className="h-4 w-4" />
              <span>{calories}</span>
            </div>
            <Badge variant="outline" className={`${difficultyColors[difficulty]} border-white/30`}>
              {difficulty}
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <div className="flex gap-4 mb-8">
          <Button
            size="lg"
            className="flex-1"
            onClick={onStart}
            data-testid="button-start-exercise"
          >
            <Play className="h-5 w-5 mr-2" />
            Comenzar Ejercicio
          </Button>
          <Button
            variant="outline"
            size="lg"
            data-testid="button-favorite-detail"
          >
            <Heart className="h-5 w-5" />
          </Button>
        </div>

        <Tabs defaultValue="instructions" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="instructions" data-testid="tab-instructions">
              Instrucciones
            </TabsTrigger>
            <TabsTrigger value="benefits" data-testid="tab-benefits">
              Beneficios
            </TabsTrigger>
            <TabsTrigger value="tips" data-testid="tab-tips">
              Consejos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="instructions" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Cómo realizar el ejercicio</h3>
                <ol className="space-y-3">
                  {instructions.map((step, index) => (
                    <li key={index} className="flex gap-3">
                      <Badge className="h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0">
                        {index + 1}
                      </Badge>
                      <span className="text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="benefits" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Beneficios del ejercicio</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex gap-3 items-start">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tips" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Consejos importantes</h3>
                <ul className="space-y-3">
                  {tips.map((tip, index) => (
                    <li key={index} className="flex gap-3 items-start">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
