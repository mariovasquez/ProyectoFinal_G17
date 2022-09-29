import Footer from '../components/sections/Footer';
import ContactImg from '../assets/img/hero.jpg'
import Form from '../components/contact/Form';

const ContactPage = () => {
    return (
        <>
        <article className="contact">
            <div className="container">
                <div className="contact__wrapper">
                <Form/>
                    <div>
                        <img src={ContactImg} alt="Vao_contacto" height="570" width="500" className='contact__img'/>
                    </div> 
                </div>
            </div>
        </article>
        
        <Footer/>
        </>
    );
}
 
export default ContactPage;