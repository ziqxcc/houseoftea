"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import { Navigation, Pagination, Parallax, Autoplay } from 'swiper/modules';

// Install modules
SwiperCore.use([Navigation, Pagination, Parallax, Autoplay]);

const slides = [
  { id: 1011, title: 'we help you make modern interior', description: 'we will help you to make an elegant and luxurius interrior designed by porfessional interrior designer.' },
  { id: 1026, title: 'we help you make modern interior', description: 'we will help you to make an elegant and luxurius interrior designed by porfessional interrior designer.' },
  { id: 201, title: 'we help you make modern interior', description: 'we will help you to make an elegant and luxurius interrior designed by porfessional interrior designer.' },
  { id: 167, title: 'we help you make modern interior', description: 'we will help you to make an elegant and luxurius interrior designed by porfessional interrior designer.' },
];

const SwiperComponent: React.FC = () => {
  return (
    <div className="bdt-timeline-container">
      <div className="upk-salf-slider-wrapper">
        <Swiper
          spaceBetween={30}
          effect={'slide'}
          speed={1200}
          parallax={true}
          autoplay={{ delay: 5000 }}
          navigation={{
            nextEl: '.upk-button-next',
            prevEl: '.upk-button-prev',
          }}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: (index, className) => (
              `<span class="${className} swiper-pagination-bullet--svg-animation">
                <svg width="28" height="28" viewBox="0 0 28 28">
                  <circle class="svg__circle" cx="14" cy="14" r="10" fill="none" stroke-width="2"></circle>
                  <circle class="svg__circle-inner" cx="14" cy="14" r="2" stroke-width="3"></circle>
                </svg>
              </span>`
            ),
          }}
        >
          {slides.map(slide => (
            <SwiperSlide key={slide.id}>
              <div className="upk-salf-item">
                <div className="upk-salf-image-wrap">
                  <img className="upk-xanc-img" src={`https://picsum.photos/id/${slide.id}/1200/800`} alt={slide.title} />
                </div>
                <div className="upk-salf-content-wrap">
                  <h3 className="upk-salf-title" data-swiper-parallax-y="-150" data-swiper-parallax-duration="1200">{slide.title}</h3>
                  <div className="upk-salf-desc" data-swiper-parallax-y="-200" data-swiper-parallax-duration="1400">{slide.description}</div>
                  <div className="upk-salf-button" data-swiper-parallax-y="-300" data-swiper-parallax-duration="1500">
                    <a className="link link--arrowed" href="#">read more
                      <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32">
                        <g fill="none" stroke="#ff215a" strokeWidth="1.5" strokeLinejoin="round" strokeMiterlimit="10">
                          <circle className="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                          <path className="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="upk-page-scroll">
          <a className="arrow-up">
            <div className="long-arrow-left"></div>
            <span className="arrow-slide"></span>
          </a>
        </div>
        <div className="upk-salf-nav-pag-wrap">
          <div className="upk-salf-navigation">
            <div className="upk-button-prev upk-n-p">
              <a className="link link--arrowed" href="#">
                <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32">
                  <g fill="none" stroke="#ff215a" strokeWidth="1.5" strokeLinejoin="round" strokeMiterlimit="10">
                    <circle className="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                    <path className="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                  </g>
                </svg>
              </a>
            </div>
            <div className="upk-button-next upk-n-p">
              <a className="link link--arrowed" href="#">
                <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32">
                  <g fill="none" stroke="#ff215a" strokeWidth="1.5" strokeLinejoin="round" strokeMiterlimit="10">
                    <circle className="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                    <path className="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <div className="upk-salf-pagi-wrap">
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SwiperComponent;
