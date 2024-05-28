import React from "react";
import { GrAttachment, GrMailOption, GrPhone, GrPhoneHorizontal, GrUser } from "react-icons/gr";
import { HiOutlineArrowRight } from "react-icons/hi";

function Form() {
  return (
    <section className="bg-black py-20 text-white flex justify-center">
      <div className="w-[90%] max-w-[1200px] flex flex-col items-center gap-5 bg-secondary p-7 md:p-20">
        <div className="flex items-center flex-col w-full justify-center">
          <p className="text-primary uppercase">CONTACT US</p>
          <h5 className="sub-title" data-aos="fade-up">
            Send Us Message
          </h5>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border-2 border-zinc-800 rounded-btn flex items-center">
            <input required
              type="text" placeholder="Name"
              className="p-3 pr-0 md:px-5 flex-grow bg-transparent placeholder:text-zinc-500 focus:border-none focus:outline-none font-[500]"
            />
            <div className="pr-5  text-xl "><GrUser /></div>
          </div>
          <div className="border-2 border-zinc-800 rounded-btn flex items-center">
            <input required
              type="email" placeholder="Email"
              className="p-3 pr-0 md:px-5 flex-grow bg-transparent placeholder:text-zinc-500 focus:border-none focus:outline-none font-[500]"
            />
            <div className="pr-5 text-xl"><GrAttachment /></div>
          </div>
          <div className="border-2 border-zinc-800 rounded-btn flex items-center">
            <input required
              type="number" placeholder="Phone"
              className="p-3 pr-0 md:px-5 flex-grow bg-transparent placeholder:text-zinc-500 focus:border-none focus:outline-none font-[500]"
            />
            <div className="pr-5 text-xl"><GrPhone /></div>
          </div>
          <div className="border-2 border-zinc-800 rounded-btn flex items-center col-span-1 md:col-span-3">
            <input required
              type="text" placeholder="Subject"
              className="p-3 pr-0 md:px-5 w-full bg-transparent placeholder:text-zinc-500 focus:border-none focus:outline-none font-[500]"
            />
            
          </div>
          <div className="border-2 border-zinc-800 rounded-btn flex items-center col-span-1 md:col-span-3">
            <textarea placeholder="Message" required
              className="h-[300px] p-3 px-5 w-full bg-transparent placeholder:text-zinc-500 focus:border-none focus:outline-none font-[500]"
            />
            
          </div>
          <div  className="btn-pry duration-300 z-10 bg-primary w-fit rounded-3xl col-span-1 md:col-start-2 mx-auto">
            <button type="submit"
              className="p-3 px-8 w-full h-full duration-500 text-white z-20 flex items-center gap-3 uppercase font-[700]"
            >
              Send Us Message <HiOutlineArrowRight />
            </button>
            <div className="btn-before z-0"></div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Form;
