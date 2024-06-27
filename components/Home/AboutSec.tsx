import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";

function AboutSec() {
  return (
    <section className="bg-black py-20 text-white flex justify-center group">
      <div className="w-[80%] max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center ">
          <p className="text-primary uppercase">Our Story</p>
          <h5 className="sub-title" data-aos="fade-up">
            House of Tea's Cultural Journey in the UAE
          </h5>
          <p className="text-zinc-400" data-aos="fade-up" data-aos-delay="100">
            House of Tea Cafeteria has deep roots in the rich cultural heritage
            of the Malabar region in South India, and it shares a strong bond
            with Arab culture. This connection has been built over centuries
            through interactions with travelers, traders, scholars, and
            employers. The United Arab Emirates (UAE), known for its diverse and
            noble culture, reflects the dreams of His Highness Sheikh Zayed bin
            Sultan Al Nahyan. In this inspiring environment, House of Tea was
            founded. Mr. Majed Saad Abdullah Ali Almenhali and Rashid
            Thaniyullathil started House of Tea in Baniyas, Abu Dhabi. They
            aimed to offer clean, high-quality, healthy, and delicious meals
            made with love and dedication. Their small cafeteria quickly became
            popular among both Arabs and foreigners. House of Tea's success is
            built on strong values: cleanliness, quality, health, and customer
            satisfaction. These principles have made it a leading cafeteria in
            the UAE. With a strong presence in Abu Dhabi and expansion into
            Sharjah and Dubai, House of Tea has become one of the largest
            cafeteria chains in the UAE. Today, House of Tea has grown to
            include over 45 branches, including both cafeterias and restaurants,
            thanks to the hard work of more than 800 employees. The brand is
            known for offering great value for money and exceptional service
          </p>
          <div
            data-aos="fade-up"
            className="btn-pry duration-300 z-10 bg-primary w-fit mt-8 rounded-3xl "
          >
            <a
              href=""
              className="p-3 px-10 w-full h-full duration-500 text-white  z-20 flex items-center gap-3"
            >
              Explore <HiOutlineArrowRight />
            </a>
            <div className="btn-before z-0"></div>
          </div>
        </div>
        <div className="group-hover:translate-x-1 duration-500 hidden md:block">
          <img src="images/fruit99.png" className="w-[600px]" />
        </div>
      </div>
    </section>
  );
}

export default AboutSec;
