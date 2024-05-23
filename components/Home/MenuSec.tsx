import React from "react";

function MenuSec() {
  return (
    <div
      className="py-28 flex justify-center"
      style={{
        background: "url(assets/category_bg.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[90%] max-w-[1200px] flex items-center flex-col">
      <p className="text-primary uppercase text-center">CHOOSE BEST COFFEE</p>
        <h6 className="sub-title" data-aos="fade-up">Kaffen Popular Coffee Menu</h6>
        <div className="w-full bg-black mt-10 p-20"></div>
      </div>
    </div>
  );
}

export default MenuSec;
