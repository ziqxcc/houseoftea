"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { GrStar } from "react-icons/gr";
import { IoStar } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

function Testimonial() {
  const TEST = [
    {
      photo: "rev1.jpg",
      name: "Sarah M",
      designation: "Abu Dhabi",
      dis: "This café is a hidden gem! The coffee is always fresh, and the pastries are to die for. The ambiance is cozy, and the staff is super friendly. I love spending my Sunday mornings here with a good book. Highly recommended!",
    },
    {
      photo: "rev1.jpg",
      name: "John D",
      designation: "Fujairah",
      dis: "I travel a lot for work, and finding a good café is always a challenge. This place exceeded my expectations. Great service, fantastic coffee, and a really welcoming atmosphere. I make it a point to stop by whenever I'm in town.",
    },
    {
      photo: "rev1.jpg",
      name: "Emily R",
      designation: "Ajman",
      dis: "I stumbled upon this café by accident, and now it's my go-to spot. The variety of coffee blends is impressive, and their vegan options are amazing. It's a perfect place to meet friends or get some work done. Five stars!",
    },
    {
      photo: "rev1.jpg",
      name: "Michael B",
      designation: "Alain",
      dis: "The latte art here is incredible! Every cup feels like a little piece of art. The staff is knowledgeable and passionate about coffee, which makes the experience even better. Plus, their homemade cakes are delicious",
    },
    {
      photo: "rev1.jpg",
      name: "Shakir Khan",
      designation: "Abu Dhabi",
      dis: "A friend recommended this café, and I’m so glad they did! The atmosphere is so warm and inviting. I love their seasonal specials and the fact that they use locally sourced ingredients. It’s my favorite spot in the city",
    },
    {
      photo: "rev1.jpg",
      name: "Abraham Charly",
      designation: "Ras Al Khaima",
      dis: "Whether you’re looking for a quick coffee on the go or a place to relax and unwind, this café is perfect. The staff always makes you feel at home, and the quality of the coffee is top-notch. Definitely a must-visit!",
    },
    {
      photo: "rev1.jpg",
      name: "Ibn Aleez",
      designation: "Sharjah",
      dis: "I love the vibe of this place. It’s a mix of modern and cozy, and it’s always buzzing with energy. The baristas are friendly and know how to make a perfect cup of coffee. Plus, their loyalty program is great",
    },
  ];
  return (
    <section className="testimonials py-28 text-white flex justify-center bg-black">
      <div className="w-[80%] max-w-[1200px] flex flex-col items-center">
        <p className="text-primary uppercase">CUSTOMER FEEDBACK</p>
        <h5 className="sub-title text-center" data-aos="fade-up">
          What Our Clients Say
        </h5>
        <Swiper
          breakpoints={{
            768: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper" data-aos="fade-up"
        >
          {TEST.map((item: any, index: number) => (
            <SwiperSlide>
              <div className="bg-black">
                <div className="w-full h-10 bg-black"></div>

                <div
                  key={index}
                  className="bg-secondary px-8 pb-8 h-[340px] w-full flex flex-col rounded-2xl"
                >
                  <div className="flex w-full h-5">
                    <div
                      className="h-20 w-20 rounded-full mx-auto -translate-y-10"
                      style={{
                        background: `url(assets/${item.photo})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>
                  <div className="text-primary mt-5 mb-3 flex items-center gap-1 justify-center">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="text-zinc-400 text-[15px]">{item.dis}</p>
                  <h6 className="font-bold mt-5">{item.name}</h6>
                  <p className="text-primary text-sm">{item.designation}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonial;
