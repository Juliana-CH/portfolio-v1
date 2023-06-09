import React from "react";
import Salutation from "../../components/salutation/Salutation";
import "./cover.scss";
import "../../components/buttons/buttons.scss";

function Cover() {
    return (
        <>
        <section className="hello">
            <div className="cover-presentation">
                <h1>
                    <span className="salutation"> <Salutation /></span> EU SOU JULIANA
                </h1>
            </div>

                <h2 className="cover-quote">
                    Brasileira, Administradora de Empresas em transição de carreira, 
                    adicionando conhecimentos para me tornar uma Desenvolvedora Front-End!
                </h2>

            <button className="btn-cta">
                ME CONHEÇA
            </button>
        </section>
        </>
    );
}


export default Cover;