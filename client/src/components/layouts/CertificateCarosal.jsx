import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination } from "swiper/modules";
export default function CertificateCarosal() {
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
        modules={[EffectCube, Pagination]}
        className="mySwiper w-56 h-full"
      >
        <SwiperSlide className="flex flex-col items-center justify-center bg-transparent">
          <img
            src="https://image.made-in-china.com/44f3j00YeQbUMZyLqkJ/2c-Fire-Rated-Control-Cables-for-Austrialian-Fire-Alarm-and-Ewis-System.webp"
            alt=""
            className="p-1 h-full"
          />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center bg-transparent">
          <img
            src="https://www.actechbooks.com/media/actech/images/infowerks-cert-sample.jpg"
            alt=""
            className="p-1 h-full"
          />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center bg-transparent">
          <img
            src="https://img.yumpu.com/55657894/1/500x640/easa20tc20im20a202057020-tcds-cs100.jpg"
            alt=""
            className="p-1 h-full"
          />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center bg-transparent">
          <img
            src="https://image.made-in-china.com/44f3j00YeQbUMZyLqkJ/2c-Fire-Rated-Control-Cables-for-Austrialian-Fire-Alarm-and-Ewis-System.webp"
            alt=""
            className="p-1 h-full"
          />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center bg-transparent">
          <img
            src="https://www.actechbooks.com/media/actech/images/infowerks-cert-sample.jpg"
            alt=""
            className="p-1 h-full"
          />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center bg-transparent">
          <img
            src="https://img.yumpu.com/55657894/1/500x640/easa20tc20im20a202057020-tcds-cs100.jpg"
            alt=""
            className="p-1 h-full"
          />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center bg-transparent">
          <img
            src="https://image.made-in-china.com/44f3j00YeQbUMZyLqkJ/2c-Fire-Rated-Control-Cables-for-Austrialian-Fire-Alarm-and-Ewis-System.webp"
            alt=""
            className="p-1 h-full"
          />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center bg-transparent">
          <img
            src="https://www.actechbooks.com/media/actech/images/infowerks-cert-sample.jpg"
            alt=""
            className="p-1 h-full"
          />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center bg-transparent">
          <img
            src="https://img.yumpu.com/55657894/1/500x640/easa20tc20im20a202057020-tcds-cs100.jpg"
            alt=""
            className="p-1 h-full"
          />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center bg-transparent">
          <img
            src="https://image.made-in-china.com/44f3j00YeQbUMZyLqkJ/2c-Fire-Rated-Control-Cables-for-Austrialian-Fire-Alarm-and-Ewis-System.webp"
            alt=""
            className="p-1 h-full"
          />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center bg-transparent">
          <img
            src="https://www.actechbooks.com/media/actech/images/infowerks-cert-sample.jpg"
            alt=""
            className="p-1 h-full"
          />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center bg-transparent">
          <img
            src="https://img.yumpu.com/55657894/1/500x640/easa20tc20im20a202057020-tcds-cs100.jpg"
            alt=""
            className="p-1 h-full"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
