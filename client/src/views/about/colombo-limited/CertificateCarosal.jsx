import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import {
  CarouselImag1,
  CarouselImag2,
  CarouselImag3,
} from "../../../assets/EWISColomboLimited";

// import required modules
import { Autoplay, EffectCube, Pagination } from "swiper/modules";
export default function CertificateCarosal() {
  const IMAGES = [CarouselImag1, CarouselImag2, CarouselImag3];

  return (
    <>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={false}
        modules={[EffectCube, Pagination, Autoplay]}
        className="mySwiper w-56 h-full  "
        autoplay={{
          delay: 1700,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {IMAGES.map((image, i) => (
          <SwiperSlide
            key={i}
            className="flex flex-col items-center justify-center bg-transparent  h-full"
          >
            <img src={image} alt="" className="p-1 h-80" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
