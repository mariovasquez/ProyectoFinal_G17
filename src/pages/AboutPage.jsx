import Accordion from "../components/nosotros/Accordion";
import VaoIMG from "../assets/img/Vao_Music.png";


const AboutPage = () => {
    return (
        <>
            <article className="section section--about">
                <h2 className="about__title">Sobre Nosotros</h2>
                <div className="about__info">
                    <div className="about__text">
                        <div className="about__text--container">
                            <h3 className="about__subtitle">Nuestra historia</h3>
                            <p className="about__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptas optio culpa adipisci fugiat aliquid atque quaerat rerum est debitis quia officia ipsa, provident praesentium numquam alias aliquam tempora voluptate ea, eos veritatis! Sint autem nesciunt esse doloribus nobis, voluptas repellendus omnis quasi molestias minus ratione sunt, nisi ab. Voluptatem.</p>
                            <p className="about__paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem similique debitis vitae molestiae provident totam ad reprehenderit itaque atque eveniet dolor, enim laborum quasi eaque, officia, consequuntur earum repellendus dolore!</p>
                            <p className="about__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vel, quo quam nemo non delectus quidem quaerat libero quibusdam distinctio numquam eius earum aliquid officia commodi, doloremque dolore dolores dolorum deserunt aut voluptatum repellat et?</p>
                        </div>
                        <img src={VaoIMG} alt="" className="about__img" width="480" height="480" />
                    </div>
                    <section className="section--about">
                        <h2 className="about__title">Nuestros Valores</h2>
                        <div className="valor">
                            <div className="valor__item">
                                <i className="bi bi-person-check-fill valor__item-icon"></i>
                                <h3 className="valor__item-title">Honestidad</h3>
                                <p className="valor__item-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div className="valor__item">
                                <i className="bi bi-heart-fill valor__item-icon"></i>
                                <h3 className="valor__item-title">Respeto</h3>
                                <p className="valor__item-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                            </div>
                            <div className="valor__item">
                                <i className="bi bi-award-fill valor__item-icon"></i>
                                <h3 className="valor__item-title">Integridad</h3>
                                <p className="valor__item-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

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