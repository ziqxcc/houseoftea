"use client"
import { useEffect } from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';
// import styles from './ScrollProgress.module.css';

const ScrollProgress = () => {
    useEffect(() => {
        const progressPath = document.querySelector('.progress-wrap path') as SVGPathElement;
        const progressWrap = document.querySelector('.progress-wrap');
    
        if (progressPath && progressWrap) {
          const pathLength = progressPath.getTotalLength();
          progressPath.style.transition = 'none';
          progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
          progressPath.style.strokeDashoffset = `${pathLength}`;
          progressPath.getBoundingClientRect();
          progressPath.style.transition = 'stroke-dashoffset 10ms linear';
    
          const updateProgress = () => {
            const scroll = window.scrollY || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            const progress = pathLength - (scroll * pathLength) / height;
            progressPath.style.strokeDashoffset = `${progress}`;
          };
    
          const handleScroll = () => {
            updateProgress();
            if (window.scrollY > 50) {
              progressWrap.classList.add("activeProgress");
            } else {
              progressWrap.classList.remove("activeProgress");
            }
          };
    
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
        }
      }, []);
    
      // const scrollToTop = () => {
      //   window.scrollTo({ top: 0, behavior: 'smooth' });
      // };
    

  return (
    <a href='https://wa.me/+971565221883' target='_blank' className="progressWrap progress-wrap" id="progress-scroll">
      <svg className="progressCircle progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
      <IoLogoWhatsapp className='text-3xl absolute'/>
    </a>
  );
};

export default ScrollProgress;
