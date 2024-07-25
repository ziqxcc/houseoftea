"use client";
import React, { useEffect, useState } from "react";
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
import { findNearestCafe } from "./func";
import { VscLoading } from "react-icons/vsc";

const CustomSlider = () => {
 
  const [nearestCafe, setNearestCafe] = useState<any>(null);

  useEffect(() => {
    const findNearest = async () => {
      const cafe:any = await findNearestCafe(SHOPS);
      setNearestCafe(cafe);
    };

    findNearest();
  }, [SHOPS]);

console.log(nearestCafe);

  return (
    <div className="loc-container py-20 bg-black flex justify-center">
      <div className="w-[80%] max-w-[1200px] bg-black relative md:h-[400px] flex flex-col md:flex-row items-center justify-center">
        <img src="/assets/gps-technology-background-vector copy.jpg" className="absolute top-0 left-0 hidden md:block" />
        <img src="/assets/gps-technology-background-vector ph.jpg" className="absolute top-0 left-0 md:hidden" />
      <div className="text-white z-10 flex ">{nearestCafe ? (
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5 mt-60 md:mt-0 md:translate-x-[150px]">
        <div className="text-white flex flex-col gap-3 md:gap-5 items-center"><p className=" text-2xl md:text-3xl font-semibold text-center w-[70%] md:w-[50%]"><span className="text-primary">{nearestCafe?.name||"Baladiya Market"}</span> is Your Nearest Cafe </p>
        <p className="text-sm text-zinc-400 w-[70%] md:w-[40%] text-center">Finding your nearest cafe with fast service can greatly enhance your experience, <span className="text-white">{nearestCafe?.address || "Behind Lulu Hypermarket, Abu Dhabi"}</span></p>
        <a href={`https://wa.me/${nearestCafe?.phone}`} target="_blank" > <h5 className="md:text-2xl p-2 px-4 rounded-xl flex gap-3 items-center duration-300 bg-zinc-800 hover:bg-zinc-700">
                    <FaWhatsapp  className="text-primary text-2xl" /> {nearestCafe?.phone || 971565083981}
                  </h5></a></div><div className=" bg-blue-500/10 overflow-hidden rounded-2xl md:-translate-x-[120px]"><iframe src={nearestCafe?.location} width="340" height="250" style={{ border: 0 }} loading="lazy" className="hidden md:block"></iframe>
                  <iframe src={nearestCafe?.location} width="300" height="200" style={{ border: 0 }} loading="lazy" className="md:hidden"></iframe></div>
                  </div>  ) : (
        <div className="text-white flex flex-col gap-5 items-center mt-60 md:mt-0 relative"><p className="text-2xl md:text-3xl font-semibold text-center">Find Your Nearest Cafe</p>
        <p className="text-sm text-zinc-400 w-[70%] md:w-[30%] text-center">Finding your nearest cafe with fast service can greatly enhance your experience, whether you're grabbing a quick coffee before work, meeting friends for a chat, or needing a quiet spot to get some work done.</p>
        <button className="p-2 px-10 bg-blue-500 rounded-3xl">Find Now</button><div className="absolute bg-blue-500/10 p-10 rounded-2xl -top-48 left-[50%] w-fit md:left-auto -translate-x-[50%] md:translate-x-0 md:top-10 md:right-36"><VscLoading className="animate-spin text-blue-200 text-7xl"/></div></div>
      )}</div>
        {/* <Swiper
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
  allow="geolocation 'self'; encrypted-media 'self';"
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
        </Swiper> */}
      </div>
    </div>
  );
};

export default CustomSlider;
