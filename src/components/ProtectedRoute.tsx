import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";

//Only after login can take to main
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
    
  }, [router, user]);
  return <>{user ? children : null}</>;

};

export default ProtectedRoute;