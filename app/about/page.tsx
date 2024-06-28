import React from "react";
import Header from "./Header";
import AboutSec from "@/components/Home/AboutSec";
import JourneySec from "./JourneySec";
import SpecialSec from "@/components/Home/SpecialSec";
import Booking from "@/components/Common/Booking";
import Footer from "@/components/Common/Footer";
import Service from "./Service";
import Testimonial from "@/components/Home/Testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About - House of Tea',
  icons: {
    icon: '/assets/logo.png',
  },
}

function page() {
  return (
    <div>
      <Header />
      <AboutSec />
      <SpecialSec />
      <JourneySec />
      <Service/>
      <Testimonial/>
    </div>
  );
}

export default page;
