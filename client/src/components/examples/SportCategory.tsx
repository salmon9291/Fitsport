import { useState } from 'react';
import SportCategory from '../SportCategory';
import { Dumbbell } from 'lucide-react';

export default function SportCategoryExample() {
  const [active, setActive] = useState(false);
  
  return (
    <div className="p-6">
      <SportCategory
        icon={Dumbbell}
        label="Fuerza"
        isActive={active}
        onClick={() => setActive(!active)}
      />
    </div>
  );
}
