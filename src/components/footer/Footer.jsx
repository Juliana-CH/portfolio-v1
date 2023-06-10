import "../footer/footer.scss";

function Footer() {
    return (
        <footer className="footer-container">

            <div className="footer-subcontainer">

                <form action="#"> {/* buscar solução para receber direto no meu email */}

                    <h5 className="form-title">CONTATO</h5>

                    <label for="">Nome</label>
                    <input type="text" placeholder="John Doe"></input>

                    <label for="">E-mail</label>
                    <input type="email" placeholder="john@doe.com"></input>

                    <label for="">Mensagem</label>
                    <input className="message-container" type="text" placeholder="Sua mensagem aqui."></input>

                    <button class="show-menu">Enviar!</button>

                </form>

            </div>

            <div className="footer-subcontainer-h">
                <ul className="footer-social">SOCIAL
                    <li className="linkedin">
                    <a href="https://www.linkedin.com/in/julianachraim/">LinkedIn</a>
                    </li>
                    <li className="github">
                    <a href="https://github.com/Juliana-CH">GitHub</a>
                    </li>
                </ul>
            
                
            </div>

            <div className="footer-subcontainer-h">
                <div className="footer-legal">
                    <h5>Avisos Legais</h5>
                    <h5>Cookies</h5>
                    <h5>@Copywright 2023. Made by Juliana Chraim Hazim</h5>
                </div>
            </div>
            
        </footer>
    );
}

export default Footer;