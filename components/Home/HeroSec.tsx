// components/Sliders.js
"use client"
import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styles from './Sliders.module.css'; // Optional: for custom styling

const Sliders = () => {
  const textSliderRef = useRef(null);
  const imageSliderRef = useRef(null);

  const [navForSliders, setNavForSliders] = useState({ text: null, image: null });
// const NavSliderText = navForSliders.text
  useEffect(() => {
    setNavForSliders({ text: textSliderRef.current, image: imageSliderRef.current });
  }, []);

  // const sickPrimary = {
  //   autoplay: true,
  //   autoplaySpeed: 2400,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   speed: 1800,
  //   cssEase: 'cubic-bezier(.84, 0, .08, .99)',
  //   asNavFor: navForSliders.text,
  //   centerMode: true,
  //   prevArrow: <button className="prev"><IoIosArrowBack /></button>,
  //   nextArrow: <button className="next"><IoIosArrowForward /></button>
  // };

  // const sickSecondary = {
  //   autoplay: true,
  //   autoplaySpeed: 2400,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   speed: 1800,
  //   cssEase: 'cubic-bezier(.84, 0, .08, .99)',
  //   asNavFor: navForSliders.image,
  //   prevArrow: <button className="prev"><IoIosArrowBack /></button>,
  //   nextArrow: <button className="next"><IoIosArrowForward /></button>
  // };

  return (
    <div className='overflow-hidden w-full h-fit'>
      <div className="text-slider-wrapper">
        <Slider
        autoplay={ true}
        autoplaySpeed={ 5000}
        slidesToShow={ 1}
        slidesToScroll={ 1}
        speed={ 2000}
        cssEase={ 'cubic-bezier(.84, 0, .08, .99)'}
        // asNavFor={navForSliders.text}
        centerMode={ true}
        prevArrow={ <button className="prev"><IoIosArrowBack /></button>}
        nextArrow={ <button className="next"><IoIosArrowForward /></button>}
        
        ref={textSliderRef} className="text-slider">
          <div className="text-slide"><h1>A blessing for <br /> every skin.</h1></div>
          <div className="text-slide"><h1>The perfect mix of <br /> old & new.</h1></div>
          <div className="text-slide"><h1>A journey over borders <br /> & generations.</h1></div>
          {/* <div className="text-slide"><h1>You are the <br /> stylist.</h1></div>
          <div className="text-slide"><h1>To be on the <br /> forefront.</h1></div> */}
        </Slider>
      </div>

      <div className="slider-control overflow-hidden">
        <div className="prev"><button type="button"><IoIosArrowBack /></button></div>
        <div className="next"><button type="button"><IoIosArrowForward /></button></div>
      </div>

      <div className="blocks overflow-hidden">
        <div className="block-1"></div>
        <div className="block-2"></div>
        <div className="block-3"></div>
      </div>

      <div className="overlay"></div>

      <div className="image-slider overflow-hidden">
        <Slider 
        
        autoplay={ true}
        autoplaySpeed={ 5000}
        slidesToShow={ 2}
        slidesToScroll={ 1}
        speed={ 2000}
        cssEase={ 'cubic-bezier(.84, 0, .08, .99)'}
        // asNavFor={ navForSliders.text}
        centerMode={ true}
        prevArrow={ <button className="prev"><IoIosArrowBack /></button>}
        nextArrow={ <button className="next"><IoIosArrowForward /></button>}
        
        ref={imageSliderRef}>
          
          
          <div className="image-slide overflow-hidden">
            <div className='w-full h-full' style={{ backgroundImage: `url(images/House_of_Tea.jpg)`,backgroundPosition: "center",backgroundSize: "cover",backgroundRepeat: "no-repeat"}}></div>
          </div>
          <div className="image-slide overflow-hidden">
            <div className='w-full h-full' style={{ backgroundImage: `url(assets/DSC0870c.jpg)`,backgroundPosition: "center",backgroundSize: "cover",backgroundRepeat: "no-repeat"}}></div>
          </div>
          <div className="image-slide overflow-hidden">
            <div className='w-full h-full' style={{ backgroundImage: `url(assets/IMG-20240430-WA0020c.jpg)`,backgroundPosition: "center",backgroundSize: "cover",backgroundRepeat: "no-repeat"}}></div>
          </div>
          <div className="image-slide overflow-hidden">
            <div className='w-full h-full' style={{ backgroundImage: `url(assets/DSC1143c.jpg)`,backgroundPosition: "center",backgroundSize: "cover",backgroundRepeat: "no-repeat"}}></div>
          </div>
          
          {/* <div className="image-slide overflow-hidden">
            <div className='w-full h-full' style={{ backgroundImage: `url(images/services_inner_bg.jpg)`,backgroundPosition: "center",backgroundSize: "cover",backgroundRepeat: "no-repeat"}}></div>
          </div> */}
        </Slider>
      </div>
    </div>
  );
};

export default Sliders;
