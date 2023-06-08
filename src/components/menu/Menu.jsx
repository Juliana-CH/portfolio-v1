import { useState } from "react";
import "./menu.scss";


function Menu() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMenuClick = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      <header className="header-menu">
        <div className="profile-container">
          <img className="profile-image" src="./src/assets/Juliana.png" alt="Imagem pequena de perfil."/>
          <span className="profile-name">JULIANA HAZIM</span>
        </div>
        <nav className={`menu ${showMobileMenu ? "menu--show" : ""}`}>
          <a href="#cover">Início</a>
          <a href="#about">Sobre mim</a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>
          <button className="menu__close" onClick={handleShowMenuClick}>
            Fechar
          </button>
        </nav>
        <button className="show-menu" onClick={handleShowMenuClick}>
          Menu
        </button>
      </header>

  
    </>
  );
}

export default Menu;