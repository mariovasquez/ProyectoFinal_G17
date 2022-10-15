import ContactImg from '../assets/img/hero.jpg'
import Form from '../components/contact/Form';
import 'animate.css';


const ContactPage = () => {
    return (
        <>
        <article className="section contact animate__animated animate__zoomIn">
            <div className="container">
                <div className="contact__wrapper">
                <Form/>
                    <div>
                        <img src={ContactImg} alt="Vao_contacto" height="570" width="500" className='contact__img'/>
                    </div> 
                </div>
            </div>
        </article>
        </>
    );
}
 
export default ContactPage;