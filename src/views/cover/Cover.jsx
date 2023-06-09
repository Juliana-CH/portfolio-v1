import React from "react";
import "./cover.scss";
import Salutation from "../../components/salutation/Salutation";

function Cover() {
    return (
        <>
        <section className="hello">
            <h1 className="cover-presentation"><span className="salutation>"><Salutation /></span> EU SOU JULIANA HAZIM.</h1>

            <h2 className="cover-quote">
                Brasileira, Administradora de Empresas em transição de carreira, 
                adicionando conhecimentos para me tornar uma Desenvolvedora Front-End!
            </h2>

            <button className="btn-knowme">
                Me conheça!
            </button>
        </section>
        </>
    );
}


export default Cover;