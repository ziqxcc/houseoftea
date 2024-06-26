import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { GrHelpOption, GrLocation, GrMailOption, GrMapLocation, GrMicrophone, GrPhone, GrPhoneHorizontal, GrSupport, GrWhatsapp } from "react-icons/gr";

function Details() {
  const DATA = [
    {link:"https://maps.app.goo.gl/3sSfyGYBQb4SmWC28",icon:<GrMapLocation/>,Title:"Main Location",description:"Abudhabi, UAE"},
    {link:"mailto:info@houseoftea.ae",icon:<GrMailOption/>,Title:"Email Address",description:"info@houseoftea.ae"},
    {link:"https://wa.me/+971565221883?text='hi'",icon:<BsWhatsapp/>,Title:"Whatsapp",description:"+971 56 522 1883"},
    {link:"tel:025831979",icon:<GrPhone/>,Title:"Phone Number",description:"025831979"},
  ]
  return (
    <section className="bg-black py-24 text-white flex justify-center">
      <div className="w-[80%] max-w-[1200px] grid grid-cols-1 md:grid-cols-4 gap-10">
        {DATA.map((item:any,index:number)=>(
          <a href={item.link} target="_blank" key={index} className="hover:scale-105 duration-300 bg-secondary p-10 rounded-xl flex  justify-center flex-col items-center gap-8 text-white">
          <div className="text-primary text-6xl mt-3">{item.icon}</div>
          <div>
            <h5 className="text-2xl ">{item.Title}</h5>
            <p className="mt-2 text-center text-primary">{item.description}</p>
          </div>
        </a>
        ))}
      </div>
    </section>
  );
}

export default Details;
