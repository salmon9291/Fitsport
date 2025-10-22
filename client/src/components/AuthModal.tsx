import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLogin?: (username: string, password: string) => void;
  onSignup?: (username: string, password: string) => void;
}

export default function AuthModal({
  open,
  onOpenChange,
  onLogin,
  onSignup,
}: AuthModalProps) {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin?.(loginUsername, loginPassword);
    console.log('Login submitted:', loginUsername);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    onSignup?.(signupUsername, signupPassword);
    console.log('Signup submitted:', signupUsername);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md" data-testid="modal-auth">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display">
            Bienvenido a FitOrange
          </DialogTitle>
          <DialogDescription>
            Inicia sesión o crea una cuenta para comenzar
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login" data-testid="tab-login">
              Iniciar Sesión
            </TabsTrigger>
            <TabsTrigger value="signup" data-testid="tab-signup">
              Registrarse
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="login-username">Usuario</Label>
                <Input
                  id="login-username"
                  placeholder="tu_usuario"
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                  data-testid="input-login-username"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="login-password">Contraseña</Label>
                <Input
                  id="login-password"
                  type="password"
                  placeholder="••••••••"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  data-testid="input-login-password"
                  required
                />
              </div>
              <Button type="submit" className="w-full" data-testid="button-login-submit">
                Iniciar Sesión
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="signup">
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signup-username">Usuario</Label>
                <Input
                  id="signup-username"
                  placeholder="tu_usuario"
                  value={signupUsername}
                  onChange={(e) => setSignupUsername(e.target.value)}
                  data-testid="input-signup-username"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-password">Contraseña</Label>
                <Input
                  id="signup-password"
                  type="password"
                  placeholder="••••••••"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  data-testid="input-signup-password"
                  required
                />
              </div>
              <Button type="submit" className="w-full" data-testid="button-signup-submit">
                Crear Cuenta
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
