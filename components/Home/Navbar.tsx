import React from "react";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { TiLocation } from "react-icons/ti";

function Navbar() {
  return (
    <div className="z-10 w-full flex flex-col">
      <div className="bg-zinc-800 w-full flex justify-center">
        <div className="flex items-center justify-between w-[90%] max-w-[1200px] gap-2 text-primary py-[8px]">
          <p className="flex items-center gap-1 text-sm">
            <MdOutlineAccessTimeFilled />
            OPENING HOURS :{" "}
            <span className="text-white"> 08:00 AM - 09:00 PM</span>
          </p>
          <p className="flex items-center gap-1 text-sm">
            <TiLocation />
            LOCATION :
            <span className="text-white"> 55 MAIN STREET, NEW YORK</span>
          </p>
        </div>
      </div>
      <header className="w-full flex justify-center bg-zinc-900 nav-bar">
        <div className="h-20 flex justify-between items-center w-[90%] max-w-[1200px]">
          <p className="text-3xl font-bold text-white">Demo Name</p>
          <div className="flex gap-10 text-white font-[600]">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Location</a>
            <a href="">Menu</a>
            <a href="">Contact</a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
