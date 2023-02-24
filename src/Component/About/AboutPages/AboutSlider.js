import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./AboutPages.css";
import { Pagination, Navigation, Autoplay } from "swiper";


export default function AboutSlider(props) {

  const swiperSlide = props.sliderImages.map((sliderImage, index) => (
    <SwiperSlide key={`swiper_slide__${index}`}>
      <img src={sliderImage.image} alt={sliderImage.name} loading="lazy"/>
    </SwiperSlide>
  ));

  return (
    <div className="about_slider_container">
      <Swiper
        slidesPerView={8}
        speed={3000}
        spaceBetween={30}
        slidesPerGroup={1}
        slidesPerGroupSkip={2}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          580: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 30,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
      {swiperSlide}
      </Swiper>
    </div>
  );
}
