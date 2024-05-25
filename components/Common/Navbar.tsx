"use client"
import React from "react";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function Navbar() {

  const pathname = usePathname();
    const NAV_ITEM = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Location",
      link: "/location",
    },
    {
      name: "Menu",
      link: "/menu",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  // console.log(pathname);
  
  return (
    <>
      <div className="bg-zinc-900 w-full flex justify-center">
        <div className="flex items-center justify-between w-[90%] max-w-[1200px] gap-2 text-primary py-[8px]">
          <p className="flex items-center gap-1 text-sm">
            <MdOutlineAccessTimeFilled />
            OPENING HOURS :{" "}
            <span className="text-white"> 08:00 AM - 09:00 PM</span>
          </p>
          <div className="flex gap-3 text-zinc-400"><FaFacebookF className="text-sm hover:text-white duration-500"/><FaXTwitter className="hover:text-white duration-500"/><FaInstagram className="hover:text-white duration-500"/><FaYoutube className="hover:text-white duration-500"/>



</div>
          <p className="flex items-center gap-1 text-sm">
            <TiLocation />
            LOCATION :
            <span className="text-white"> 55 MAIN STREET, NEW YORK</span>
          </p>
        </div>
      </div>
      <header className="z-20 w-full flex justify-center bg-black border-b border-zinc-900 nav-bar">
        <div className="h-20 flex justify-between items-center w-[90%] max-w-[1200px]">
          <img src="assets/logo.png" alt="Logo" className="w-12" />{" "}
          <div className="flex gap-10 tracking-wider">
            {NAV_ITEM.map((item:any,index:number)=>(
              <a key={index} className={`hover:text-white hover:font-[500] duration-500 ${pathname === item.link ? "text-white font-[700]" : "text-zinc-400 font-[300]"}`} href={item.link}>{item.name}</a>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
