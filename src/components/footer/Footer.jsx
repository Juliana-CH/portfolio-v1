import "../footer/footer.scss";

function Footer() {
    return (
        <footer className="footer-container">

            <div className="footer-container-upper">

                <form action="#"> {/* buscar solução para receber direto no meu email */}

                    <h5 className="form-title">CONTATO</h5>

                    <label htmlFor="name">Nome</label>
                    <input id="name" type="text" placeholder="John Doe"></input>

                    <label htmlFor="email">E-mail</label>
                    <input id="email" type="email" placeholder="john@doe.com"></input>

                    <label htmlFor="message">Mensagem</label>
                    <input id="message" className="message-container" type="text" placeholder="Sua mensagem aqui."></input>
                    <div>
                        <button className="send-btn">Enviar</button>
                    </div>

                </form>
            

                <ul className="footer-social">
                    <a className="rrss" href="https://www.linkedin.com/in/julianachraim/">
                        <li className="linkedin">
                            LinkedIn
                        </li>
                    </a>

                    <a className="rrss" href="https://github.com/Juliana-CH">
                        <li className="github">
                            GitHub
                        </li>
                    </a>
                </ul>

                <div className="footer-container-down">

                    <div className="footer-legal">
                        <h5>Copywright &copy; 2023, Juliana Hazim</h5>
                    </div>
                </div>

            </div>

        </footer>
    );
}

export default Footer;