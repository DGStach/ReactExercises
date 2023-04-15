import React from "react";
import a from '../../assets/Gallery/a.jpg'
import b from '../../assets/Gallery/b.jpg'
import c from '../../assets/Gallery/c.jpg'
import d from '../../assets/Gallery/d.jpg'
import e from '../../assets/Gallery/e.jpg'
import f from '../../assets/Gallery/f.jpg'
import g from '../../assets/Gallery/g.jpg'
import h from '../../assets/Gallery/h.jpg'
import i from '../../assets/Gallery/i.jpg'

const Gallery = () => {
    return (
        <div>
            <img style={{width: '300px'}} src={a} alt='Logo'/>
            <img style={{width: '300px'}} src={b} alt='Logo'/>
            <img style={{width: '300px'}} src={c} alt='Logo'/>
            <img style={{width: '300px'}} src={d} alt='Logo'/>
            <img style={{width: '300px'}} src={e} alt='Logo'/>
            <img style={{width: '300px'}} src={f} alt='Logo'/>
            <img style={{width: '300px'}} src={g} alt='Logo'/>
            <img style={{width: '300px'}} src={h} alt='Logo'/>
            <img style={{width: '300px'}} src={i} alt='Logo'/>
        </div>
    )
}

export default Gallery


