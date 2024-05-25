import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";

function AboutSec() {
  
  return (
    <section className="bg-black py-20 text-white flex justify-center group">
      <div className="w-[90%] max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center">
          <p className="text-primary uppercase">Our Story</p>
          <h5 className="sub-title" data-aos="fade-up">
            The Threads We Weave
          </h5>
          <p className="text-zinc-400" data-aos="fade-up" data-aos-delay="100">
            Welcome to House of Tea Cafeteria! We're your spot for yummy bites
            and tasty teas. With almost forty-five branches in Abu Dhabi and one
            each in Dubai and Sharjah, we're here to make your snack time
            awesome. Owned by Mr. Majed Saad Abdullah Ali Almenhali and Rashid
            Thaniyullathil, our menu is all about quick and tasty. Whether
            you're picking up food or ordering from your car, we've got you
            covered. Join us for simple and delicious treats. House of Tea
            Cafeteria is about bringing joy to your taste buds, whether you're
            in Abu Dhabi, Dubai, or Sharjah. Come enjoy good food with us,
            wherever you are!
          </p>
          <div data-aos="fade-up" className="btn-pry duration-300 z-10 bg-primary w-fit mt-8 rounded-3xl ">
            <a
              href=""
              className="p-3 px-10 w-full h-full duration-500 text-white  z-20 flex items-center gap-3"
            >
              Explore <HiOutlineArrowRight />
            </a>
            <div className="btn-before z-0"></div>
          </div>
        </div>
        <div className="group-hover:translate-x-1 duration-500">
          <img src="images/about_img.png" className="w-[600px]" />
        </div>
      </div>
    </section>
  );
}

export default AboutSec;
