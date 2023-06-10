import "./projects.scss";

function Projects() {
    return (
        <>
        <section id="projects">

            <div className="title-container">
                <h2 className="titles-second-word">Meus<span className="titles-first-word">Projetos</span></h2>
            </div>

            <div className="side-image-content">

                <div className="project-container-left">

                    <div className="project-container-image">
                        <img src="https://comunidad.retorn.com/wp-content/uploads/cache/2018/09/gatitos/3008811440.jpg"
                        alt="Gatito Fofito"></img>
                    </div>

                    <div className="project-container-text">
                        <h2 className="project-title">Calculadora</h2>
                        <p>Calculadora para executar operações básicas de matemática.
                            Este projeto foi baseado na calculadora do sistema iOS.
                        </p>
                        <button className="btn-blue">SAIBA MAIS</button>
                    </div>
                </div>
            </div>

            <div className="side-image-content">
                <div className="project-container-right">

                    <div className="project-container-text">
                        <h2 className="project-title">Calculadora IMC</h2>
                        <p>Calculadora para identificar o Índice de Massa Corpórea
                            (IMC), um dos fatores usados por profissionais da saúde para
                            identificar sobrepeso.
                        </p>
                        <button className="btn-blue">DETALHES</button>
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
                        <h2 className="project-title">Lista de Tarefas</h2>
                        <p>Sistema para controle de produtividade, inclusão de tarefas,
                            alteração de status e prazos.
                        </p>
                        <button className="btn-blue">QUERO VER!</button>
                    </div>
                </div>
            </div>

            <div className="side-image-content">
                <div className="project-container-right">

                    <div className="project-container-text">
                        <h2 className="project-title">Página de 'About me'</h2>
                        <p>Meu primeiro projeto, feito com HTML5, CSS e JS.
                            Muitas melhorias podem ser feitas, tanto em código,
                            quanto em design, mas tenho orgulho da 
                            minha evolução nesses últimos 8 meses!
                        </p>
                        <button className="btn-blue">ME CONHEÇA :)</button>
                    </div>

                    <div className="project-container-image">
                        <img src="https://comunidad.retorn.com/wp-content/uploads/cache/2018/09/gatitos/3008811440.jpg"
                        alt="Gatito Fofito"></img>
                    </div>
                </div>
            </div>
    
        </section>
        </>
    );
};

export default Projects;