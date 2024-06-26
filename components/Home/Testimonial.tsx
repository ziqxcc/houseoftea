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
      name: "Fatima Al Mahmoud",
      designation: "Baniyas, Abu Dhabi",
      dis: "يقدم مطعم بيت الشاي طعامًا رائعًا وخدمة ممتازة! لقد استمتعت بتجربة غذائية فريدة في منزل الشاي في بني ياس. الغلاف الجوي رائع والأطعمة الطازجة ولذيذة بشكل استثنائي",
      lng:"arabic"
    },
    {
      photo: "rev1.jpg",
      name: "Khalid Al Ameri",
      designation: "Khalidiya, Abu Dhabi",
      dis: "تجربة رائعة في مقهى بيت الشاي في منطقة الخالدية! الخدمة سريعة والطعام لذيذ جدًا. أنصح بتجربة الكبسة والشاي العربي الرائع هنا",
    lng:"arabic"
    },
    {
      photo: "rev1.jpg",
      name: "Mohammad Al Kaabi",
      designation: "Al Ain, Abu Dhabi",
      dis: "Had a wonderful lunch at House of Tea in Al Ain. The menu has a good variety, and the food quality is top-notch. The service was efficient, and the prices are reasonable.",
    },
    {
      photo: "rev1.jpg",
      name: "Fatima Ibrahim",
      designation: "Abu Dhabi ",
      dis: "Enjoyed a fantastic breakfast at House of Tea .  the food was fresh and tasty. Their Paratha sandwich  and karak tea are simply delicious. Will definitely visit again",
    },
    {
      photo: "rev1.jpg",
      name: "Ali Al Mazrouei",
      designation: "Khalifa City, Abu Dhabi",
      dis: "House of Tea in Khalifa City is my go-to spot for a quick lunch. The sandwiches are excellent, and  fresh. The staff is attentive",
    },
    {
      photo: "rev1.jpg",
      name: "Imran Khan",
      designation: "Musaffah, Abu Dhabi",
      dis: "شاہامہ، ابوظبی میں ہاؤس آف ٹی کی چائے کافیٹیریا میں خوراک بہت ہی خوش زائقہ اور تازگی سے بھرپور تھی، خاص طور پر ان کے پراتے اور چائے۔ خدمت تیز اور دوستانہ تھی، جس نے تیز خوراک کے لیے ایک بہترین جگہ بنا دیا",
    lng:"arabic"
    },
    {
      photo: "rev1.jpg",
      name: "Juan dela Cruz",
      designation: "Abu Dhabi",
      dis: "Ang House of Tea , Abu Dhabi ay isang napakasarap na karanasan! Ang pagkain ay masarap at puno ng sariwang lasa, lalo na ang kanilang chili paratha at tsaa. Ang serbisyo ay mabilis at magiliw",
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
                  <p className={`text-zinc-400 text-[15px] ${item.lng=="arabic"&& "text-[17px] font-arabic"}`}>{item.dis}</p>
                  <h6 className="font-bold mt-5">{item.name}</h6>
                  <p className="text-primary text-sm ">{item.designation}</p>
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
