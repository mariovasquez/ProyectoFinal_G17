const { createContext, useState, useEffect } = require("react");

export const AlbumsContext = createContext();

export const AlbumsProvider = ({ children }) => {
    const [albums, setAlbums] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [newReleasesAlbumsData, setNewReleasesAlbumsData] = useState([]);
    const [popularAlbumsData, setPopularAlbumsData] = useState([]);
    const [album, setAlbum] = useState([]);

    // Fetch JSON
    useEffect(() => {
        getAlbumsData(
            "https://raw.githubusercontent.com/mariovasquez/ProyectoFinal_G17/develop/src/json/albums.json"
        );
    }, []);

    const getAlbumsData = async () => {
        try {
            const response = await fetch("https://raw.githubusercontent.com/mariovasquez/ProyectoFinal_G17/develop/src/json/albums.json");
            const data = await response.json();
            setAlbums(data);
            setFiltered(data);
            const newReleasesArray = [];
            const popularArray = [];
            data.map((element, index) => {
                if (element.new == 1) {
                    newReleasesArray.push(element)
                }
                if (element.popular == 1) {
                    popularArray.push(element)
                }
            })
            setNewReleasesAlbumsData(newReleasesArray);
            setPopularAlbumsData(popularArray);
        } catch (error) {
            console.log(error);
        }
    };

    const getAlbumData = async (id) => {
        try {
            const response = await fetch("https://raw.githubusercontent.com/mariovasquez/ProyectoFinal_G17/develop/src/json/albums.json");
            const data = await response.json();
            data.map((element, index) => {
                if (element.id == id) {
                    setAlbum(element);
                }
            })
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AlbumsContext.Provider
            value={{
                albums,
                getAlbumsData,
                filtered,
                setFiltered,
                newReleasesAlbumsData,
                popularAlbumsData,
                album,
                getAlbumData
            }}
        >
            {children}
        </AlbumsContext.Provider>
    );
};
