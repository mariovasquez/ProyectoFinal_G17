import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import Footer from "../components/sections/Footer";

const ItemPage = () => {

    //--------------------------------Consumir datos del JSON
    const { id } = useParams();

    const [album, setAlbum] = useState([]);

    useEffect(() => {
        getAlbumsData("https://raw.githubusercontent.com/mariovasquez/ProyectoFinal_G17/develop/src/json/albums.json");
    }, [])

    const getAlbumsData = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            data.map((element, index) => {
                if (element.id == id) {
                    element.artist = element.artist.toUpperCase();
                    setAlbum(element);
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    //-----------------------------------Lógica del Dropdown
    const dropdown1 = useRef();
    const dropdown2 = useRef();

    //Settear la opcion activa por defecto
    const [formatoActivo, setFormatoActivo] = useState();

    const getDefault = () => {
        setFormatoActivo(dropdown1.current.innerText);
    }
    useEffect(getDefault, []);

    //Opcion1 elegida
    const getOption1 = () => {
        setFormatoActivo(dropdown1.current.innerText);
    }

    //Opcion2 elegida
    const getOption2 = () => {
        setFormatoActivo(dropdown2.current.innerText);
    }

    //-----------------------------------Lógica del Contador
    const [counter, setCounter] = useState(1);

    const more = () => {
        setCounter(counter + 1);
    }

    const less = () => {
        setCounter(counter - 1);
    }

    console.log(counter);

    return (
        <>
            <section className="section--item">
                <div className="container container__item">
                    <div className="item__img-container">
                        <img src={album.image_url} alt="portada-album" className="item__img" />
                    </div>
                    <div>
                        <div>
                            <h3 className="item__album item__album-artist">{album.artist}</h3>
                            <h2 className="item__album item__album-title">{album.title}</h2>
                            <h4 className="item__album item__album-date">24/02/2023</h4>
                            <p className="item__album item__album-info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum officiis necessitatibus natus, voluptatibus eveniet libero.</p>
                        </div>
                        <div className="item__album-option-container">
                            <div>
                                <p className="item__album item__album-option">FORMATO</p>
                                <div className="item__album-format-dropdown">
                                    <button className="item__album-format-dropdown-button">
                                        <p style={{ margin: "0" }}>{formatoActivo}</p>
                                        <i class="bi bi-chevron-compact-down"></i>
                                    </button>
                                    <div className="item__album-format-dropdown__menu">
                                        <p className="item__album-format-dropdown__menu-item" ref={dropdown1} onClick={getOption1}>Limited LP Neon</p>
                                        <p className="item__album-format-dropdown__menu-item" ref={dropdown2} onClick={getOption2}>CD</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="item__album item__album-option">CANTIDAD</p>
                                <div className="item__album-quantity-container">
                                    <button className="item__album item__album-quantity-button" onClick={less}>-</button>
                                    <p className="item__album item__album-quantity-number">{counter}</p>
                                    <button className="item__album item__album-quantity-button" onClick={more}>+</button>
                                </div>
                            </div>
                        </div>
                        <div className="item__album-buy-container">
                            <p className="item__album-buy-price">S/100.00</p>
                            <div style={{ display: "flex", gap: '2rem' }}>
                                <button className="item__album-buy-button">COMPRAR</button>
                                <button className="item__album-buy-cart"><i class="bi bi-cart"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default ItemPage;