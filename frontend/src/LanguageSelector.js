import React, { useState, useEffect } from "react";
import "./LanguageSelector.css";

function LanguageSelector() {
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");

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
        if (data.length > 0) {
          setSelectedLanguage(data[0].name);
        }
      })
      .catch((error) => {
        console.error("Error fetching languages:", error);
      });
  }, []);

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="language-selector">
      <select value={selectedLanguage} onChange={handleChange}>
        {languages.map((language) => (
          <option key={language.name} value={language.name}>
            {language.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSelector;
