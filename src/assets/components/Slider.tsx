import React, {useRef} from 'react';
import {NextArrow} from './NextArrow';
import {PrevArrow} from './PrevArrow';
import data from '../data/mockData';
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const SliderCarousel = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        centerPadding: '0',
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>,
        responsive: [
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    };
    const prevCard = useRef < string | null > (null)
    return (
        <div className='slider-container'>
            <Slider {...settings}>
                {
                    data.map((slide, index) => {
                        const isLongText = slide.title.length > 35;
                        let shape;
                        //чтобы не повторялось 2 круга подряд
                        do {
                            shape = Math.random() < 0.5
                                ? 'circle'
                                : 'petal';
                        } while (shape === prevCard.current)
                        prevCard.current = shape;
                        return (
                            <div key={index} className={`slide-card ${isLongText && 'double'}`}>
                                <div className={`image-container`}>
                                    <img
                                        className={`img ${shape} ${isLongText && 'img__double'}`}
                                        src={slide.img}
                                        alt={`Slide ${index}`}/>
                                </div>
                                <div className="text-container">
                                    <p className='text__title'>{slide.title}</p>
                                    <p className='text__date'>{slide.date}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </Slider>
        </div>
    )
}