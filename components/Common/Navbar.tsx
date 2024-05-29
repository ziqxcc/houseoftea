"use client"
import React, { useState } from "react";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineArrowRight } from "react-icons/hi";
import { GrAppsRounded, GrHome, GrInfo, GrLocation, GrMenu } from "react-icons/gr";
import { TbHome } from "react-icons/tb";
import { RiCustomerServiceFill, RiInformation2Line } from "react-icons/ri";
function Navbar() {

  const [menu,setMenu] = useState<any>();
  const pathname = usePathname();
    const NAV_ITEM = [
    {
      name: "Home",
      link: "/",
      icon:<TbHome />
    },
    {
      name: "About",
      link: "/about",
      icon:<RiInformation2Line />
    },
    {
      name: "Location",
      link: "/location",
      icon:<GrLocation />
    },
    {
      name: "Menu",
      link: "/menu",
      icon:<GrAppsRounded/>
    },
    {
      name: "Contact",
      link: "/contact",
      icon:<RiCustomerServiceFill/> 

    },
  ];
  // console.log(pathname);
  
  return (
    <>
      <div className="bg-zinc-900 w-full justify-center hidden md:flex">
        <div className="flex items-center justify-between w-[90%] max-w-[1200px] gap-2 text-primary py-[8px]">
          <p className="flex items-center gap-1 text-sm">
            <MdOutlineAccessTimeFilled />
            OPENING HOURS :{" "}
            <span className="text-white"> 08:00 AM - 09:00 PM</span>
          </p>
          <div className="flex gap-3 text-zinc-400"><FaFacebookF className="text-sm hover:text-white duration-500"/><FaXTwitter className="hover:text-white duration-500"/><a href="https://www.instagram.com/houseofteaa?igsh=MTF1c3FjYTBzeTVrcg=="><FaInstagram className="hover:text-white duration-500"/></a><FaYoutube className="hover:text-white duration-500"/>



</div>
          <p className="flex items-center gap-1 text-sm">
            <TiLocation />
            LOCATION :
            <span className="text-white"> 55 MAIN STREET, NEW YORK</span>
          </p>
        </div>
      </div>
      <header className="z-30 w-full flex justify-center bg-black border-b border-zinc-900 nav-bar">
        <div className="h-20 flex justify-between items-center w-[90%] max-w-[1200px]">
          <a href="/"><img src="assets/logo.png" alt="Logo" className="w-12" /></a>
          <div className=" gap-10 tracking-wider hidden md:flex">
            {NAV_ITEM.map((item:any,index:number)=>(
              <a key={index} className={`hover:text-white hover:font-[500] duration-500 ${pathname === item.link ? "text-white font-[700]" : "text-zinc-400 font-[300]"}`} href={item.link}>{item.name}</a>
            ))}
          </div>
          <div  className="hidden md:block btn-pry duration-300 z-10 bg-primary w-fit rounded-3xl ">
            <a
              href=""
              className="p-2 px-8 w-full h-full duration-500 text-white  z-20 flex items-center gap-3"
            >
              Book Table <HiOutlineArrowRight />
            </a>
            <div className="btn-before z-0"></div>
          </div>
          <div onClick={()=>setMenu(!menu)} className="md:hidden flex flex-col gap-[6px] mr-3"><div className={`bg-white h-[2px] w-7 rounded-lg origin-center duration-300 ${menu ? "translate-y-2 rotate-[37deg]" :""}`}></div>
          <div className={`bg-white h-[2px] duration-300 rounded-lg ${menu ? "w-0":"w-7"}`}></div><div className={`bg-white h-[2px] w-7 rounded-lg origin-center duration-300 ${menu ? "-translate-y-2 -rotate-[37deg]" :""}`}></div></div>
        </div>
        
      </header>
      <div className={`overflow-hidden md:hidden fixed top-0 right-0 flex items-start py-14 bg-black duration-300 border-l-2 border-zinc-900 z-20 h-[100vh] box-border ${menu ? "w-[80%]" : "w-[0px]"} `}>
        <div className="text-white flex w-full flex-col gap-2 mt-32 overflow-hidden px-[10%]">
          {NAV_ITEM.map((item:any,index:number)=>(
            <a href={item.link} key={index} onClick={()=>setMenu(false)} className={`text-white text-xl py-4 w-full px-[10%] rounded-2xl duration-300 hover:bg-zinc-900 flex gap-4 ${(pathname === item.link) && "bg-zinc-900"} `}>
              <p className="text-primary text-2xl">{item.icon}</p>
            {item.name}</a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;
