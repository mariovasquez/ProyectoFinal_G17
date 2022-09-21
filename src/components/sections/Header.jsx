import { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import AboutPage from "../../pages/AboutPage";
import IndexPage from "../../pages/IndexPage";
import '../../styles/css/library.css';

const Header = ({ logo }) => {
    const header = useRef();
    const headerNav = useRef();
    const headerNavMenuLinkList = useRef();

    const documentScroll = () => {
        const { scrollY } = window;
        header.current.classList.toggle('header--scroll', scrollY > 0);
    };

    const switchTheme = () => {
        const body = document.querySelector('.body');
        body.classList.toggle("body--dark");
        const btnSwitch = document.querySelector('.switch');
        btnSwitch.classList.toggle("active");

        if (body.classList.contains('body--dark')) {
            localStorage.setItem('darkMode', true);
        } else {
            localStorage.setItem('darkMode', false);
        }
    };

    document.addEventListener('scroll', documentScroll);

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
        <BrowserRouter>
            <header className="header" ref={header}>
                <nav className="nav" id="nav" ref={headerNav}>
                    <div className="container container--nav-r">
                        <Link to='/'>
                            <img src={logo} alt="Concierto" width="100" height="100" className="nav__logo" />
                        </Link>
                        <button className="nav__action nav__action--menu" id="navActionMenu" onClick={openMenu}>
                            <i className="bi bi-list nav__icon"></i>
                        </button>
                        <ul className="menu menu--header" ref={headerNavMenuLinkList}>
                            <li>
                                <Link to='/' className="menu__link">INICIO</Link>
                            </li>
                            <li>
                                <Link to='/about' className="menu__link">SOBRE NOSOTROS</Link>
                            </li>
                            <li>
                                <Link to='/' className="menu__link">ARTÍCULOS</Link>
                            </li>
                            <li>
                                <Link to='/' className="menu__link">EXCLUSIVOS</Link>
                            </li>
                            <li>
                                <Link to='/' className="menu__link">GRUPOS</Link>
                            </li>
                            <button className="switch active" id="switch" onClick={switchTheme}>
                                <span className="nav_span"><i className="bi bi-brightness-high"></i></span>
                                <span className="nav_span"><i className="bi bi-moon-stars"></i></span>
                            </button>
                            <li className="nav__action nav__action--close" id="navActionClose" onClick={closeMenu}>
                                <i className="bi bi-x-circle"></i>
                            </li>
                        </ul>
                        <button className="nav__action nav__action--search">
                            <i className="bi bi-search"></i>
                        </button>
                    </div>
                </nav>
            </header >
            <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Header;