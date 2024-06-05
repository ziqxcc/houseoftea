import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { GrHelpOption, GrLocation, GrMailOption, GrMapLocation, GrMicrophone, GrPhone, GrPhoneHorizontal, GrSupport, GrWhatsapp } from "react-icons/gr";

function Details() {
  return (
    <section className="bg-black py-24 text-white flex justify-center">
      <div className="w-[80%] max-w-[1200px] grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="bg-secondary p-10 rounded-xl flex  justify-center flex-col items-center gap-8 text-white">
          <GrMapLocation className="text-primary text-6xl mt-3" />
          <div>
            <h5 className="text-2xl ">Main Location</h5>
            <p className="mt-2 text-center text-primary">Abudhabi, UAE</p>
          </div>
        </div>
        <div className="bg-secondary p-10 rounded-xl flex justify-center flex-col items-center gap-8 text-white">
          <GrMailOption className="text-primary text-6xl mt-3" />
          <div>
            <h5 className="text-2xl ">Email Address</h5>
            <p className="mt-2 text-center text-primary">info@houseoftea.ae</p>
          </div>
        </div>
        <div className="bg-secondary p-10 rounded-xl flex justify-center flex-col items-center gap-8 text-white">
          <BsWhatsapp className="text-primary text-6xl mt-3" />
          <div>
            <h5 className="text-2xl text-center">Whatsapp</h5>
            <p className="mt-2 text-center text-primary">+971 56 522 1883

</p>
          </div>
        </div>
        <div className="bg-secondary p-10 rounded-xl justify-center flex flex-col items-center gap-8 text-white">
          <GrPhone className="text-primary text-6xl mt-3" />
          <div>
            <h5 className="text-2xl ">Phone Number</h5>
            <p className="mt-2 text-center text-primary">025831979</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
