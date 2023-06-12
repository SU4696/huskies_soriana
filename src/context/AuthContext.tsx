import React, { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updatePassword as updateFirebasePassword
} from "firebase/auth";
import { auth } from "@/firebase/config";
import router from "next/router";

interface UserType {
  email: string | null;
  uid: string | null;
}

const AuthContext = createContext<any>(null);


export const useAuth = () => useContext<any>(AuthContext);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType>({ email: null, uid: null });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          email: user.email,
          uid: user.uid,
        });
      } else {
        setUser({ email: null, uid: null });
        router.push("/");
      }
    });
    setLoading(false);

    return () => unsubscribe();
  }, []);

  const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = async () => {
    setUser({ email: null, uid: null });
    await signOut(auth);
  };
  const resetPassword = async (email:string) => {
    setUser({ email: null, uid: null });
     sendPasswordResetEmail(auth, email);
    await signOut(auth);
  }

  const updatePassword = async (newPassword: string) => {
    const user = auth.currentUser;
    if (user) {
      try {
        await updateFirebasePassword(user, newPassword);
     
      } catch (error) {
  
        console.error("Fatla: Password change", error);
      }
    }
  };

  return (
    <AuthContext.Provider value={{ user, signUp, logIn, logOut,resetPassword,updatePassword }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};