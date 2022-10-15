import { useContext } from "react";
import { AlbumsContext } from "../context/AlbumsContext";

const useAlbums = () => {
    const context = useContext(AlbumsContext);
    return(context);
};

export default useAlbums;