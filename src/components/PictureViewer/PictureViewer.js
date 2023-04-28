import React from "react";
import './PictureViewer.css'

let PictureViewer = ({ImgLocalization,PictureViewerDisplay, onPictureViewerDisplay}) =>{
   return (
       <div id = 'PictureViewerBox' style = {{display: PictureViewerDisplay}} >
           <img
               id="PictureViewerBOX"
               src={ImgLocalization}
               alt='Logo'

           />
           <span onClick={()=>{onPictureViewerDisplay("none")}}>X</span>
       </div>
   )
}

export default PictureViewer