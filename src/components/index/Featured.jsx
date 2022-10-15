import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useRef, useState } from 'react';
import SliderFeaturedAlbums from './featured/SliderFeaturedAlbums';
import useAlbums from '../../hook/useAlbums';
const Featured = () => {
    const newReleases = useRef();
    const popular = useRef();
    const newReleasesAlbums = useRef();
    const popularAlbums = useRef();

    const newReleasesClick = () => {
        newReleases.current.classList.add('section__featured-title--selected');
        popular.current.classList.remove('section__featured-title--selected');
        newReleasesAlbums.current.classList.remove('container--featured-albums-disabled');
        popularAlbums.current.classList.add('container--featured-albums-disabled');
    };
    const popularClick = () => {
        newReleases.current.classList.remove('section__featured-title--selected');
        popular.current.classList.add('section__featured-title--selected');
        newReleasesAlbums.current.classList.add('container--featured-albums-disabled');
        popularAlbums.current.classList.remove('container--featured-albums-disabled');
    };

    const {getAlbumsData, newReleasesAlbumsData, popularAlbumsData} = useAlbums();
    useEffect(() => {
        getAlbumsData();
    }, [])

    return (
        <section className="section__featured">
            <div className="container container--featured">
                <div className="section__featured-titles">
                    <h2 className="section__featured-title section__featured-title--selected" id="newReleases" ref={newReleases} onClick={newReleasesClick}>Nuevos
                        Lanzamientos</h2>
                    <h2 className="section__featured-title" id="popular" ref={popular} onClick={popularClick}>Tendencias</h2>
                </div>
                <div className="container--featured-albums" id="newReleasesAlbums" ref={newReleasesAlbums}>
                    <SliderFeaturedAlbums
                        albums={newReleasesAlbumsData}
                    />
                </div>
                <div className="container--featured-albums container--featured-albums-disabled" id="popularAlbums" ref={popularAlbums}>
                    <SliderFeaturedAlbums
                        albums={popularAlbumsData}
                    />
                </div>

            </div>
        </section>
    );
}

export default Featured;