import React, { useState } from "react";
import LanguageSelector from "../language/LanguageSelector";
import "./menu.scss";

function Menu() {
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
              <a href="#cover">Início</a>
              <a href="#about">Sobre mim</a>
              <a href="#skills">Habilidades</a>
              <a href="#projects">Projetos</a>
              <a href="#contact">Contato</a>
              <button className="menu__close" onClick={handleShowMenuClick}>
                Fechar
              </button>
            </nav>

          </div>

        <div>
          <LanguageSelector />
        </div>

          <div>
            <button className="show-menu" onClick={handleShowMenuClick}>
              menu
            </button>
          </div>
        
        </div>
        
      </header>
  
    </>

  );
}

export default Menu;