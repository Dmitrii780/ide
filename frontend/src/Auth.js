import React, { createContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./FirebaseConfig.js";

export const AuthContext = createContext(); // Создание контекста

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const auth = getAuth(app);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
