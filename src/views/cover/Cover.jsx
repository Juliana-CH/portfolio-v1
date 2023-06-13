import React from "react";
import { useTranslation } from "react-i18next";
import Salutation from "../../components/salutation/Salutation";
import "./cover.scss";
import "../../components/buttons/buttons.scss";

function Cover() {
    const { t } = useTranslation();
    return (
        <>
        <section className="cover-container" id="cover">
            <div className="cover-presentation">
                <h1>
                    <span className="salutation"> <Salutation /></span>{t("cover.s1")}
                </h1>
            </div>

                <h2 className="cover-quote">
                    {t("cover.s2")}
                </h2>

            <button className="btn-cta">
                {t("cover.s3")}
            </button>
        </section>
        </>
    );
}


export default Cover;