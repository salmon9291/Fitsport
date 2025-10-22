import { useState } from "react";
import SportCategory from "./SportCategory";
import { Dumbbell, Heart, Bike, Flame, Trophy, User } from "lucide-react";

const categories = [
  { icon: Flame, label: "Todos" },
  { icon: Dumbbell, label: "Fuerza" },
  { icon: Heart, label: "Cardio" },
  { icon: User, label: "Yoga" },
  { icon: Bike, label: "Ciclismo" },
  { icon: Trophy, label: "Deportes" },
];

interface CategoryScrollerProps {
  onCategoryChange?: (category: string) => void;
}

export default function CategoryScroller({ onCategoryChange }: CategoryScrollerProps) {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const handleCategoryClick = (label: string) => {
    setActiveCategory(label);
    onCategoryChange?.(label);
    console.log('Category selected:', label);
  };

  return (
    <section className="py-8 border-b">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-bold font-display mb-6">
          Categorías de Ejercicios
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((category) => (
            <SportCategory
              key={category.label}
              icon={category.icon}
              label={category.label}
              isActive={activeCategory === category.label}
              onClick={() => handleCategoryClick(category.label)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
