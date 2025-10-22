import Header from '../Header';

export default function HeaderExample() {
  return (
    <Header
      onAuthClick={() => console.log('Auth clicked')}
      onSearchChange={(value) => console.log('Search:', value)}
    />
  );
}
