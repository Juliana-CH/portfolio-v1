import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './languageselector.scss';

function LanguageSelector() {
  const { i18n } = useTranslation();
  const language = i18n.language;

  const handleLanguageChange = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className='language-options'>
      <button
        className={`language-option ${language === 'es' ? 'selected' : ''}`}
        onClick={() => handleLanguageChange('es')}
      >
        Español
      </button>

      <button
        className={`language-option ${language === 'en' ? 'selected' : ''}`}
        onClick={() => handleLanguageChange('en')}
      >
        English
      </button>

      <button
        className={`language-option ${language === 'pt' ? 'selected' : ''}`}
        onClick={() => handleLanguageChange('pt')}
      >
        Português
      </button>
    </div>
  );
}

export default LanguageSelector;
