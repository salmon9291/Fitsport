import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Dumbbell } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b bg-card">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center space-x-2 cursor-pointer">
            <Dumbbell className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">FitApp</span>
          </a>
        </Link>
        <nav className="flex items-center space-x-4">
          <Link href="/">
            <a>
              <Button variant="ghost">Inicio</Button>
            </a>
          </Link>
          <Link href="/exercises">
            <a>
              <Button variant="ghost">Ejercicios</Button>
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}