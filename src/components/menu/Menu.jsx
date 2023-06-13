import React, { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import Translations from "../language/Translations";
import LanguageSelector from "../language/LanguageSelector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./menu.scss";


function Menu() {
  const { t } = useTranslation();

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMenuClick = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      <header className="header">

        <div className="header-content">

          <div className="profile-container">
            <img className="profile-image" src="./src/assets/images/Juliana.png" alt="Imagem pequena de perfil."/>
            <span className="profile-name">JULIANA </span><span className="space">-</span><span className="profile-name"> HAZIM</span>
          </div>

          <div className="menu-content">

            <nav className={`menu ${showMobileMenu ? "menu--show" : ""}`}>
              <a href="#cover">
                <Trans>{t("menu.home")}</Trans></a>
              <a href="#about">
                <Trans>{t("menu.about")}</Trans></a>
              <a href="#skills">
                <Trans>{t("menu.skills")}</Trans></a>
              <a href="#projects">
                <Trans>{t("menu.projects")}</Trans></a>
              <a href="#footer">
                <Trans>{t("menu.footer")}</Trans></a>
              <button className="menu__close" onClick={handleShowMenuClick}>
                X
              </button>
            </nav>

          </div>

        <div>
          <LanguageSelector />
        </div>

          <div className="force-bg-color">
            <button onClick={handleShowMenuClick}>
            <FontAwesomeIcon icon={faBars} className="show-menu" />
            </button>
          </div>
        
        </div>
        
      </header>
  
    </>

  );
}

export default Menu;