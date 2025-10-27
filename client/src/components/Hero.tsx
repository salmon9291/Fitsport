import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

const heroImage = "/attached_assets/generated_images/Multi-sport_athletic_hero_image_6975852b.png";

export default function Hero() {
  const [, setLocation] = useLocation();

  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Athletes in action"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
      
      <div className="relative h-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold font-display text-white mb-6">
          Transforma tu{" "}
          <span className="text-primary">Entrenamiento</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
          Descubre ejercicios de múltiples deportes y crea tu rutina personalizada
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Button
            size="lg"
            className="text-lg"
            data-testid="button-get-started"
            onClick={() => setLocation('/subscription')}
          >
            Comenzar Ahora
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg backdrop-blur-md bg-white/10 border-white/30 text-white hover:bg-white/20"
            data-testid="button-explore"
            onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
          >
            Explorar Ejercicios
          </Button>
        </div>
      </div>
    </section>
  );
}
