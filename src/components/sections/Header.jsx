import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Link, Route, useSearchParams, useLocation } from "react-router-dom";
import '../../styles/css/library.css';
import logo from '../../assets/svg/Logo_Vao.svg';

const Header = () => {
    const header = useRef();
    const headerNav = useRef();
    const headerNavMenuLinkList = useRef();

    
    let location = useLocation();
    let navbar;

    useEffect(()=>{
        if(location.pathname === "/"){
            header.current.classList.remove('header--scroll');
            navbar=true;
        }
        else if(location.pathname !== "/"){
            header.current.classList.add('header--scroll');
            navbar=false;
        }
        document.addEventListener('scroll', documentScroll);
    },[location])

    
    const documentScroll = () => {
        const { scrollY } = window;
        if(navbar === true){
            header.current.classList.toggle('header--scroll', scrollY > 0);
        }
        else{
            header.current.classList.add('header--scroll');
        }
    };

    const switchTheme = () => {
        const body = document.querySelector('.body');
        body.classList.toggle("body--dark");
        const iconSun = document.querySelector('.icon__sun');
        iconSun.classList.toggle("icon__sun--toggle");
        const iconMoon = document.querySelector('.icon__moon');
        iconMoon.classList.toggle("icon__moon--toggle");

        if (body.classList.contains('body--dark')) {
            localStorage.setItem('darkMode', true);
        } else {
            localStorage.setItem('darkMode', false);
        }
    };

    const openMenu = () => {
        headerNav.current.classList.toggle('nav--open');
    };

    const closeMenu = () => {
        headerNav.current.classList.remove('nav--open');
    };

    useEffect(() => {
        if (localStorage.getItem('darkMode') === 'true' || localStorage.getItem('darkMode') === null) {
            document.querySelector('.body').classList.add('body--dark');
            const btnSwitch = document.querySelector('.switch');
            btnSwitch.classList.add("active");
        } else {
            document.querySelector('.body').classList.remove('body--dark');
            const btnSwitch = document.querySelector('.switch');
            btnSwitch.classList.remove("active");
        }
    }, []);

    return (
        <>
            <header className="header" ref={header}>
                <nav className="nav" id="nav" ref={headerNav}>
                    <div className="container container--nav-r">
                        <Link to='/'>
                            <img src={logo} alt="Concierto" width="100" height="100" className="nav__logo" />
                        </Link>
                        <button className="nav__action nav__action--menu" id="navActionMenu" onClick={openMenu}>
                            <i className="bi bi-list nav__icon"></i>
                        </button>
                        <ul className="menu menu--header" ref={headerNavMenuLinkList} onClick={closeMenu}>
                            <li>
                                <Link to='/' className="menu__link">INICIO</Link>
                            </li>
                            <li>
                                <Link to='/store' className="menu__link">TIENDA</Link>
                            </li>
                            <li>
                                <Link to='/about' className="menu__link">NOSOTROS</Link>
                            </li>
                            <li>
                                <Link to='/contact' className="menu__link">CONTACTO</Link>
                            </li>
                            <li className="nav__action nav__action--close" id="navActionClose" onClick={closeMenu}>
                                <i className="bi bi-x-circle"></i>
                            </li>
                        </ul>
                    </div>
                </nav>
                <button className="switch active" id="switch" onClick={switchTheme}>
                    <span><i className="bi bi-brightness-high icon icon__sun"></i></span>
                    <span><i className="bi bi-moon-stars icon icon__moon"></i></span>
                </button>
            </header >
        </>
    );
}

export default Header;