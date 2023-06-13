import React from "react";
import { useTranslation } from "react-i18next";
import "./projects.scss";

function Projects() {
    const { t } = useTranslation();
    return (
        <>
        <section id="projects">

            <div className="title-container">
                <h2 className="titles-second-word-projects">{t("projects.pfirstw")}
                <span className="titles-first-word-projects">{t("projects.psecondw")}</span></h2>
            </div>

            <div className="side-image-content">

                <div className="project-container-left">

                    <div className="project-container-image">
                        <img className="project-image" src="./src/assets/images/calculator.png" 
                        alt="Projeto Calculadora, fundo preto e botões em cinza e laranja."/>
                    </div>

                    <div className="project-container-text">
                        <h2 className="project-title">{t("projects.ps1")}</h2>
                        <p>{t("projects.ps2")}
                        </p>
                        <button className="btn-blue"><a href="https://github.com/Juliana-CH/react-calculator" 
                        target="blank">{t("projects.ps3")}</a></button>
                    </div>
                </div>
            </div>

            <div className="side-image-content">
                <div className="project-container-right">

                    <div className="project-container-text">
                        <h2 className="project-title">{t("projects.ps4")}</h2>
                        <p>{t("projects.ps5")}
                        </p>
                        <button className="btn-blue">{t("projects.ps6")}</button>
                    </div>

                    <div className="project-container-image">
                        <img src="https://comunidad.retorn.com/wp-content/uploads/cache/2018/09/gatitos/3008811440.jpg"
                        alt="Gatito Fofito"></img>
                    </div>
                </div>
            </div>

            <div className="side-image-content">
                <div className="project-container-left">

                    <div className="project-container-image">
                        <img src="https://comunidad.retorn.com/wp-content/uploads/cache/2018/09/gatitos/3008811440.jpg"
                        alt="Gatito Fofito"></img>
                    </div>

                    <div className="project-container-text">
                        <h2 className="project-title">{t("projects.ps7")}</h2>
                        <p>{t("projects.ps8")}
                        </p>
                        <button className="btn-blue">{t("projects.ps3")}</button>
                    </div>
                </div>
            </div>

            <div className="side-image-content">
                <div className="project-container-right">

                    <div className="project-container-text">
                        <h2 className="project-title">{t("projects.ps9")}</h2>
                        <p>{t("projects.ps10")}
                        </p>
                        <button className="btn-blue"><a href="https://github.com/Juliana-CH/aboutme-juliana" 
                        target="blank">{t("projects.ps6")}</a></button>
                    </div>

                    <div className="project-container-image">
                    <img className="project-image" src="./src/assets/images/about-me.png" 
                    alt="Imagem da capa do primeiro projeto feito por mim. Fundo lilás com meu nome escrito 
                    em roxo e em letra cursiva."/>
                    </div>
                </div>
            </div>
    
        </section>
        </>
    );
};

export default Projects;