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
                            <h4 className="new__title">En cualquier parte puedes encontrar un artista</h4>
                            <p className="new__date">10 Oct 22</p>
                            <p className="new__description">Se cumple un año del programa el mejor Artista Peruano patrocinado por VAO MUSIC si crees que tu tienes las capacidades de ser el siguiente enviamos un correo a artista@vaomusic.com o también solicitar el formulario en cualqueira de nuestras sedes.</p>
                        </div>
                        <div className="container container__new">
                            <div className="container__new-img"><img className="new__img" src={newsImg2}
                                alt="Noticia 2" width="400" /></div>
                            <h4 className="new__title">Pink Floyd lanza una nueva canción 28 años</h4>
                            <p className="new__date">1 Oct 22</p>
                            <p className="new__description">Una canción de protesta contra la guerra de Ucrania.
Ese ha sido el motivo por el cual la banda Pink Floyd se reencontró para grabar su primer material nuevo en 28 años.
La canción Hey Hey, Rise Up! reúne a David Gilmour, Nick Mason, Guy Pratt y Nitin Sawhney</p>
                        </div>
                        <div className="container container__new">
                            <div className="container__new-img"><img className="new__img" src={newsImg3}
                                alt="Noticia 3" width="400" /></div>
                            <h4 className="new__title">Taylor Swift estaba nominada a dos premios</h4>
                            <p className="new__date">29 Set 22</p>
                            <p className="new__description">Mejor Vídeo del Año y Mejor Vídeo de Largo Formato. Se ha llevado ambos, por su corto de 10 minutos de duración protagonizado por Sadie Sink de ‘Stranger Things’ y con su tema ‘All Too Well’</p>
                        </div>
                        <div className="container container__new">
                            <div className="container__new-img"><img className="new__img" src={newsImg4}
                                alt="Noticia 4" width="400" /></div>
                            <h4 className="new__title">Dan Reynolds dona casa de un millón de dólares a ONG LGBTI</h4>
                            <p className="new__date">17 Ene 22</p>
                            <p className="new__description">El líder y vocalista de Imagine Dragons, Dan Reynolds se desprendió de la casa de su infancia para mostrar su apoyo a la comunidad LGTBI. Ubicada en Las Vegas, la propiedad ha sido valorizada en un millón de dólares </p>
                        </div>
                    </div>
                </div>
            </section>
    );
}
 
export default News;