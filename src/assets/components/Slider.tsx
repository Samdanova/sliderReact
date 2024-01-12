import React, {useState} from 'react';
import data from '../data/mockData';
import { IData } from "../types/interfaces";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const SliderCarousel = ()=>{
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
      };
    return(
    <Slider {...settings}>
     {data.map((slide, index) => {
        const isLongText = slide.title.length > 35;
        const shape = Math.random() < 0.5 ? 'circle' : 'flower';
        return (
          <div key={index} className={`slide ${isLongText ? 'double' : 'single'}`}>
            <div className={`image-container ${shape}`}>
              <img className={`img`}src={slide.img} alt={`Slide ${index}`} />
            </div>
            <div className="text-container">
              <p>{slide.title}</p>
              <p>{slide.date}</p>
            </div>
          </div>
        );
      })}
    </Slider>
    )
}