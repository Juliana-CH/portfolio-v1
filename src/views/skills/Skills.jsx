import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./skills.scss";

function Skills() {
    const { t } = useTranslation();
    return (
        <>
        <section id="skills">
            <div className="title-container">
                <h2 className="titles-first-word">Soft
                <span className="titles-second-word">skills</span></h2>
            </div>
            <div className="skills-container">
                <div className="each-skill-container">
                    <h3>{t("skills.skills.ss1")}</h3>
                        <p>{t("skills.skills.ss2")}</p>
                </div>

                <div className="each-skill-container">
                    <h3>{t("skills.skills.ss3")}</h3>
                        <p>{t("skills.skills.ss4")}</p>
                </div>

                <div className="each-skill-container">
                    <h3>{t("skills.skills.ss5")}</h3>
                        <p className="testimony"><i>{t("skills.skills.ss6")}</i></p>
                        <h4><a className="testimony-author" href="https://www.linkedin.com/in/jonasconstante/">Jonas Mendes Constante | PhD, Strategy & Innovation - Ports and Logistics 
                            Senior Consultant</a></h4>
                </div>

                <div className="other-skills-container">
                    <div className="skill-item">
                        <h3>{t("skills.skills.ss7")}</h3>
                    </div>
                    <div className="skill-item">
                        <h3>{t("skills.skills.ss8")}</h3>
                    </div>
                    <div className="skill-item">
                        <h3>{t("skills.skills.ss9")}</h3>
                    </div>
                    <div className="skill-item">
                        <h3>{t("skills.skills.ss10")}</h3>
                    </div>
                    <div className="skill-item">
                        <h3>{t("skills.skills.s11")}</h3>
                    </div>
                    <div className="skill-item">
                        <h3>{t("skills.skills.ss12")}</h3>
                    </div>
                </div>

                <div className="cta">
                    <p>{t("skills.skills.ss13")}</p>
                </div>
                
                <div className="center-btn">
                    <button className="btn-cta"><a href="#footer">{t("skills.skills.ss14")}</a></button>
                </div>
                
            </div>

        </section>
        </>
    );
};

export default Skills;