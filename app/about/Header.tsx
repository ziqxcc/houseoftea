import React from "react";

function Header() {
  return (
    <div
      className="w-full h-[450px] bg-red-600 flex items-center"
      style={{
        background: "url(images/started_img_n3.jpg)",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
        {/* <p className="text-primary uppercase">about us</p> */}
    <h5 className="text-[100px] text-white ml-[10%] w-fit">About Us</h5></div>
  );
}

export default Header;
