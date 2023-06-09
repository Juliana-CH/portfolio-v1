import "./skills.scss";

function Skills() {
    return (
        <>
        <section id="skills">
            <div className="title-container">
                <h2 className="titles-first-word">Soft<span className="titles-second-word">skills</span></h2>
            </div>
            <div className="skills-container">
                <div className="each-skill-container">
                    <h3>Adaptação</h3>
                        <p>Já vivi em 6 cidades, 4 estados e 2 países diferentes!</p>
                </div>

                <div className="each-skill-container">
                    <h3>Organização</h3>
                        <p>Ministrei cursos focados em organização, otimização da rotina e, 
                            por consequência, da qualidade de vida.</p>
                </div>

                <div className="each-skill-container">
                    <h3>Comprometimento & Orientação à negócio</h3>
                        <p className="testimony"><i>“Juliana é uma excelente profissional: Excelente motivação e energia, senso 
                            de negócios com fortes habilidades de gestão. Grande iniciativa e condução. 
                            Eu a recomendo para todos os projetos, especialmente aqueles em que a 
                            dedicação é a chave.”</i></p>
                        <h4><a className="testimony-author" href="https://www.linkedin.com/in/jonasconstante/">Jonas Mendes Constante | PhD, Strategy & Innovation - Ports and Logistics 
                            Senior Consultant</a></h4>
                </div>

                <div className="other-skills-container">
                    <div className="skill-item">
                        <h3>Colaboração</h3>
                    </div>
                    <div className="skill-item">
                        <h3>Entusiasmo</h3>
                    </div>
                    <div className="skill-item">
                        <h3>Responsabilidade</h3>
                    </div>
                    <div className="skill-item">
                        <h3>Trabalho em equipe</h3>
                    </div>
                    <div className="skill-item">
                        <h3>Falar em público</h3>
                    </div>
                    <div className="skill-item">
                        <h3>Foco em solução</h3>
                    </div>
                    <div className="skill-item">
                        <h3>Autogestão</h3>
                    </div>
                </div>

                <div className="cta">
                <p>Adoraria compartilhar minhas experiências, vamos conversar?</p>
                </div>
                <div className="center-btn">
                <button className="btn-cta">CONTATO</button>
                </div>
                
            </div>

        </section>
        </>
    );
}

export default Skills;