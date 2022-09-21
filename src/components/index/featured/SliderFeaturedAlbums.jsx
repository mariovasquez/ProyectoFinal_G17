import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import SliderAlbum from './SliderAlbum';
const SliderNewReleasesAlbums = ({ albums }) => {

    return (
        <>
            <div className="arrow__left" id="arrowLeft1">
                <i className="bi bi-arrow-left" ></i>
            </div>
            <div className="slider-albumes-wrap">
                <Swiper
                    modules={[Navigation, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={{
                        prevEl: '#arrowLeft1',
                        nextEl: '#arrowRight1',
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 4,
                        }
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {
                        albums.map((element, index) => (
                            <SwiperSlide>
                                <div className="section__featured-album-container" data-key={index}>
                                    <Link to={`/store/${element.id}`} className="link">
                                        <SliderAlbum
                                            id={element.id}
                                            urlImage={element.image_url}
                                            artist={element.artist}
                                            album={element.title}
                                        />
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

            <div className="arrow__right" id="arrowRight1">
                <i className="bi bi-arrow-right"></i>
            </div>
        </>
    );
}

export default SliderNewReleasesAlbums;