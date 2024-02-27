import React, { createContext, useContext, useState } from "react";

const CodeContext = createContext();

export const CodeProvider = ({ children }) => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("");
  const [languages, setLanguages] = useState([]);
  const [output, setOutput] = useState("");

  const value = {
    code,
    setCode,
    language,
    setLanguage,
    languages,
    setLanguages,
    output,
    setOutput,
  };

  return <CodeContext.Provider value={value}>{children}</CodeContext.Provider>;
};

export const useCode = () => useContext(CodeContext);
