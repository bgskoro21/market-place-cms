"use client";
import apiClient from "@/lib/axios";
import { ReactNode, createContext, useCallback, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface SessionContextType {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  fetchUser: () => void;
}

export const SessionContext = createContext<SessionContextType>({
  user: null,
  isAuthenticated: false,
  loading: true,
  fetchUser: () => {},
});

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = useCallback(async () => {
    setLoading(true);
    try {
      const response = await apiClient.get("/users/me");
      console.log(response.data);
      setUser(response.data.data);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  return <SessionContext.Provider value={{ user, isAuthenticated: !!user, loading, fetchUser }}>{children}</SessionContext.Provider>;
};
