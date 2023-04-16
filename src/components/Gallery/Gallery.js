import React from "react";
import "./Gallery.css"
import a from '../../assets/Gallery/1.jpg'
import b from '../../assets/Gallery/2.jpg'
import c from '../../assets/Gallery/3.jpg'
import d from '../../assets/Gallery/4.jpg'
import e from '../../assets/Gallery/5.jpg'
import f from '../../assets/Gallery/6.jpg'
import g from '../../assets/Gallery/7.jpg'
import h from '../../assets/Gallery/8.jpg'
import i from '../../assets/Gallery/9.jpg'

const Gallery = () => {
    let n0
    let fullImgBox = document.getElementById("fullImgBox");
    let fullImg = document.getElementById("fullImg");
    let slide = document.getElementsByClassName("mySlides");
   // let minSliderValue = 0;
   // let maxSliderValue = document.getElementsByClassName("mySlides").length;



    const currentSlide = (currentSlideArgument)=> {
        n0 = currentSlideArgument;
        fullImgBox.style.display = "flex";
        fullImg.src = slide[n0].src;
    }

    return (
<div>
        <div className="full-img" id="fullImgBox">
            <img src={a} id="fullImg" alt=""/>
                <span onClick="closeFullImg()">X</span>
            {/* <span className="prev" onClick="minSlides(1)" onClick="CurrentSlideDisplay()">❮</span>
                <span className="next" onClick="minSlides(-1)" onClick="CurrentSlideDisplay()">❯</span>
        */}</div>

        <div id="gallery" class="container">
            <img class="mySlides" src={a} alt='Logo' onClick={()=>currentSlide(0)}/>
            <img class="mySlides" src={b} alt='Logo'onClick={()=>currentSlide(1)}/>
            <img src={c} alt='Logo'/>
            <img src={d} alt='Logo'/>
            <img src={e} alt='Logo'/>
            <img src={f} alt='Logo'/>
            <img src={g} alt='Logo'/>
            <img src={h} alt='Logo'/>
            <img src={i} alt='Logo'/>
        </div>
</div>
    )


}



export default Gallery


