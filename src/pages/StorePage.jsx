import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Filter from "../components/store/Filter";
import { motion, AnimatePresence } from "framer-motion";

const StorePage = () => {
    // Fetch JSON
    const [albumsData, setAlbumsData] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [activeFilter, setActiveFilter] = useState(0);

    useEffect(() => {
        getAlbumsData("https://raw.githubusercontent.com/mariovasquez/ProyectoFinal_G17/develop/src/json/albums.json");
    }, [])

    const getAlbumsData = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setAlbumsData(data);
            setFiltered(data);
        } catch (error) {
            console.log(error);
        }
    }

    //Filter
    return (
        <section className="section container__store">
            <Filter albums={albumsData} setFiltered={setFiltered} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
            <motion.div layout className="container__store">
                <AnimatePresence>
                    {
                        filtered.map((element, index) => (
                            <motion.div layout animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} className="container__store-album" data-key={index}>
                                <Link to={`/store/${element.id}`} className="link">
                                    {/* <div className="container__album"> */}
                                    <button className="item__album-buy-button store__album-button">Ver artículo</button>
                                    <img src={element.image_url} alt="" className="container__store-album-img" />
                                    {/* </div> */}
                                </Link>
                            </motion.div>
                        ))
                    }
                </AnimatePresence>
            </motion.div>
        </section>
    );
}

export default StorePage;