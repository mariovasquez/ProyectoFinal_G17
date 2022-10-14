import { useEffect, useRef, useState } from "react";
import logoVaoText from '../../assets/svg/Logo_Vao_Texto.svg';
import { Link } from "react-router-dom";

const Footer = () => {
   
    const headerNavMenuLinkList = useRef();
    return (
        <footer className="footer">
            <div className="container">
        <div className="footer__row">
            <div className="footer__section">
                <div className="footer__logo">
                    <img className="footer__img" src={logoVaoText} alt="" />

                </div>
            </div>
            <div className="footer__section">
                <h5 className="footer__title">Páginas</h5>
                <ul className="footer__list" ref={headerNavMenuLinkList}>
                    <li className="footer__list"><Link to='/' className="footer__paragraph">Inicio</Link></li>
                    <li className="footer__list"><Link to='/store' className="footer__paragraph">Tienda</Link></li>
                    <li className="footer__list"><Link to='/about' className="footer__paragraph">Nosotros</Link></li>
                    <li className="footer__list"><Link to='/contact' className="footer__paragraph">Contacto</Link></li>
                </ul>
            </div>
            <div className="footer__section">
                <h5 className="footer__title">Tendencias</h5>
                <ul className="footer__list">
                    <li className="footer__list"><a href="" className="footer__paragraph">Imagine Dragons</a></li>
                    <li className="footer__list"><a href="" className="footer__paragraph">Maroon 5</a></li>
                    <li className="footer__list"><a href="" className="footer__paragraph">Artic Monkeys</a></li>
                    <li className="footer__list"><a href="" className="footer__paragraph">Red Hot CHilli
                        </a></li>
                    <li className="footer__list"><a href="" className="footer__paragraph">Chainsmokers</a></li>
                </ul>
            </div>
            <div className="footer__section">
                <h5 className="footer__title">Suscríbete</h5>
                <p className="footer__paragraph_1">Recibe descuentos especiales y las ultimas noticias del mundo musical</p>
                <form>
                    <div className="footer__buttons">
                        <input type="email" placeholder="Correo" className="button-input" pattern="[0-9+]+"
                            title="Ingresar un número de celular" required />
                        <button className="button-text">Suscribirse</button>
                    </div>
                </form>
            </div>
        </div></div>
        <div className="footer__sub">
            <ul className="footer__sub-menu">
                <div className="icon-container">
                    <li className="footer__icon">
                        <a href="#" className="footer__link-icon">
                            <i className="bi bi-facebook footer__icon-bi"></i>
                        </a>
                    </li>
                </div>
                <li className="footer__icon">
                    <a href="#" className="footer__link-icon">
                        <i className="bi bi-instagram footer__icon-bi"></i>
                    </a>
                </li>
                <li className="footer__icon">
                    <a href="#" className="footer__link-icon">
                        <i className="bi bi-twitter footer__icon-bi"></i>
                    </a>
                </li>
                <li className="footer__icon">
                    <a href="#" className="footer__link-icon">
                        <i className="bi bi-youtube footer__icon-bi"></i>
                    </a>
                </li>
            </ul>
        </div>
    </footer>
    );
}

export default Footer;