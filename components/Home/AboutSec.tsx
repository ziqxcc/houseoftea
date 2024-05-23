import React from "react";

function AboutSec() {
  return (
    <section className="bg-black py-20 text-white flex justify-center">
      <div className="w-[90%] max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center">
          <p className="text-primary uppercase" data-aos="fade-up">About us</p>
          <h5 className="sub-title" data-aos="fade-up">
            Organic & Fresh Coffee
            <br />
            Provider Center
          </h5>
          <p className="text-zinc-400" data-aos="fade-up">
            Sed ut perspiciatis unde omnis iste natus error voluptate
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae
            abillo inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo. Nemo enim ipsluptatem quia voluptas sit aspernatur
            aut odit aut fugit sed quia consequuntur magni dolores eos qui
            ratione
          </p>
        </div>
        <div>
          <img src="images/about_img.png" className="w-[600px]"/>
        </div>
      </div>
    </section>
  );
}

export default AboutSec;
