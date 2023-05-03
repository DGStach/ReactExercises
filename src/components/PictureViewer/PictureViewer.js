import React, {useState} from "react";
import './PictureViewer.css'

import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

let PictureViewer = ({changeRoute ,slides, src, imgIndex}) => {
    const [current, setCurrent] = useState(imgIndex);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className='slider'>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
            {slides.map((slide, index) => {
                return (
                        <div
                            className={index === current ? 'slide active' : 'slide'}
                            key={index}
                        >
                            {index === current && (
                                <img
                                    src={slide.image} alt='' className='image'
                                ></img>
                            )}
                            <span onClick={() => changeRoute('sliderOff')}>X</span>
                        </div>
                );
            })}
        </div>
    )
}

export default PictureViewer