import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ItemPage = () => {

    const {id} = useParams();

    const [album, setAlbum] = useState([]);

    useEffect(() => {
        getAlbumsData("https://raw.githubusercontent.com/mariovasquez/ProyectoFinal_G17/develop/src/json/albums.json");
    }, [])

    const getAlbumsData = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            data.newReleases.map((element, index)=>{
                if(element.id == id){
                    setAlbum(element);
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <h2>ID: {album.id}</h2>
    );
}
 
export default ItemPage;