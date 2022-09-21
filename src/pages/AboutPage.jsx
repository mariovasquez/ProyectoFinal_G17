import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";


const AboutPage = () => {
    return (
        <>
            <article className="section section--about">
                <h2 className="about__title">Sobre Nosotros</h2>
                <div className="about__info">
                    <ScrollContainer>
                        <ScrollPage page={0}>
                            <Animator animation={batch(Fade(), StickyOut(), Move())}>
                                <div className="about__text">
                                    <div className="about__text--container">
                                        <h3 className="about__subtitle">Nuestra historia</h3>
                                        <p className="about__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptas optio culpa adipisci fugiat aliquid atque quaerat rerum est debitis quia officia ipsa, provident praesentium numquam alias aliquam tempora voluptate ea, eos veritatis! Sint autem nesciunt esse doloribus nobis, voluptas repellendus omnis quasi molestias minus ratione sunt, nisi ab. Voluptatem.</p>
                                        <p className="about__paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem similique debitis vitae molestiae provident totam ad reprehenderit itaque atque eveniet dolor, enim laborum quasi eaque, officia, consequuntur earum repellendus dolore!</p>
                                        <p className="about__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vel, quo quam nemo non delectus quidem quaerat libero quibusdam distinctio numquam eius earum aliquid officia commodi, doloremque dolore dolores dolorum deserunt aut voluptatum repellat et?</p>
                                    </div>
                                    <img src="https://cdn.shopify.com/s/files/1/0096/1884/9839/files/Our_History_img_1_600x600.jpg?v=1564565175" alt="" className="about__img" width="480" height="480" />
                                </div>
                            </Animator>
                        </ScrollPage>
                        <ScrollPage page={1}>
                            <Animator animation={batch(Fade(), StickyOut(), Move())}>
                                <div className="about__text">
                                    <div>
                                        <p className="about__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptas optio culpa adipisci fugiat aliquid atque quaerat rerum est debitis quia officia ipsa, provident praesentium numquam alias aliquam tempora voluptate ea, eos veritatis! Sint autem nesciunt esse doloribus nobis, voluptas repellendus omnis quasi molestias minus ratione sunt, nisi ab. Voluptatem.</p>
                                        <p className="about__paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem similique debitis vitae molestiae provident totam ad reprehenderit itaque atque eveniet dolor, enim laborum quasi eaque, officia, consequuntur earum repellendus dolore!</p>
                                        <p className="about__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vel, quo quam nemo non delectus quidem quaerat libero quibusdam distinctio numquam eius earum aliquid officia commodi, doloremque dolore dolores dolorum deserunt aut voluptatum repellat et?</p>
                                        <p className="about__paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    </div>
                                    <img src="https://cdn.shopify.com/s/files/1/0096/1884/9839/files/Our_History_img_2_600x600.jpg?v=1564568805" alt="" className="about__img" width="480" height="480" />
                                </div>
                            </Animator>
                        </ScrollPage>
                        <ScrollPage page={2}>
                            <Animator animation={batch(FadeIn(), StickyOut())}>
                                <div className="about__text">
                                    <div>
                                        <p className="about__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptas optio culpa adipisci fugiat aliquid atque quaerat rerum est debitis quia officia ipsa, provident praesentium numquam alias aliquam tempora voluptate ea, eos veritatis! Sint autem nesciunt esse doloribus nobis, voluptas repellendus omnis quasi molestias minus ratione sunt, nisi ab. Voluptatem.</p>
                                        <p className="about__paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem similique debitis vitae molestiae provident totam ad reprehenderit itaque atque eveniet dolor, enim laborum quasi eaque, officia, consequuntur earum repellendus dolore!</p>
                                        <p className="about__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vel, quo quam nemo non delectus quidem quaerat libero quibusdam distinctio numquam eius earum aliquid officia commodi, doloremque dolore dolores dolorum deserunt aut voluptatum repellat et?</p>
                                    </div>
                                    <img src="http://www.revistaexclama.com/exclama2014/wp-content/uploads/2014/06/sister-ray.jpg" alt="" className="about__img" width="480" height="480" />
                                </div>
                            </Animator>
                        </ScrollPage>
                    </ScrollContainer>
                </div>
            </article>
        </>
    );
}

export default AboutPage;