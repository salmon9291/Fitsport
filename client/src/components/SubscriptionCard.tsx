
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Sparkles } from "lucide-react";

interface SubscriptionPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const plans: SubscriptionPlan[] = [
  {
    name: "Gratis",
    price: "$0",
    description: "Perfecto para comenzar",
    features: [
      "Acceso a ejercicios básicos",
      "3 rutinas personalizadas",
      "Seguimiento de progreso básico",
    ],
  },
  {
    name: "Premium",
    price: "$9.99",
    description: "Lo mejor para entusiastas",
    popular: true,
    features: [
      "Acceso a todos los ejercicios",
      "Rutinas personalizadas ilimitadas",
      "Seguimiento avanzado de progreso",
      "Planes nutricionales",
      "Soporte prioritario",
    ],
  },
  {
    name: "Pro",
    price: "$19.99",
    description: "Para atletas serios",
    features: [
      "Todo lo de Premium",
      "Entrenador personal virtual",
      "Análisis de rendimiento IA",
      "Acceso a eventos exclusivos",
      "Consultas con nutricionistas",
    ],
  },
];

export default function SubscriptionCard({ currentPlan = "free" }: { currentPlan?: string }) {
  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-display mb-4">
            Elige tu <span className="text-primary">Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Desbloquea todo tu potencial con nuestros planes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative ${
                plan.popular
                  ? "border-primary shadow-xl scale-105"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Más Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  {index === 2 && <Crown className="w-6 h-6 text-primary" />}
                </div>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  disabled={currentPlan.toLowerCase() === plan.name.toLowerCase()}
                >
                  {currentPlan.toLowerCase() === plan.name.toLowerCase()
                    ? "Plan Actual"
                    : "Seleccionar Plan"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
