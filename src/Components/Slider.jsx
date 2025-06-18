import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import {Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import "swiper/css/pagination";


const Slider = () => {
  return (
    <div className="">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >

        <SwiperSlide className="">
          <img src="/assets/Hero Slider 2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/Hero Slider 1.png" alt="" />
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Slider;
