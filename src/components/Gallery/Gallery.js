import React, {Component} from "react";
import PictureViewer from "../PictureViewer/PictureViewer";
import {SliderData} from '../../assets/SliderData';
import "./Gallery.css"
/*
import a from '../../assets/Gallery/1.jpg'
import b from '../../assets/Gallery/2.jpg'
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
            imgIndex: 0,
            route: 'sliderOff'
        }
    }

    changeRoute = (route) => {
    this.setState({route: route})
        setTimeout(()=>{console.log(this.state.route)},0)
        }

    getIndex = (event) => {
        let src = event.target.src;
        SliderData.forEach((item, index) => {
            if (item.image === src) {
                this.setState({imgIndex: index})
                setTimeout(() => {
                    console.log(this.state.imgIndex, index)
                }, 0);
            }
        })

    }

    render() {
        const {imgIndex, route} = this.state;
        return (
            <div>
                {route === "sliderOff"
                    ? <div>
                        {SliderData.map((picture, index) => {
                            return (
                                <img
                                    src={picture.image} alt=''
                                    onClick={this.getIndex}
                                    onClick={()=>this.changeRoute('sliderOn')}
                                    key={index}
                                />)
                        })
                        }
                    </div>
                    : <PictureViewer
                        changeRoute={this.changeRoute}
                        slides={SliderData}
                        imgIndex={imgIndex}
                    />
                }
            </div>
        )
    }
}

export default Gallery
