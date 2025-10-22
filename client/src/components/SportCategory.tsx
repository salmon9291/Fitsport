import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface SportCategoryProps {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export default function SportCategory({
  icon: Icon,
  label,
  isActive = false,
  onClick,
}: SportCategoryProps) {
  return (
    <Button
      variant={isActive ? "default" : "outline"}
      className={`flex-col h-24 w-24 gap-2 ${
        isActive ? "" : "hover-elevate active-elevate-2"
      }`}
      onClick={onClick}
      data-testid={`button-category-${label.toLowerCase()}`}
    >
      <Icon className="h-8 w-8" />
      <span className="text-xs font-medium">{label}</span>
    </Button>
  );
}
