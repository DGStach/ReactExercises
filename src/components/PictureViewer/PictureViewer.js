import React from "react";
import './PictureViewer.css'

let PictureViewer = ({ImgLocalization, PictureViewerDisplay}) =>{
   return (
       <div id = 'PictureViewerBox' style = {{display: PictureViewerDisplay}} >
           <img
               id="PictureViewerBOX"
               src={ImgLocalization}
               alt='Logo'

           />
       </div>
   )
}

export default PictureViewer