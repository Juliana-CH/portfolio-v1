import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import LanguageSelector from "../language/LanguageSelector";
import "../footer/footer.scss";

function Footer() {
    return (
        <section id="footer">
            <footer className="footer-container">

                <div className="footer-container-upper">

                    <form action="#"> {/* buscar solução para receber direto no meu email */}

                        <h5 className="form-title">CONTATO</h5>

                        <label htmlFor="name">Nome</label>
                        <input id="name" type="text"></input>

                        <label htmlFor="email">E-mail</label>
                        <input id="email" type="email"></input>

                        <label htmlFor="message">Mensagem</label>
                        <textarea id="message" className="message-container" type="text" rows={6}></textarea>
                        
                        <div className="button-container-form">
                            <button className="send-btn">Enviar</button>
                        </div>

                    </form>
                

                    <ul className="footer-social">
                        <a className="rrss" href="https://www.linkedin.com/in/julianachraim/" target="blank">
                            <li className="linkedin">
                                <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                            </li>
                        </a>

                        <a className="rrss" href="https://github.com/Juliana-CH" target="blank">
                            <li className="github">
                                <FontAwesomeIcon icon={faGithub} size="2x"/>
                            </li>
                        </a>
                    </ul>

                    <div>
                        <LanguageSelector />
                    </div>

                    <div className="footer-container-down">

                        <div className="footer-legal">
                            <h5>Copywright &copy; 2023, Juliana Hazim</h5>
                        </div>
                    </div>

                </div>

            </footer>
        </section>
    );
}

export default Footer;