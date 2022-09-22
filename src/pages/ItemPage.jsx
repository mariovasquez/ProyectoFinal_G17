import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "../components/sections/Footer";

const ItemPage = () => {

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

    return (
        <>
            <section className="section--item">
                <div className="container container__item">
                    <div className="item__img-container">
                        <img src={album.image_url} alt="portada-album" className="item__img"/>
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
                                <button className="item__album item__album-format-dropdown"><p style={{margin: "0"}}>Limited LP Neon</p><i class="bi bi-chevron-compact-down"></i></button>
                            </div>
                            <div>
                                <p className="item__album item__album-option">CANTIDAD</p>
                                <div className="item__album-quantity-container">
                                    <button className="item__album item__album-quantity-button">-</button>
                                    <p className="item__album item__album-quantity-number">1</p>
                                    <button className="item__album item__album-quantity-button">+</button>
                                </div>
                            </div>
                        </div>
                        <div className="item__album-buy-container">
                            <p className="item__album-buy-price">S/100.00</p>
                            <div style={{display: "flex", gap: '2rem'}}>
                                <button className="item__album-buy-button">COMPRAR</button>
                                <button className="item__album-buy-cart"><i class="bi bi-cart"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default ItemPage;