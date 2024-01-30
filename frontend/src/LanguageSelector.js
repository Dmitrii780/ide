import React, { useState } from "react";
import "./LanguageSelector.css";

function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState("JavaScript");

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="language-selector">
      <select value={selectedLanguage} onChange={handleChange}>
        <option value="JavaScript">JavaScript</option>
        <option value="Python">Python</option>
        <option value="C++">C++</option>
        <option value="C">C</option>
        <option value="GoLang">GoLang</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
