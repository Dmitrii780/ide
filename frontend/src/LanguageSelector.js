import React, { useEffect } from "react";
import "./LanguageSelector.css";
import { useCode } from "./CodeContext";

function LanguageSelector() {
  const { language, setLanguage, setLanguages } = useCode();

  useEffect(() => {
    fetch("http://193.123.62.94:4535/languages/list")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setLanguages(data);
        if (data.length > 0 && !language) {
          setLanguage(data[0].name);
        }
      })
      .catch((error) => {
        console.error("Error fetching languages:", error);
      });
  }, [language, setLanguage, setLanguages]);

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="language-selector">
      <select value={language} onChange={handleChange}>
        {useCode().languages.map((lang) => (
          <option key={lang.name} value={lang.name}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSelector;
