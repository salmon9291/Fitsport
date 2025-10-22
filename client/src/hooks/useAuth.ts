
import { useQuery } from "@tanstack/react-query";

export function useAuth() {
  const token = localStorage.getItem("auth_token");

  const { data: user, isLoading } = useQuery({
    queryKey: ["/api/auth/user"],
    queryFn: async () => {
      if (!token) {
        throw new Error("No token");
      }
      
      const response = await fetch("/api/auth/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      if (!response.ok) {
        localStorage.removeItem("auth_token");
        throw new Error("Not authenticated");
      }
      
      return response.json();
    },
    enabled: !!token,
    retry: false,
  });

  return {
    user,
    isAuthenticated: !!user && !!token,
    isLoading,
    token,
  };
}

export function logout() {
  localStorage.removeItem("auth_token");
  window.location.href = "/";
}

export function setAuthToken(token: string) {
  localStorage.setItem("auth_token", token);
}
