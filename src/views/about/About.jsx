import { useState } from "react";
import "./about.scss";

function About() {
    return (
        <>
        <section className="aboutme">
            <h2 className="titles-first-word">Sobre<span className="titles-second-word">mim</span></h2>
            <p>
                Sou brasileira e atualmente vivo em Valencia, Espanha. 
                Sou casada com João, meu parceiro de vida e mãe da Maria Antônia 
                e do Romeo, que me ensinam diariamente sobre amor.
                Adoro jogar beach tennis, compartilhar conhecimento e contribuir 
                para que todos tenham oportunidades semelhantes. 
                Também me interesso muito por alimentação saudável, consumo 
                consciente e julgo disciplina positiva uma ferramenta útil para 
                toda a sociedade!
                Tenho alguns anos de experiência em publicidade, entretanto, com 
                o nascimento dos meus filhos, escolhi me dedicar exclusivamente 
                à eles, mesmo sabendo que o desafio do retorno seria enorme. 
                Chegou a hora! Estou segura e animada para equilibrar esses 
                interesses e retomar minha carreira profissional!
            </p>
        </section>
        </>
    );
}

export default About;