import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";

function Booking() {
  return (
    <div className="w-full flex justify-center h-[300px] md:h-[250px] relative"
    style={{
        background: `url(images/shop_front.jpg)`,
        backgroundPosition: "center",backgroundAttachment:"fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}> <div className="bg-black opacity-60 w-full h-full absolute top-0 right-0"></div>
      <div className="flex flex-col md:flex-row items-left md:items-center justify-center md:justify-between w-[80%] max-w-[1200px] gap-7 text-primary py-[8px] z-10">
        <div><p className="text-primary uppercase">NEED A TABLE ON HOUSE of tea</p>
        <h5 className="text-white text-[28px] md:text-[42px]">Booking Table For Your & Family Members</h5></div>
        <div data-aos="fade-up" className="btn-pry duration-300 z-10 bg-primary w-fit rounded-xl ">
            <a
              href=""
              className="py-3 px-5 md:py-4 md:px-10 w-full h-full duration-500 text-white  z-20 flex items-center gap-3 uppercase font-semibold"
            >
              Book Table <HiOutlineArrowRight />
            </a>
            <div className="btn-before z-0"></div>
          </div>
      </div>
    </div>
  );
}

export default Booking;
