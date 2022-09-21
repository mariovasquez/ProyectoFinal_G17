import newsImg1 from '../../assets/img/news1.png';
import newsImg2 from '../../assets/img/news2.png';
import newsImg3 from '../../assets/img/news3.png';
import newsImg4 from '../../assets/img/news4.png';
const News = () => {
    return (
        <section className="section">
                <div className="container">
                    <div className="container container__news-title">
                        <h2 className="news__title">Noticias</h2>
                        <h3 className="news__subtitle">Lo último en el mundo musical</h3>
                    </div>
                    <div className="container container__news">
                        <div className="container container__new">
                            <div className="container__new-img">
                                <img className="new__img" src={newsImg1} alt="Noticia 1" width="400" />
                            </div>
                            <h4 className="new__title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
                            <p className="new__date">10 Oct 21</p>
                            <p className="new__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed natus
                                doloremque tenetur, ipsam eveniet commodi consequuntur suscipit cupiditate aspernatur
                                voluptatum velit dolores exercitationem beatae! Earum tempora consequuntur velit
                                perspiciatis quibusdam?</p>
                        </div>
                        <div className="container container__new">
                            <div className="container__new-img"><img className="new__img" src={newsImg2}
                                alt="Noticia 2" width="400" /></div>
                            <h4 className="new__title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
                            <p className="new__date">29 Oct 21</p>
                            <p className="new__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed natus
                                doloremque tenetur, ipsam eveniet commodi consequuntur suscipit cupiditate aspernatur
                                voluptatum velit dolores exercitationem beatae! Earum tempora consequuntur velit
                                perspiciatis quibusdam?</p>
                        </div>
                        <div className="container container__new">
                            <div className="container__new-img"><img className="new__img" src={newsImg3}
                                alt="Noticia 3" width="400" /></div>
                            <h4 className="new__title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
                            <p className="new__date">14 Nov 21</p>
                            <p className="new__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed natus
                                doloremque tenetur, ipsam eveniet commodi consequuntur suscipit cupiditate aspernatur
                                voluptatum velit dolores exercitationem beatae! Earum tempora consequuntur velit
                                perspiciatis quibusdam?</p>
                        </div>
                        <div className="container container__new">
                            <div className="container__new-img"><img className="new__img" src={newsImg4}
                                alt="Noticia 4" width="400" /></div>
                            <h4 className="new__title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
                            <p className="new__date">17 Ene 22</p>
                            <p className="new__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed natus
                                doloremque tenetur, ipsam eveniet commodi consequuntur suscipit cupiditate aspernatur
                                voluptatum velit dolores exercitationem beatae! Earum tempora consequuntur velit
                                perspiciatis quibusdam?</p>
                        </div>
                    </div>
                </div>
            </section>
    );
}
 
export default News;