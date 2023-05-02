import React, {useState} from "react";
import './PictureViewer.css'

import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

let PictureViewer = ({ImgLocalization, PictureViewerDisplay, onPictureViewerDisplay, slides}) => {
    const [current, setCurrent] = useState(0);
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
        <div>
            <div>
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
                            </div>
                        );
                    })}
                </div>

            </div>

            {/*                <div id='PictureViewerBox' style={{display: PictureViewerDisplay}}>

                    <img
                        id="PictureViewerBOX"
                        src={ImgLocalization}
                        alt='Logo'
                    />
                    <span onClick={() => {
                        onPictureViewerDisplay("none")
                    }}>X</span>

           <button onClick={}>Next</button>


                </div>*/}

        </div>
    )
}

export default PictureViewer