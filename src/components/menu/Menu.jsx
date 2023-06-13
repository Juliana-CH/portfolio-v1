import React, { useState, Suspense } from "react";
import { useTranslation } from "react-i18next";
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
              <a href="#cover">{t("menu.home")}</a>
              <a href="#about">{t("menu.about")}</a>
              <a href="#skills">{t("menu.skills")}</a>
              <a href="#projects">{t("menu.projects")}</a>
              <a href="#footer">{t("menu.footer")}</a>
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