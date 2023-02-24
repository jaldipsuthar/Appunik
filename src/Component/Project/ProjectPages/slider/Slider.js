import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.css";
import { Autoplay, Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

const NewSlider = (props) => {
  const isEven = props.isEven;
  const parentIndex = props.parentIndex;

  const swiperSlide = props.sliderImages.map((sliderImage, index) => (
    <SwiperSlide key={`swiper_slide_${isEven}_${index}`}>
      <img src={sliderImage.image} alt={sliderImage.name} loading="lazy"/>
    </SwiperSlide>
  ));

  return (
    <div className="slider_wrapper">
      <Swiper
        key={`swiper_${{ parentIndex }}`}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        speed={3500}
        rewind={true}
        navigation={true}
        slidesPerView={2}
        centeredSlides={false}
        slidesPerGroupSkip={100}
        freeMode={true}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        spaceBetween={25}
       
        scrollbar={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Keyboard, Scrollbar, Navigation, Pagination]}
        className={isEven ? "swiper-align" : ""}
      >
        {swiperSlide}
      </Swiper>
    </div>
  );
};

export default NewSlider;
