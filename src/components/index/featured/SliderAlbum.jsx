const SliderAlbum = ({ id, urlImage, artist, album }) => {
    return (
        <>
            <a href="#" className="section__featured-album-link">
                <img id={id}
                    src={urlImage}
                    alt="" width="175" height="175" className="section__featured-album-img" />
                <h3 className="section__featured-album-artist">{artist}</h3>
                <p className="section__featured-album-title">{album}</p>
            </a>
            <a href="#" className="button button-text button-text--buy" id={id}>Comprar</a>
        </>
    );
}

export default SliderAlbum;