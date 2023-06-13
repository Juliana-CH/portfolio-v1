import { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import Translations from "../../components/language/Translations";
import "./about.scss";


function About() {
    const { t } = useTranslation();

    return (
        <>
        <section id="about" className="about-me" >
            <div className="title-container">
            <h2 className="titles-first-word"><Trans>{t("about.firstw")}</Trans><span 
            className="titles-second-word"><Trans>{t("about.secondw")}</Trans></span>
            </h2>
            </div>
            <p className="aboutme-text">
                <Trans>{t("about.text")}</Trans>
            </p>
        </section>
        </>
    );
}

export default About;