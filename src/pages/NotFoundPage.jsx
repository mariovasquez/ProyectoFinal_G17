import Error from '../assets/svg/404.svg';
import Footer from '../components/sections/Footer';


const NotFoundPage = () => {
    return (
        <>
           <article className="error">
                <img src={Error} alt="" className="error__img"/>
                <h3 className="error__title">¿Se te perdió algún disco?</h3>
                <p className="error__paragraph">No pudimos encontrar el disco que estabas buscando.
                Recuerda que en VAO Music contamos solo con música de alta calidad.</p>
           </article>
           <Footer/>
        </>
    );
}
 
export default NotFoundPage;