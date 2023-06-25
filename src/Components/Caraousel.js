import React from 'react';

import summersale from '../images/summersale.jpg';
import cosmetic from '../images/cosmetic.jpg'
import Slider from "react-slick";
import diwali from "../images/diwali.jpg";
import arrival from '../images/arrival.webp'
import eidc from '../images/eidc.jpg';
import mena from'../images/mena.webp';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Caraousel = () => {
    const images = [
        {
            id: 1,
            src: arrival,
            alt: "Image 1 "
        },{
        id: 2,
        src: eidc,
        alt: "Image 2"
    },
    {
        id: 3,
        src: mena,
        alt: "Image 3"
    },
    {
        id: 4,
        src: diwali,
        alt: "Image 4"
    }
    ];
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,

    };
    return (
        <>
            
            
            <div className="imgslider">
                <Slider {...settings}>
                    {images.map((item) => (
                        <div key={item.id}>
                            <img src={item.src} alt={item.alt} />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}
export default Caraousel;
