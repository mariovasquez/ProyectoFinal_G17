import { useEffect } from "react";
import { MoveIn } from "react-scroll-motion";

const Filter = ({albums, setFiltered, activeFilter, setActiveFilter}) => {
    useEffect(() => {
        if(activeFilter === 0){
            setFiltered(albums);
            return;
        }
        if(activeFilter===1){
            const filtered = albums.filter((album) => album.new == 1);
            setFiltered(filtered);
            return;
        }
        if(activeFilter===2){
            const filtered = albums.filter((album) => album.popular == 1);
            setFiltered(filtered);
            return;
        }
    }, [activeFilter]);
    return (
        <div className="filter-container">
            <button className={activeFilter === 0 ? "filter-button--active" : "filter-button"} onClick={() => setActiveFilter(0)}>Todos</button>
            <button className={activeFilter === 1 ? "filter-button--active" : "filter-button"} onClick={() => setActiveFilter(1)}>Nuevos Lanzamientos</button>
            <button className={activeFilter === 2 ? "filter-button--active" : "filter-button"} onClick={() => setActiveFilter(2)}>Más populares</button>
        </div>
    );
}

export default Filter;