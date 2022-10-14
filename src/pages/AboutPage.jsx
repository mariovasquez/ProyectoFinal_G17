import Accordion from "../components/nosotros/Accordion";
import VaoIMG from "../assets/img/Vao_Music.jpg";


const AboutPage = () => {
    return (
        <>
            <article className="section section--about">
                <h2 className="about__title">Sobre Nosotros</h2>
                <div className="about__info">
                    <div className="about__text">
                        <div className="about__text--container">
                            <h3 className="about__subtitle">Nuestra historia</h3>
                            <p>Somos una empresa dedicada a la comercialización de productos de musicales, de capital 100% peruano, con tiendas
                                 físicas en ocho de las principales ciudades del país y con cobertura a nivel nacional mediante nuestra página web.
                                Tenemos la visión de ser la plataforma de música N°1 en el país, brindando soporte a diferentes artistas en su trayectoria impulsando el talento
                                peruano, contamos con un compromiso de dar lo mejor a un precio justo y competitivo.

                            </p>
                        </div>
                        <img src={VaoIMG} alt="" className="about__img" width="480" height="480" />
                    </div>
                    <section className="section--about">
                        <h2 className="about__title">Nuestros Valores</h2>
                        <div className="valor">
                            <div className="valor__item">
                                <i className="bi bi-person-check-fill valor__item-icon"></i>
                                <h3 className="valor__item-title">Honestidad</h3>
                                <p className="valor__item-paragraph">Somos transparentes al 100% con nuestros precios</p>
                            </div>
                            <div className="valor__item">
                                <i className="bi bi-heart-fill valor__item-icon"></i>
                                <h3 className="valor__item-title">Respeto</h3>
                                <p className="valor__item-paragraph">Respetamos a todos teniendo una politica de 0 discrimación</p>

                            </div>
                            <div className="valor__item">
                                <i className="bi bi-award-fill valor__item-icon"></i>
                                <h3 className="valor__item-title">Integridad</h3>
                                <p className="valor__item-paragraph">Tenemos valores solidos para nunca fallar a nuestros clientes</p>

                            </div>
                        </div>
                    </section>

                    <Accordion />

                </div>
            </article>
        </>
    );
}

export default AboutPage;