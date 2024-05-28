import React from "react";

function Service() {
  const DATA = [
    {
      icon: "service_icon1.png",
      spec: "Birthday Cakes",
      dis: "Sed ut perspiciatis unde",
    },
    {
      icon: "service_icon2.png",
      spec: "Fresh Foods",
      dis: "Sed ut perspiciatis unde",
    },
    {
      icon: "service_icon3.png",
      spec: "Skills Chefs",
      dis: "Sed ut perspiciatis unde",
    },
    {
      icon: "service_icon4.png",
      spec: "Organic Juice",
      dis: "Sed ut perspiciatis unde",
    },
  ];
  return (
    <section className=" py-24 text-white flex justify-center bg-secondary">
      <div className="w-[80%] max-w-[1200px] grid grid-cols-1 md:grid-cols-4 gap-5">
        {DATA.map((item:any,index:number)=>(
          <div key={index} className="bg-black p-10 flex flex-col items-center justify-center rounded-xl ">
          <div className="w-36 h-36 bg-secondary rounded-full flex items-center justify-center group hover-bg-primary duration-300 px-11">
            <img
              src={`images/${item.icon}`}
              alt=""
              className="duration-200 group-hover:brightness-0 group-hover:invert"
            />
          </div>
          <h5 className="text-2xl mt-6 mb-1">{item.spec}</h5>
          <p className="text-zinc-500">{item.dis}</p>
        </div>  
        ))}
        
      </div>
    </section>
  );
}

export default Service;
