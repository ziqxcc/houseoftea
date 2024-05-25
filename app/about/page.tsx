import React from "react";
import Header from "./Header";
import AboutSec from "@/components/Home/AboutSec";
import JourneySec from "./JourneySec";
import SpecialSec from "@/components/Home/SpecialSec";
import Booking from "@/components/Common/Booking";
import Footer from "@/components/Common/Footer";

function page() {
  return (
    <div>
      <Header />
      <AboutSec />
      <SpecialSec />
      <JourneySec />
      <Booking />
      <Footer />
    </div>
  );
}

export default page;
