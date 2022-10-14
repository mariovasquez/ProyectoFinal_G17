import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const StorePage = () => {
    // Fetch JSON
    const [albumsData, setAlbumsData] = useState([]);

    useEffect(() => {
        getAlbumsData("https://raw.githubusercontent.com/mariovasquez/ProyectoFinal_G17/develop/src/json/albums.json");
    }, [])

    const getAlbumsData = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            const albumsArray = [];
            // data.map((element, index) => {
            //         albumsArray.push(element)
            // })
            setAlbumsData(data);
        } catch (error) {
            console.log(error);
        }
    }
    console.log('GAAAA'+albumsData);
    return (
        <section className="section">
            <div className="container__store">
            {
                        albumsData.map((element, index) => (
                                <div className="section__featured-album-container" data-key={index}>
                                    <Link to={`/store/${element.id}`} className="link">
                                        <div className="container__album">
                                            <img src={element.image_url} alt="" />
                                            {console.log(element)}
                                        </div>
                                    </Link>
                                </div>
                        ))
                    }
            </div>
        </section>
    );
}
 
export default StorePage;