import React, { useEffect } from "react";
import { SHOPS } from "./Data";
import { GrPhone } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import { findNearestShop, getUserLocation, Shop } from "./demoNearestShop";

function Outlets() {

  return (
    <>
      {SHOPS.map((item: any, index: number) => (
        <section key={index}
          className={`${
            index % 2 === 0 ? "bg-black" : "bg-secondary"
          } py-20 text-white flex justify-center group`}
        >
          <div className="w-[80%] max-w-[1200px]">
            <div className="flex flex-col justify-center items-center w-full">
              <p className="text-primary uppercase">Outlets In</p>
              <h5 className="sub-title" data-aos="fade-up">
                {item.zone}
              </h5>
            </div>
            <div className="w-full grid gap-3">
                {item.Outlets.map((item:any,index1:number)=>(
                    <div key={index} className={`collapse collapse-arrow ${
            index % 2 === 1 ? "bg-black" : "bg-secondary"
          }`}>
                <input type="radio" name="my-accordion-2" defaultChecked={index1===0} />
                <div className="collapse-title text-xl font-medium flex items-center gap-3">
                  {item.name} <p className="text-zinc-400 text-lg">{item.address}</p>
                </div>
                <div className="collapse-content">
                <div className="flex flex-col">
                <div className="overflow-hidden rounded-xl h-56 md:h-72">
                  <iframe
                    src={item.location}
                    width="100%"
                    height="100%"
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
                 <a href={`https://wa.me/${item.phone}`} target="_blank"> <h5 className="md:text-2xl p-2 px-4 rounded-xl flex gap-3 items-center duration-300 hover:bg-zinc-800">
                    <FaWhatsapp  className="text-primary text-2xl" /> {item.phone}
                  </h5></a>
                </div>
              </div>
                </div>
              </div>
                ))}
              
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

export default Outlets;
