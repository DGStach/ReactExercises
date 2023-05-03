import React, {Component} from "react";
import PictureViewer from "../PictureViewer/PictureViewer";
import { SliderData } from '../../assets/SliderData';
import "./Gallery.css"
import a from '../../assets/Gallery/1.jpg'
/*import b from '../../assets/Gallery/2.jpg'
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
        if (res === 'flex'){
         this.setState({PictureViewerDisplay:"flex"},
             ()=>{console.log(this.state.PictureViewerDisplay)
         });
        }
        if (res === 'none'){
            this.setState({PictureViewerDisplay:"none"},
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
                        onClick={(event) => {
                            this.onPictureViewerDisplay('flex');
                            this.onImgLocalization(event)
                        }}
                    />
                </div>
                <div>
                    {SliderData.map((picture, index) =>{
                        return(<img src={picture.image} alt=''/>)})
                        }
                </div>
                <PictureViewer
                    ImgLocalization = {ImgLocalization}
                    onPictureViewerDisplay = {this.onPictureViewerDisplay}
                    PictureViewerDisplay = {PictureViewerDisplay}
                    slides={SliderData}
                />
            </div>
        )
    }
}

export default Gallery
