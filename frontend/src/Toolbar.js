import React from "react";
import "./Toolbar.css";
import LanguageSelector from "./LanguageSelector";
import RunButton from "./RunButton";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./FirebaseConfig";

function Toolbar({ onNewFile, onSave }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/signup");
    } catch (error) {
      console.error("Logout error: ", error);
    }
  };

  return (
    <div className="toolbar">
      <button onClick={onSave}>Save</button>
      <RunButton />
      <LanguageSelector />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Toolbar;
