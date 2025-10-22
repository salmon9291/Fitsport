import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, User, LogOut, Dumbbell, X, Menu } from "lucide-react";
import { useAuth, logout } from "@/hooks/useAuth";
import AuthModal from "./AuthModal";

interface HeaderProps {
  onAuthClick?: () => void;
  onSearchChange?: (value: string) => void;
}

export default function Header({ onAuthClick, onSearchChange }: HeaderProps) {
  const { isAuthenticated, user } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    onSearchChange?.(value);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Dumbbell className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold font-display text-primary">
              FitOrange
            </span>
          </div>

          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar ejercicios..."
                className="pl-10"
                value={searchValue}
                onChange={(e) => handleSearchChange(e.target.value)}
                data-testid="input-search"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onAuthClick}
                  data-testid="button-user-profile"
                >
                  <User className="h-4 w-4 mr-2" />
                  {user?.firstName || user?.email || "Perfil"}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={logout}
                  data-testid="button-logout"
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Button
                onClick={() => setShowAuthModal(true)}
                data-testid="button-login"
              >
                <User className="h-4 w-4 mr-2" />
                Iniciar Sesión
              </Button>
            )}
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar ejercicios..."
                className="pl-10"
                value={searchValue}
                onChange={(e) => handleSearchChange(e.target.value)}
                data-testid="input-search-mobile"
              />
            </div>
          </div>
        )}
      </div>

      <AuthModal open={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </header>
  );
}