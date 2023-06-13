import "./projects.scss";

function Projects() {
    return (
        <>
        <section id="projects">

            <div className="title-container">
                <h2 className="titles-second-word-projects">Meus<span className="titles-first-word-projects">Projetos</span></h2>
            </div>

            <div className="side-image-content">

                <div className="project-container-left">

                    <div className="project-container-image">
                        <img className="project-image" src="./src/assets/images/calculator.png" 
                        alt="Projeto Calculadora, fundo preto e botões em cinza e laranja."/>
                    </div>

                    <div className="project-container-text">
                        <h2 className="project-title">Calculadora</h2>
                        <p>Calculadora para executar operações básicas de matemática.
                            Este projeto foi baseado na calculadora do sistema iOS.
                        </p>
                        <button className="btn-blue"><a href="https://github.com/Juliana-CH/react-calculator" 
                        target="blank">SAIBA MAIS</a></button>
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
                        <button className="btn-blue">SAIBA MAIS</button>
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
                        <button className="btn-blue"><a href="https://github.com/Juliana-CH/aboutme-juliana" 
                        target="blank">DETALHES</a></button>
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