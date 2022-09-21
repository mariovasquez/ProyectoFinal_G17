import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import heroSliderImg1 from '../../assets/img/Baterista_Slider.jpg';
import heroSliderImg2 from '../../assets/img/Artik_Monkeys_Slider.jpg';
import heroSliderImg3 from '../../assets/img/Imagine_Dragon_Slider.jpg';
const Hero = () => {
    return (
        <section className="section section--slider">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    slidesPerView={1}
                    navigation={{
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next',
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    loop
                    autoHeight={{
                        observer: true,
                        observeParents: true,
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    id="heroSlider"
                >
                    <SwiperSlide>
                        <img src={heroSliderImg1} className="d-block w-100 vh-100" alt="baterista"/>
                        <div className="carousel-caption d-flex flex-column justify-content-center h-100">
                            <h5 className="slider__title">POST MALONE</h5>
                            <h5 className="slider__title">TWELVE CARAT TOOTHACHE</h5>
                            <div className="slider__buttons">
                                <button className="slider__button-text">COMPRAR</button>
                                <button className="slider__button-icon"><i className="bi bi-star slider__icon"></i></button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={heroSliderImg2} className="d-block w-100 vh-100" alt="artik_monkeys" />
                        <div className="carousel-caption d-flex flex-column justify-content-center h-100 ">
                            <h5 className="slider__title">NUEVO ALBUM</h5>
                            <h5 className="slider__title">ARTIC MONKEYS</h5>
                            <div className="slider__buttons">
                                <button className="slider__button-text">COMPRAR</button>
                                <button className="slider__button-icon"><i className="bi bi-star slider__icon"></i></button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={heroSliderImg3} className="d-block w-100 vh-100 slider__filter"
                            alt="imagine_dragons" />
                        <div className="carousel-caption d-flex flex-column justify-content-center h-100 ">
                            <h5 className="slider__title">IMAGINE DRAGONS</h5>
                            <h5 className="slider__title">ORIGINS</h5>
                            <div className="slider__buttons">
                                <button className="slider__button-text">COMPRAR</button>
                                <button className="slider__button-icon"><i className="bi bi-star slider__icon"></i></button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="swiper-button-prev slider-hero-prev"></div>
                    <div className="swiper-button-next slider-hero-next"></div>
                </Swiper>
            </section>
    );
}
export default Hero;