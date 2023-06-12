import React, { useState } from "react";
import "./languageSelector.scss";

function LanguageSelector() {
  const [language, setLanguage] = useState("ES");
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const handleShowLanguageOptions = () => {
    setShowLanguageOptions(!showLanguageOptions);
  };

  return (
    <div className="language-menu">
      <button className="selected-language" onClick={handleShowLanguageOptions}>
        {language} <span className="arrow-down"></span>
      </button>
      {showLanguageOptions && (
        <div className="language-options">
          <button
            className={`language-option ${language === "ES" ? "selected" : ""}`}
            onClick={() => handleLanguageChange("ES")}
          >
            ES
          </button>

          <button
            className={`language-option ${language === "EN" ? "selected" : ""}`}
            onClick={() => handleLanguageChange("EN")}
          >
            EN
          </button>

          <button
            className={`language-option ${language === "PT-BR" ? "selected" : ""}`}
            onClick={() => handleLanguageChange("PT-BR")}
          >
            PT-BR
          </button>
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
