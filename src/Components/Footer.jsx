

const Footer = () => {
    return (
        <footer>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        {/* Seção 1: Descrição e Redes Sociais */}
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3><span>HUNGER</span>FREE</h3>
                            <p>Junte-se à nossa missão para criar um mundo sem fome. Juntos, podemos fazer da comunidade Hunger Free uma realidade hoje!</p>
                            <div className="footer-icons">
                                {/* Redes sociais com acessibilidade */}
                                <a href="https://www.facebook.com" aria-label="Facebook">
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                                <a href="https://www.twitter.com" aria-label="Twitter">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                                <a href="https://www.instagram.com" aria-label="Instagram">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                                <a href="https://www.linkedin.com" aria-label="LinkedIn">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>

                        {/* Seção 2: Links rápidos */}
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Links Rápidos</h5>
                            <ul>
                                <li className="nav-item">
                                    <a href="/" className="nav-link">Início</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/about" className="nav-link">Sobre nós</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/contact" className="nav-link">Fale conosco</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/" className="nav-link">Nosso App</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/reviews" className="nav-link">Avaliações</a>
                                </li>
                            </ul>
                        </div>

                        {/* Seção 3: Informações de contato */}
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Informações de Contato</h5>
                            <p><i className="fa-solid fa-phone-volume"></i> +15 9090909090</p>
                            <p><i className="fa-solid fa-envelope"></i> hungerfree@hungerfree.com</p>
                            <p><i className="fa-solid fa-paper-plane"></i> Equipe HungerFree</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Seção final: Copyright */}
            <div className="Last-footer">
                <p>Copyright Hunger Free. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;