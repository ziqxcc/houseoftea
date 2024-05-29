"use client";
import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { GrFastForward, GrPhone } from "react-icons/gr";
import { FaBackward, FaForward } from "react-icons/fa";

const CustomSlider = () => {
  const SHOPS = [
    {
      name: "New Shahama",
      address: "Near FAB, Abu Dhabi",
      phone: "971565481482",
      location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.853010884102!2d54.6758592!3d24.5251681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e4ff3c6b7cac1%3A0x279d5d9fd6e45e25!2sHouse%20of%20Tea%20Cafeteria!5e0!3m2!1sen!2sin!4v1717011629178!5m2!1sen!2sin",
    },
    {
      name: "Erth Super Market",
      address: "Khalifa City - SE-40 - Abu Dhabi",
      phone: "971503699040",
      location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d908.1673512575801!2d54.6006151!3d24.4275502!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e47a19e14a16f%3A0x6803c401d71b51cb!2zSG91c2Ugb2YgVGVhIENhZmV0ZXJpYSAtINmD2KfZgdiq2YrYsdmK2Kcg2YrZitiqINin2YTYtNin2Yo!5e0!3m2!1sen!2sin!4v1717011686524!5m2!1sen!2sin",
    },
    {
      name: "Al hili",
      address: "Al Ain,Abu Dhabi",
      phone: "971549941663",
      location:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d227.33206968849893!2d55.7713236!3d24.2657917!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8ab412fc13d387%3A0xc9f0f4ef2bccb25e!2zMzUg2LTYp9ix2Lkg2KLYq9mO2KfYsSDZh9mQ2YrZhNmQ2YogLSBIaWxpIC0gQWJ1IERoYWJpIC0gVW5pdGVkIEFyYWIgRW1pcmF0ZXM!5e0!3m2!1sen!2sin!4v1717011802699!5m2!1sen!2sin",
    },{
      name: "Al Aamerah",
      address: "al yahar, Al Ain",
      phone: "971549941660",
      location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14554.167360754576!2d55.5502659!3d24.2228207!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8aabb88a92aba7%3A0x5dcc7db2c02f7465!2sHouse%20of%20Tea%20Cafeteria!5e0!3m2!1sen!2sin!4v1717011847874!5m2!1sen!2sin",
    },
    {
      name: "Al Ashrij",
      address: "Al ain",
      phone: "971561992082",
      location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29113.816466259974!2d55.6423973!3d24.1988261!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8aaf44f892459b%3A0xa4faabcc96a16bf0!2zSG91c2Ugb2YgdGVhIGNhZmV0ZXJpYSDZg9in2YHYqtmK2LHZitinINio2YrYqiDYp9mE2LTYp9mK!5e0!3m2!1sen!2sin!4v1717011877045!5m2!1sen!2sin",
    },
    {
      name: "ADNOC Al Faqqa",
      address: "Dubai-Al Ain Road",
      phone: "971545661018",
      location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d226.55354964458894!2d55.6313495!3d24.6974491!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef567b30df3841d%3A0xe5acbd6c4a3a3c17!2sHouse%20of%20Tea%20Restaurant!5e0!3m2!1sen!2sin!4v1717011901266!5m2!1sen!2sin",
    },

    {
      name: "Adnoc Service Station",
      address: "Remah - 947 Al Ain Rd - Al Khaznah - Abu Dhabi",
      phone: "971504608918",
      location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3639.7832164343836!2d55.1812197!3d24.1793344!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5fe10aabb66fa5%3A0xb161a80ce05b5c9f!2sHouse%20of%20Tea!5e0!3m2!1sen!2sin!4v1717011924430!5m2!1sen!2sin",
    },
    {
      name: "Al Jazzat",
      address: "Al Riqa Suburb - Sharjah",
      phone: "971561991716",
      location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14420.02352178769!2d55.4279724!3d25.3711194!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5944775fd11d%3A0xb149f3cd388af73!2zSG91c2Ugb2YgVGVhIENhZmV0ZXJpYSAtINio2YrYqiDYp9mE2LTYp9mK!5e0!3m2!1sen!2sin!4v1717011951251!5m2!1sen!2sin",
    },
    {
      name: "Nasma Square",
      address: "Al Suyoh Suburb - Al Riqaibah - Sharjah",
      phone: "971561991856",
      location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3608.8617746724726!2d55.5911415!3d25.2415802!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef58db96b366f41%3A0x9f9a7d6c88904ae9!2zSG91c2Ugb2YgVGVhIENhZmV0ZXJpYSAtINio2YrYqiDYp9mE2LTYp9mK!5e0!3m2!1sen!2sin!4v1717011974794!5m2!1sen!2sin",
    },{
      name: "ENOC Oud Metha",
      address: "Abu Dhabi-Al Ain Rd,Dubai",
      phone: "971563691058",
      location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.5110613435204!2d55.3136145!3d25.219706199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f430cbf8260eb%3A0x8d0dbacfde005291!2zSG91c2Ugb2YgVGVhIENhZmV0ZXJpYSAtINio2YrYqiDYp9mE2LTYp9mK!5e0!3m2!1sen!2sin!4v1717012000363!5m2!1sen!2sin",
    },
    
  ];

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
            <SwiperSlide key={index} className="rounded-xl overflow-hidden loc-SwiperSlide">
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
                  <h5 className="md:text-2xl flex gap-3 items-center mr-2">
                    <GrPhone className="text-primary text-2xl" /> {item.phone}
                  </h5>
                </div>
              </div>
            </SwiperSlide>
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
