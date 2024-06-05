import React from "react";

function Header() {
  return (
    <div
      className="w-full h-[300px] md:h-[450px] bg-red-600 flex items-center"
      style={{
        background: "url(images/services_inner_bg.jpg)",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
        {/* <p className="text-primary uppercase">about us</p> */}
    <div className="flex flex-col w-full ml-[10%]"><h5 className="text-[50px] md:text-[100px] text-white -mb-3">About Us</h5>
    <div className=" breadcrumbs text-white">
  <ul>
    <li><a href="/">Home</a></li> 
    <li>About</li> 
  </ul>
</div></div></div>
  );
}

export default Header;
