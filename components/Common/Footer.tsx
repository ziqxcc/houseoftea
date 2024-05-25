import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  GrCaretRightFill,
  GrLocation,
  GrMail,
  GrMailOption,
  GrPhone,
} from "react-icons/gr";
import { HiOutlineArrowRight } from "react-icons/hi";

function Footer() {
  return (
    <div className="bg-black flex flex-col items-center w-full">
      <section className="w-[90%] max-w-[1200px] grid grid-cols-1 md:grid-cols-9 gap-5 py-20 text-white border-b border-zinc-800">
        <div className="col-span-3">
          <img src="assets/logo.png" className="h-24" />
          <p className="text-zinc-500 text-sm mt-7 w-60">
            Our karak tea is very famous for its taste and flavour and we also
            provides a varities of teas and coffees along with a number of snack
            items including sandwiches in Parathas and burgers.
          </p>
        </div>
        <div className="col-span-2">
          <h5 className="text-2xl mb-5">Working Hours</h5>
          <div className="flex gap-2 mb-5">
            <p className="text-primary font-bold">
              <GrCaretRightFill />
            </p>
            <div>
              <p>Sunday - Thursday</p>
              <p className="text-primary">08:00 am - 09:00pm</p>
            </div>
          </div>
          <div className="flex gap-2 mb-5">
            <p className="text-primary font-bold">O</p>
            <div>
              <p>Sunday - Thursday</p>
              <p className="text-primary">08:00 am - 09:00pm</p>
            </div>
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
              className="bg-transparent focus:outline-none focus:border-none p-2 px-4 w-48 text-sm placeholder:text-zinc-500"
            />
            <div className="bg-primary text-white py-3 px-5">
              <HiOutlineArrowRight />
            </div>
          </div>
          <div className="mt-7">
            <p className="text-primary">Social Media</p>
            <div className="flex items-center justify-start gap-2 mt-2">
              <a href="" className="p-3 rounded-lg bg-zinc-800 text-white hover:bg-zinc-700 duration-300">
                <FaFacebookF />
              </a>
              <a href="" className="p-3 rounded-lg bg-zinc-800 text-white hover:bg-zinc-700 duration-300">
                <FaXTwitter />
              </a>{" "}
              <a href="" className="p-3 rounded-lg bg-zinc-800 text-white hover:bg-zinc-700 duration-300">
                <FaInstagram />
              </a>
              <a href="" className="p-3 rounded-lg bg-zinc-800 text-white hover:bg-zinc-700 duration-300">
                <FaYoutube />
              </a>{" "}
            </div>
          </div>
        </div>
      </section>
      <div className="h-20 w-full flex items-center justify-center  text-sm gap-1 text-zinc-500">
        Copyright © 2024 <span className="text-zinc-300"> House of Tea </span>{" "}
        by{" "}
        <a href="https://abaqas.in" className="text-primary">
          {" "}
          Abaqas{" "}
        </a>
        | © All rights reserved!
      </div>
    </div>
  );
}

export default Footer;
