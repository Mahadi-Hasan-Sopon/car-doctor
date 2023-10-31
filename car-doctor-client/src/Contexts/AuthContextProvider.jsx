/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
      setLoading(false);
    });

    return () => unSubscribe();
  }, []);

  const RegisterWithEmailPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateProfileInfo = (user, displayName, photoURL) => {
    return updateProfile(user, {
      displayName: displayName ? displayName : "",
      photoURL: photoURL ? photoURL : "",
    });
  };

  const LoginWithEmailPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const SignInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const LogOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    RegisterWithEmailPassword,
    LoginWithEmailPassword,
    SignInWithGoogle,
    updateProfileInfo,
    LogOutUser,
    user,
    loading,
    setLoading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthContextProvider;
