
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
    imageUrl: "/attached_assets/generated_images/Multi-sport_athletic_hero_image_6975852b.png"
  },
  {
    id: 7,
    title: "Saltos de Cuerda",
    category: "Cardio",
    difficulty: "Principiante",
    duration: "15 min",
    description: "Los saltos de cuerda mejoran la coordinación y queman muchas calorías en poco tiempo.",
    imageUrl: "/attached_assets/generated_images/Multi-sport_athletic_hero_image_6975852b.png"
  },
  {
    id: 8,
    title: "Estiramiento Yoga",
    category: "Yoga",
    difficulty: "Principiante",
    duration: "20 min",
    description: "Sesión de estiramientos para mejorar la flexibilidad y reducir el estrés.",
    imageUrl: "/attached_assets/generated_images/Yoga_warrior_pose_demonstration_caa2a224.png"
  }
];
