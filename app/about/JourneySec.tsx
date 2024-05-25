import React from "react";
import { BsShopWindow } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { GrAppsRounded, GrAttraction, GrProjects, GrTty, GrUser, GrValidate } from "react-icons/gr";
import { IoPersonOutline } from "react-icons/io5";

function JourneySec() {
  const SPEC = [
    {
      icon: <GrAttraction />,
      count: "38",
      spec: "Branches",
      dis: "Sed ut perspiciatis unde",
    },{
      icon: <GrUser />,
      count: "999",
      spec: "Our Staffs",
      dis: "Sed ut perspiciatis unde",
    },{
      icon: <GrAppsRounded   />,
      count: "299",
      spec: "Our Menu",
      dis: "Sed ut perspiciatis unde",
    },{
      icon: <GrValidate  />,
      count: "99M",
      spec: "Happy Customers",
      dis: "Sed ut perspiciatis unde",
    },
  ];
  return (
    <section className=" py-20 text-white flex justify-center bg-black">
      <div className="w-[90%] max-w-[1200px] flex flex-col items-center">
        <p className="text-primary uppercase">Our Journey</p>
        <h5 className="sub-title" data-aos="fade-up">
          Our Successful Journey
        </h5>
        <div className="bg-black grid grid-cols-2 md:grid-cols-4 p-10 pt-16 w-full gap-5" data-aos="fade-up">
          {SPEC.map((item:any,index:number)=>(<div key={index} className="group">
            <div className="bg-darkgray rounded-sm group-hover:outline outline-1 outline-primary-50 h-20 w-20 duration-300 outline-offset-4 flex items-center justify-center text-primary text-[40px]">
              {item.icon}
            </div>
            <h1 className="text-[60px] text-primary mt-3">{item.count}+</h1>
            <h4 className="text-[24px]">{item.spec}</h4>
            <p className="text-zinc-500">{item.dis}</p>
          </div>))}
          
          
        </div>
      </div>
    </section>
  );
}

export default JourneySec;
