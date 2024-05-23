import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";

function SpecialSec() {
    const SUB_CONT = [
        {
          icon: "icon1.png",
          content:
            "Our menus are designed to reflect the diverse nature of our employees, who are experienced professionals from various parts of the world",
        },{
          icon: "icon2.png",
          content:
            "Our cafes provide a calm environment that ensures complete tranquility, and our staff is always on hand to respond to customer inquiries",
        }
      ];
  return (
    <section className="bg-zinc-900 py-20 text-white flex justify-center">
      <div className="w-[90%] max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
          <img src="images/about_img.png" className="w-[600px]" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-primary uppercase">WHY CHOOSE US</p>
          <h5 className="sub-title" data-aos="fade-up">
            Famous Karak Tea &<br /> Delectable Snacks
          </h5>
          <p className="text-zinc-400" data-aos="fade-up" data-aos-delay="100">
            Sed ut perspiciatis unde omnis iste natus error voluptate
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae
            abillo inventore veritatis
          </p>
          
          <div className="mt-8 grid gap-8">
            {
              SUB_CONT.map((item:any,index:number)=>(
                <div data-aos="fade-left" data-aos-delay={index*200} key={index} className="flex items-center gap-5"><img src={`icons/${item.icon}`} alt="icon" className="h-16"/>
                <p className="text-zinc-400 w-[70%]">{item.content}</p></div>
              ))
            }
          </div>
          <div data-aos="fade-up" className="btn-pry duration-300 z-10 bg-primary w-fit mt-8 rounded-3xl group">
            <a
              href=""
              className="p-2 px-10 w-full h-full duration-500 text-white group-hover:text-black z-20 flex items-center gap-3"
            >
              Explore <HiOutlineArrowRight />
            </a>
            <div className="btn-before z-0"></div>
          </div>
        </div>
       
      </div>
    </section>
  );
}

export default SpecialSec;
