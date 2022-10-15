import { motion } from "framer-motion";

const Album = ({ album }) => {
    return (
        <motion.div
            layout
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            key={album.id}
            className="container__store-album"
        >
            <button className="item__album-buy-button store__album-button">Ver artículo</button>
            <img src={album.image_url} alt="" className="container__store-album-img" />
        </motion.div>
    );
}

export default Album;