import ExerciseCard from '../ExerciseCard';
import pushupImage from '@assets/generated_images/Push-up_exercise_demonstration_fdb19427.png';

export default function ExerciseCardExample() {
  return (
    <div className="p-6 max-w-sm">
      <ExerciseCard
        id="1"
        title="Flexiones"
        category="Fuerza"
        duration="15 min"
        difficulty="Intermedio"
        calories="120 kcal"
        image={pushupImage}
        onFavorite={(id) => console.log('Favorited:', id)}
        onClick={(id) => console.log('Clicked:', id)}
      />
    </div>
  );
}
