import { db } from "./db";
import { exercises } from "@shared/schema";

const seedExercises = [
  {
    title: "Flexiones",
    category: "Fuerza",
    duration: "15 min",
    difficulty: "Intermedio",
    calories: "120 kcal",
    image: "/assets/generated_images/Push-up_exercise_demonstration_fdb19427.png",
    instructions: [
      "Colócate en posición de plancha con las manos separadas al ancho de los hombros",
      "Mantén el cuerpo recto desde la cabeza hasta los talones",
      "Baja el cuerpo doblando los codos hasta que el pecho casi toque el suelo",
      "Empuja hacia arriba hasta volver a la posición inicial",
      "Repite el movimiento de forma controlada",
    ],
    benefits: [
      "Fortalece pecho, hombros y tríceps",
      "Mejora la fuerza del core",
      "Aumenta la resistencia muscular",
      "No requiere equipo especial",
    ],
    tips: [
      "Mantén el core apretado durante todo el ejercicio",
      "No dejes que las caderas caigan",
      "Respira: inhala al bajar, exhala al subir",
      "Empieza con pocas repeticiones y aumenta gradualmente",
    ],
  },
  {
    title: "Postura del Guerrero",
    category: "Yoga",
    duration: "20 min",
    difficulty: "Fácil",
    calories: "80 kcal",
    image: "/attached_assets/generated_images/Yoga_warrior_pose_demonstration_caa2a224.png",
    instructions: [
      "Comienza de pie con los pies juntos",
      "Da un paso grande hacia atrás con el pie izquierdo",
      "Dobla la rodilla delantera a 90 grados",
      "Levanta los brazos hacia arriba y hacia atrás",
      "Mira hacia adelante y mantén la postura durante 30 segundos",
    ],
    benefits: [
      "Fortalece las piernas y los glúteos",
      "Mejora el equilibrio y la concentración",
      "Estira los músculos de las caderas",
      "Aumenta la flexibilidad",
    ],
    tips: [
      "Mantén la rodilla delantera alineada con el tobillo",
      "No dejes que la rodilla sobrepase los dedos del pie",
      "Respira profundamente y de manera constante",
      "Repite en el otro lado para equilibrar",
    ],
  },
  {
    title: "Carrera Continua",
    category: "Cardio",
    duration: "30 min",
    difficulty: "Intermedio",
    calories: "300 kcal",
    image: "/assets/generated_images/Running_exercise_demonstration_bde19d34.png",
    instructions: [
      "Comienza con un calentamiento de caminata rápida de 5 minutos",
      "Aumenta gradualmente la velocidad hasta un trote cómodo",
      "Mantén los hombros relajados y los brazos en movimiento",
      "Respira de manera rítmica y profunda",
      "Termina con 5 minutos de caminata para enfriamiento",
    ],
    benefits: [
      "Mejora la salud cardiovascular",
      "Quema calorías y ayuda a la pérdida de peso",
      "Fortalece los músculos de las piernas",
      "Reduce el estrés y mejora el estado de ánimo",
    ],
    tips: [
      "Usa calzado adecuado para correr",
      "Mantén una postura erguida",
      "Aumenta la distancia gradualmente",
      "Hidrátate antes y después de correr",
    ],
  },
  {
    title: "Sentadillas",
    category: "Fuerza",
    duration: "12 min",
    difficulty: "Fácil",
    calories: "100 kcal",
    image: "/assets/generated_images/Squat_exercise_demonstration_a47cece8.png",
    instructions: [
      "Párate con los pies separados al ancho de los hombros",
      "Mantén la espalda recta y el pecho hacia arriba",
      "Baja el cuerpo como si fueras a sentarte en una silla",
      "Asegúrate de que las rodillas no sobrepasen los dedos de los pies",
      "Empuja con los talones para volver a la posición inicial",
    ],
    benefits: [
      "Fortalece cuádriceps, glúteos e isquiotibiales",
      "Mejora la movilidad de las caderas",
      "Aumenta la fuerza del core",
      "Mejora el equilibrio y la postura",
    ],
    tips: [
      "Mantén el peso en los talones",
      "No dejes que las rodillas se junten",
      "Respira: inhala al bajar, exhala al subir",
      "Empieza sin peso y añade resistencia gradualmente",
    ],
  },
  {
    title: "Plancha Abdominal",
    category: "Fuerza",
    duration: "10 min",
    difficulty: "Intermedio",
    calories: "90 kcal",
    image: "/assets/generated_images/Plank_exercise_demonstration_bf07cd17.png",
    instructions: [
      "Colócate boca abajo apoyado en los antebrazos y puntas de los pies",
      "Mantén el cuerpo en línea recta desde la cabeza hasta los talones",
      "Aprieta el core y los glúteos",
      "Mantén la posición durante 30-60 segundos",
      "Descansa y repite 3-4 veces",
    ],
    benefits: [
      "Fortalece profundamente el core",
      "Mejora la postura y estabilidad",
      "Previene dolores de espalda",
      "Tonifica múltiples grupos musculares",
    ],
    tips: [
      "No dejes caer las caderas",
      "No levantes demasiado los glúteos",
      "Respira normally, no contengas la respiración",
      "Aumenta el tiempo gradualmente",
    ],
  },
  {
    title: "Yoga Flow",
    category: "Yoga",
    duration: "25 min",
    difficulty: "Fácil",
    calories: "110 kcal",
    image: "/attached_assets/generated_images/Yoga_warrior_pose_demonstration_caa2a224.png",
    instructions: [
      "Comienza en posición de montaña (de pie, pies juntos)",
      "Fluye a través de posturas de saludo al sol",
      "Incluye postura del perro hacia abajo",
      "Transiciona a postura del guerrero",
      "Termina con posturas de relajación y estiramiento",
    ],
    benefits: [
      "Aumenta la flexibilidad general",
      "Reduce el estrés y la ansiedad",
      "Mejora la conciencia corporal",
      "Fortalece y tonifica el cuerpo",
    ],
    tips: [
      "Escucha a tu cuerpo y no fuerces las posturas",
      "Respira profundamente durante todo el flujo",
      "Usa props como bloques si es necesario",
      "Practica en un espacio tranquilo",
    ],
  },
];

export async function seedDatabase() {
  console.log("Seeding database with exercises...");

  try {
    // Check if exercises already exist
    const existingExercises = await db.select().from(exercises);

    if (existingExercises.length > 0) {
      console.log("Database already seeded, skipping...");
      return;
    }

    // Insert seed exercises
    await db.insert(exercises).values(seedExercises);

    console.log(`Successfully seeded ${seedExercises.length} exercises`);
  } catch (error) {
    console.error("Error seeding database:", error);
    throw error;
  }
}