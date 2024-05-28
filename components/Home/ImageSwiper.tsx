"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

function ImageSwiper() {
  const DATA = [
    "started_img_n3.jpg",
    "started_img_n5.jpg",
    "started_img_n6.jpg",
    "started_img_n3.jpg",
    "started_img_n3.jpg",
    "started_img_n5.jpg",
    "started_img_n6.jpg",
    "started_img_n3.jpg",
  ];
  return (
    <div className="imageSwiper">
      <Swiper
        slidesPerView={"auto"}
        loop={true}
        spaceBetween={0}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {DATA.map((item: any, index: number) => (
          <SwiperSlide>
            <div
              key={index}
              className="bg-black w-[100%] max-w-[400px] h-[400px] overflow-hidden"
              // style={{
              //   background: "url(images/started_img_n3.jpg)",
              //   backgroundPosition: "center",
              //   backgroundRepeat: "no-repeat",
              //   backgroundSize: "cover",
              // }}
            >
              <img
                src={`images/${item}`}
                className="w-full h-full object-cover hover:scale-110 duration-500 hover:rotate-1"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageSwiper;
