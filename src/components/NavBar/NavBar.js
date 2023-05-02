import React from "react";
import './NavBar.css'

const NavBar = ({onRouteChange}) => {
    return (
        <div>
            <section className="top-nav">
                <div>
                    Logo Here
                </div>
                <input id="menu-toggle" type="checkbox"/>
                <label className='menu-button-container' htmlFor="menu-toggle">
                    <div className='menu-button'></div>
                </label>
                <ul className="menu">
                    <li onClick={()=>onRouteChange('home')}>Home</li>
                    <li onClick={()=>onRouteChange('Gallery')}>Galeria</li>
                    <li onClick={()=>onRouteChange('home')}>O Mnie</li>
                    <li onClick={()=>onRouteChange('home')}>Kontakt</li>
                </ul>
            </section>
        </div>
    );
}

export default NavBar