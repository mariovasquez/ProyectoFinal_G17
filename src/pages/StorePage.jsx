import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Filter from "../components/store/Filter";
import { AnimatePresence, motion } from "framer-motion";
import Album from "../components/store/Album";
import useAlbums from "../hook/useAlbums";

const StorePage = () => {
    const [activeFilter, setActiveFilter] = useState(0);
    const {albums, getAlbumsData, filtered, setFiltered} = useAlbums();

    useEffect(() => {
        getAlbumsData();
    }, [])

    return (
        <section className="section container__store">
            <Filter albums={albums} setFiltered={setFiltered} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
            <div className="container__store">
                <AnimatePresence>
                    {
                        filtered.map((element, index) => (
                            <motion.div
                                className="container__store-album"
                                key={element.id}
                                layout
                                initial={{ opacity: 0, scale: 0.7 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.7 }}
                                transition={{ duration: 0.4 }}
                            >
                                <Link to={`/store/${element.id}`} className="link">
                                    <button className="item__album-buy-button store__album-button">Ver artículo</button>
                                    <img src={element.image_url} alt="" className="container__store-album-img" />
                                </Link>
                            </motion.div>
                        ))
                    }
                </AnimatePresence>
            </div>
        </section>
    );
}

export default StorePage;