
export interface Exercise {
  id: number;
  title: string;
  category: string;
  difficulty: string;
  duration: string;
  description: string;
  imageUrl: string;
}

export const exercises: Exercise[] = [
  {
    id: 1,
    title: "Flexiones",
    category: "Fuerza",
    difficulty: "Intermedio",
    duration: "15 min",
    description: "Las flexiones son un ejercicio fundamental para fortalecer el pecho, hombros y tríceps. Mantén el cuerpo recto y baja hasta que el pecho casi toque el suelo.",
    imageUrl: "/attached_assets/generated_images/Push-up_exercise_demonstration_fdb19427.png"
  },
  {
    id: 2,
    title: "Sentadillas",
    category: "Fuerza",
    difficulty: "Principiante",
    duration: "20 min",
    description: "Las sentadillas trabajan los músculos de las piernas y glúteos. Mantén la espalda recta y baja como si fueras a sentarte en una silla.",
    imageUrl: "/attached_assets/generated_images/Squat_exercise_demonstration_a47cece8.png"
  },
  {
    id: 3,
    title: "Carrera",
    category: "Cardio",
    difficulty: "Intermedio",
    duration: "30 min",
    description: "La carrera mejora la resistencia cardiovascular y quema calorías. Comienza con un ritmo moderado y aumenta gradualmente.",
    imageUrl: "/attached_assets/generated_images/Running_exercise_demonstration_bde19d34.png"
  },
  {
    id: 4,
    title: "Yoga Guerrero",
    category: "Yoga",
    difficulty: "Principiante",
    duration: "25 min",
    description: "La postura del guerrero fortalece las piernas y mejora el equilibrio. Mantén los brazos extendidos y la mirada al frente.",
    imageUrl: "/attached_assets/generated_images/Yoga_warrior_pose_demonstration_caa2a224.png"
  },
  {
    id: 5,
    title: "Plancha",
    category: "Fuerza",
    difficulty: "Intermedio",
    duration: "10 min",
    description: "La plancha fortalece el core completo. Mantén el cuerpo en línea recta desde la cabeza hasta los talones.",
    imageUrl: "/attached_assets/generated_images/Plank_exercise_demonstration_bf07cd17.png"
  },
  {
    id: 6,
    title: "Ciclismo Indoor",
    category: "Ciclismo",
    difficulty: "Intermedio",
    duration: "45 min",
    description: "El ciclismo indoor es excelente para mejorar la resistencia cardiovascular y fortalecer las piernas.",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
  },
  {
    id: 7,
    title: "Saltos de Cuerda",
    category: "Cardio",
    difficulty: "Principiante",
    duration: "15 min",
    description: "Los saltos de cuerda mejoran la coordinación y queman muchas calorías en poco tiempo.",
    imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop"
  },
  {
    id: 8,
    title: "Estiramiento Yoga",
    category: "Yoga",
    difficulty: "Principiante",
    duration: "20 min",
    description: "Sesión de estiramientos para mejorar la flexibilidad y reducir el estrés.",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop"
  },
  {
    id: 9,
    title: "Burpees",
    category: "Fuerza",
    difficulty: "Avanzado",
    duration: "12 min",
    description: "Ejercicio de cuerpo completo que combina fuerza y cardio. Excelente para quemar calorías.",
    imageUrl: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=800&h=600&fit=crop"
  },
  {
    id: 10,
    title: "Natación",
    category: "Cardio",
    difficulty: "Intermedio",
    duration: "40 min",
    description: "La natación trabaja todo el cuerpo con bajo impacto en las articulaciones.",
    imageUrl: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800&h=600&fit=crop"
  },
  {
    id: 11,
    title: "Peso Muerto",
    category: "Fuerza",
    difficulty: "Avanzado",
    duration: "25 min",
    description: "Ejercicio fundamental para desarrollar fuerza en espalda baja, glúteos y piernas.",
    imageUrl: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=800&h=600&fit=crop"
  },
  {
    id: 12,
    title: "Meditación Mindfulness",
    category: "Yoga",
    difficulty: "Principiante",
    duration: "15 min",
    description: "Práctica de meditación para reducir el estrés y mejorar la concentración.",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop"
  }
];
