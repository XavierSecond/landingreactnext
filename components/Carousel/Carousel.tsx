import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'


function SimpleSlider() {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
  };
  return (
    <div className="slider-container w-[100%] h-[100%] m-auto bg-cover rounded-[2rem]">
      <Slider {...settings}>
        <div className="w-[100%] h-[100%] m-auto ">
          <img src="/images/carousel/01.jpg" className="bg-cover object-cover"></img>
        </div>
        <div className="w-[100%] h-[100%] m-auto">
          <img src="/images/carousel/02.jpg" className="bg-cover object-cover"></img>
        </div>
        <div className="w-[100%] h-[100%] m-auto">
          <img src="/images/carousel/03.jpg" className="bg-cover object-cover"></img>
        </div>
        <div className="w-[100%] h-[100%] m-auto">
          <img src="/images/carousel/04.jpg" className="bg-cover object-cover"></img>
        </div>
        <div className="w-[100%] h-[100%] m-auto">
          <img src="/images/carousel/05.jpg" className="bg-cover object-cover"></img>
        </div>
        
      </Slider>
    </div>
  );
}

export default SimpleSlider;