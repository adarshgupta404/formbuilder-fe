// AuthContext.tsx
"use client"
import { createContext, useState, useContext, ReactNode } from "react";
import type { User } from "@/types/@types";
import { useRouter } from "next/navigation";

interface AuthContextType {
  user: User | null;
  login: (user:User) => Promise<void>;
  logout: () => void;
  isAuthenticated: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  const login = async (user: User) => {
    try {
    //   console.log(user);
      setUser(user);
      // Make a POST request to your login endpoint
      // Set user state with the response data, including feature, sub, and business
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logout = () => {
    // Clear user state
    setUser(null);
    localStorage.clear();
    router.push("/login")
  };

  const isAuthenticated = () => {
    return !!user;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
