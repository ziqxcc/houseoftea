"use client";
import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { GrPhone, GrWhatsapp } from "react-icons/gr";
import { FaBackward, FaForward, FaWhatsapp } from "react-icons/fa";
import { SHOPS } from "./Data";

const CustomSlider = () => {
  
  return (
    <div className="loc-container py-20 bg-black flex justify-center">
      <div className="w-[80%] max-w-[1200px] bg-black">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2,
          }}
          // pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container "
        >
          {SHOPS.map((item: any, index: number) => (
            <div key={index}>{item.Outlets.map((item:any,index:number)=>(
              <SwiperSlide
              key={index}
              className="rounded-xl overflow-hidden loc-SwiperSlide"
            >
              <div className="bg-secondary rounded-xl flex flex-col">
                <div className="overflow-hidden h-48 md:h-72">
                  <iframe
                    src={item.location}
                    width="600"
                    height="450"
                    style={{ border: "0" }}
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="text-white  p-5 px-7 flex flex-col md:flex-row gap-3 md:gap-0 items-center justify-between">
                  <h5 className="flex-grow md:text-2xl text-left leading-10">
                    {item.name} <br />
                    <p className="text-zinc-400 text-sm md:text-base">
                      {item.address}
                    </p>
                  </h5>
                  <a href={`https://wa.me/${item.phone}`} target="_blank" > <h5 className="md:text-2xl p-2 px-4 rounded-xl flex gap-3 items-center duration-300 hover:bg-zinc-800">
                    <FaWhatsapp  className="text-primary text-2xl" /> {item.phone}
                  </h5></a>
                </div>
              </div>
            </SwiperSlide>
            ))}</div>
            
          ))}

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <FaBackward />
            </div>
            <div className="swiper-button-next slider-arrow">
              <FaForward />
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default CustomSlider;
