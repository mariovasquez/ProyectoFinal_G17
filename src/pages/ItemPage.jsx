import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import Footer from "../components/sections/Footer";
import useAlbums from "../hook/useAlbums";

const ItemPage = () => {
    const { id } = useParams();
    const { getAlbumData, album } = useAlbums();

    useEffect(() => {
        getAlbumData(id);
    }, [])

    //-----------------------------------Lógica del Dropdown
    const dropdown1 = useRef();
    const dropdown2 = useRef();
    const dropdownMenu = useRef();

    //Settear la opcion activa por defecto
    const [formatoActivo, setFormatoActivo] = useState();

    const getDefault = () => {
        setFormatoActivo("Seleccionar formato ---");
    }
    useEffect(getDefault, []);

    //Opcion1 elegida
    const getOption1 = () => {
        setAmount(album.priceLP * counter);
        setFormatoActivo(dropdown1.current.innerText);
        dropdownMenu.current.classList.add('item__album-format-dropdown__menu--active');
    }

    //Opcion2 elegida
    const getOption2 = () => {
        setAmount(album.priceCD * counter);
        setFormatoActivo(dropdown2.current.innerText);
        dropdownMenu.current.classList.add('item__album-format-dropdown__menu--active');
    }

    const openMenu = () => {
        dropdownMenu.current.classList.toggle('item__album-format-dropdown__menu--active');
    }

    //-----------------------------------Lógica del Contador
    const [counter, setCounter] = useState(1);
    const [amount, setAmount] = useState(0);

    const more = () => {
        if (counter < 6) {
            if (formatoActivo === 'LP') {
                setAmount(album.priceLP * (counter + 1));
            } else if (formatoActivo === 'CD') {
                setAmount(album.priceCD * (counter + 1));
            } else {
                setAmount(0);
            }
            setCounter(counter + 1);
        }
    }

    const less = () => {
        if (counter > 1) {
            if (formatoActivo === 'LP') {
                setAmount(album.priceLP * (counter - 1));
            } else if (formatoActivo === 'CD') {
                setAmount(album.priceCD * (counter - 1));
            } else {
                setAmount(0);
            }
            setCounter(counter - 1);
        }
    }

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
                                <div className="item__album-format-dropdown" onClick={openMenu}>
                                    <button className="item__album-format-dropdown-button">
                                        <p style={{ margin: "0" }}>{formatoActivo}</p>
                                        <i class="bi bi-chevron-compact-down"></i>
                                    </button>
                                    <div className="item__album-format-dropdown__menu" ref={dropdownMenu}>
                                        <p className="item__album-format-dropdown__menu-item" ref={dropdown1} onClick={getOption1}>LP</p>
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
                                <p className="item__album item__album-option" style={{ textAlign: "center", margin: "1rem 0 0 0" }}>Máximo 6 unidades.</p>
                            </div>
                        </div>
                        <div className="item__album-buy-container">
                            <p className="item__album-buy-price">S/{amount}</p>
                            <div style={{ display: "flex", gap: '2rem' }}>
                                <a
                                    className="item__album-buy-button"
                                    style={{textDecoration:'none', textAlign:'center', margin:'0', color:'white', padding:'0.75rem 0'}}
                                    href={`https://wa.me/51957144018?text=Deseo%20adquirir%20el%20siguiente%20articulo: Album: ${album.title}, Artista: ${album.artist}, Formato: ${formatoActivo}, Cantidad: ${counter}, Precio: S/${amount}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >COMPRAR</a>
                                {/* <button className="item__album-buy-cart"><i class="bi bi-cart"></i></button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ItemPage;