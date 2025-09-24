// src/contexts/AuthContext.jsx
import { createContext, useState, useEffect, useContext } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

// Custom hook for easier access
export function useAuth() {
  return useContext(AuthContext);
}

//updated the correct name of the file to AuthContext.jsx
