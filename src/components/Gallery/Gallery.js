import React, {Component} from "react";
import PictureViewer from "../PictureViewer/PictureViewer";

import "./Gallery.css"
import a from '../../assets/Gallery/1.jpg'
/*//import b from '../../assets/Gallery/2.jpg'
import c from '../../assets/Gallery/3.jpg'
import d from '../../assets/Gallery/4.jpg'
import e from '../../assets/Gallery/5.jpg'
import f from '../../assets/Gallery/6.jpg'
import g from '../../assets/Gallery/7.jpg'
import h from '../../assets/Gallery/8.jpg'
import i from '../../assets/Gallery/9.jpg'*/

class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ImgLocalization: "",
            PictureViewerDisplay:"",
        }
    }

    onImgLocalization = (event) => {
        this.setState({ImgLocalization: event.target.getAttribute('src')},
            () => {console.log(this.state.ImgLocalization)
        });
    }

    onPictureViewerDisplay = (res) => {
        console.log(res)
        if (res === 'true'){
         this.setState({PictureViewerDisplay:"flex"},
             ()=>{console.log(this.state.PictureViewerDisplay)
         });
        }
        }

    render() {
        const {ImgLocalization, PictureViewerDisplay} = this.state;
        return (
            <div>
                <div id="gallery" className="container">
                    <img
                        className="mySlides"
                        src={a} alt='Logo'
                        onClick={(event)=>{this.onPictureViewerDisplay('true'); this.onImgLocalization(event)}}
                    />
                </div>
                <PictureViewer
                    ImgLocalization = {ImgLocalization}
                    PictureViewerDisplay = {PictureViewerDisplay}
                />
            </div>
        )
    }
}

export default Gallery
