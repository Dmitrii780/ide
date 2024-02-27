import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, signInAnonymously } from "firebase/auth";
import { auth, googleProvider } from "./FirebaseConfig";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignInWithGoogle = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        await signInWithPopup(auth, googleProvider);
        navigate("/ide");
      } catch (error) {
        alert(error.message);
      }
    },
    [navigate]
  );

  const handleContinueWithoutSignIn = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        await signInAnonymously(auth);
        navigate("/ide");
      } catch (error) {
        alert(error.message);
      }
    },
    [navigate]
  );

  return (
    <div>
      <h1>Sign Up</h1>
      <button onClick={handleSignInWithGoogle}>SignUp witn Google</button>
      <button onClick={handleContinueWithoutSignIn}>
        Continue Anonimousley
      </button>
    </div>
  );
};

export default SignUp;
