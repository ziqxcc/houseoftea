import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  GrAppsRounded,
  GrCaretRightFill,
  GrLocation,
  GrMail,
  GrMailOption,
  GrPhone,
} from "react-icons/gr";
import { HiOutlineArrowRight } from "react-icons/hi";
import { RiCustomerServiceFill, RiInformation2Line } from "react-icons/ri";
import { TbHome } from "react-icons/tb";

function Footer() {
  const NAV_ITEM = [
    {
      name: "Home",
      link: "/",
      icon: <TbHome />,
    },
    {
      name: "About",
      link: "/about",
      icon: <RiInformation2Line />,
    },
    {
      name: "Location",
      link: "/location",
      icon: <GrLocation />,
    },
    {
      name: "Menu",
      link: "/menu",
      icon: <GrAppsRounded />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <RiCustomerServiceFill />,
    },
  ];
  return (
    <div className="bg-black flex flex-col items-center w-full">
      <section className="w-[80%] max-w-[1200px] grid grid-cols-1 md:grid-cols-9 gap-5 py-20 text-white border-b border-zinc-800">
        <div className="col-span-3 flex flex-col items-center md:grid">
          <img src="assets/logo.png" className="h-24" />
          <p className="text-zinc-500 text-sm mt-7 w-60">
            Our karak tea is very famous for its taste and flavour and we also
            provides a varities of teas and coffees along with a number of snack
            items including sandwiches in Parathas and burgers.
          </p>
        </div>
        <div className="col-span-2">
          <h5 className="text-2xl mb-5">Useful Links</h5>
          <div className="flex flex-col gap-2 ">
            {NAV_ITEM.map((item: any, index: number) => (
              <a
                href={item.link}
                key={index}
                className="flex gap-3 text-primary text-lg items-center duration-300 group hover:ml-1"
              >
                {item.icon}
                <p className="text-zinc-300 duration-300 group-hover:text-white">
                  {item.name}
                </p>
              </a>
            ))}
          </div>
        </div>
        <div className="col-span-2">
          <h5 className="text-2xl mb-5">Contact Us</h5>
          <div className="flex gap-4 mb-5 items-center">
            <p className="text-primary text-3xl">
              <GrLocation />
            </p>
            <div>
              <p className="text-primary">Location :</p>
              <p>Abudhabi, UAE</p>
            </div>
          </div>

          <div className="flex gap-4 mb-5 items-center">
            <p className="text-primary text-3xl">
              <GrMailOption className="text-2xl" />
            </p>
            <div>
              <p className="text-primary">Email Address :</p>
              <p>info@houseoftea.ae</p>
            </div>
          </div>

          <div className="flex gap-4 mb-5 items-center">
            <p className="text-primary text-3xl">
              <GrPhone />
            </p>
            <div>
              <p className="text-primary">Phone Number :</p>
              <p>025831979</p>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <h5 className="text-2xl mb-5">Follow Us</h5>
          <div className=" border-2 border-primary rounded-lg overflow-hidden flex items-center">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-transparent flex-grow focus:outline-none focus:border-none p-2 pl-4 text-sm placeholder:text-zinc-500"
            />
            <div className="bg-primary text-white w-20 py-3 flex items-center justify-center h-full">
              <HiOutlineArrowRight />
            </div>
          </div>
          <div className="mt-7">
            <p className="text-primary">Social Media</p>
            <div className="flex items-center justify-start gap-2 mt-2">
              <a
                href="https://wa.me/+971565221880?text=Message"
                className="p-3 rounded-lg bg-zinc-800 text-white hover:bg-zinc-700 duration-300"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.instagram.com/houseoftea.ae"
                className="p-3 rounded-lg bg-zinc-800 text-white hover:bg-zinc-700 duration-300"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center flex flex-col md:flex-row w-[90%] max-w-[1200px] text-white items-center justify-around py-10 font-sans text-sm md:text-base">
        <p>
          &copy; {new Date().getFullYear()} House of Tea.{" "}
          <span className="text-zinc-400">All rights reserved!</span>{" "}
        </p>
        <a href="https://ziqx.cc" className=" text-gray-300 my-2">
          ⚡ ziqx.cc
        </a>
      </div>
    </div>
  );
}

export default Footer;
