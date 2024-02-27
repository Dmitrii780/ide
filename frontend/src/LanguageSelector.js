import React, { useEffect } from "react";
import "./LanguageSelector.css";
import { useCode } from "./CodeContext";

function LanguageSelector() {
  const { language, setLanguage, languages, setLanguages } = useCode(); // Добавлен setLanguages

  useEffect(() => {
    if (languages.length === 0) {
      fetch("http://193.123.62.94:4535/languages/list")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setLanguages(data); // Исправлено на setLanguages
          if (!language && data.length > 0) {
            setLanguage(data[0].name); // Устанавливаем первый язык из списка
          }
        })
        .catch((error) => {
          console.error("Error fetching languages:", error);
        });
    }
  }, [language, setLanguage, languages, setLanguages]); // Убран дубликат setLanguage

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="language-selector">
      <select value={language || ""} onChange={handleChange}>
        {languages.map((lang) => (
          <option key={lang.name} value={lang.name}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSelector;
