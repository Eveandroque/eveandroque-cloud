import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import {Navigation, Pagination, Keyboard} from 'swiper/modules';
import type {PropertyImage} from './types';


//import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ImageSwiperProps {
    imageUrls: PropertyImage[];
    swiperIndex: number;
    activeSlide: number;
    setActiveSlide: (index: number) => void;
}

function SlideNextButton() {
    const swiper = useSwiper();

    return (
        <button onClick={() => swiper.slideNext()}>Slide to the next slide</button>
    );
}

function SlidePrevButton() {
    const swiper = useSwiper();

    return (
        <button onClick={() => swiper.slidePrev()}>Slide to the previous slide</button>
    );
}

export default function ImageSwiper({imageUrls, swiperIndex, activeSlide, setActiveSlide}: ImageSwiperProps) {
    const swiper = useSwiper();
    return (
        <>
            <Swiper
                modules={[Navigation, Keyboard, Pagination]}
                navigation
                keyboard={{enabled: true}}
                pagination={{type: 'fraction', el: '.pg-lightbox__counter'}}
                initialSlide={swiperIndex}
                slidesPerView={1}
                spaceBetween={0}
                onSlideChange={swiper => setActiveSlide(swiper.activeIndex)}
                className="pg-lightbox__swiper"
            >
                {imageUrls.map((img, i) => (
                    <SwiperSlide key={i} className="pg-lightbox__slide">
                        <img src={img.url} alt={img.name} draggable={false}/>
                        {img.tag && (
                            <span className="pg-lightbox__caption">{img.tag}</span>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </>

    )
}