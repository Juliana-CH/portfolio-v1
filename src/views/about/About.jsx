import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./about.scss";


function About() {
    const { t } = useTranslation();

    return (
        <>
        <section id="about" className="about-me" >
            <div className="title-container">
            <h2 className="titles-first-word">{t("about.firstw")}<span 
            className="titles-second-word">{t("about.secondw")}</span>
            </h2>
            </div>
            <p className="aboutme-text">
                {t("about.text")}
            </p>
        </section>
        </>
    );
}

export default About;