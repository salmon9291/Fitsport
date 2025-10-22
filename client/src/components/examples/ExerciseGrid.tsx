import ExerciseGrid from '../ExerciseGrid';
import pushupImage from '@assets/generated_images/Push-up_exercise_demonstration_fdb19427.png';
import yogaImage from '@assets/generated_images/Yoga_warrior_pose_demonstration_caa2a224.png';
import runImage from '@assets/generated_images/Running_exercise_demonstration_bde19d34.png';

const exercises = [
  {
    id: '1',
    title: 'Flexiones',
    category: 'Fuerza',
    duration: '15 min',
    difficulty: 'Intermedio' as const,
    calories: '120 kcal',
    image: pushupImage,
  },
  {
    id: '2',
    title: 'Postura del Guerrero',
    category: 'Yoga',
    duration: '20 min',
    difficulty: 'Fácil' as const,
    calories: '80 kcal',
    image: yogaImage,
  },
  {
    id: '3',
    title: 'Carrera',
    category: 'Cardio',
    duration: '30 min',
    difficulty: 'Intermedio' as const,
    calories: '300 kcal',
    image: runImage,
  },
];

export default function ExerciseGridExample() {
  return (
    <ExerciseGrid
      exercises={exercises}
      onExerciseClick={(id) => console.log('Exercise clicked:', id)}
      onFavorite={(id) => console.log('Favorited:', id)}
    />
  );
}
