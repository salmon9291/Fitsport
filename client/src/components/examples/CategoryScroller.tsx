import CategoryScroller from '../CategoryScroller';

export default function CategoryScrollerExample() {
  return (
    <CategoryScroller
      onCategoryChange={(category) => console.log('Category changed:', category)}
    />
  );
}
