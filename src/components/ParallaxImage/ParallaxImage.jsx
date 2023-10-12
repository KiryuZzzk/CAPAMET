import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { imagesIntro } from "../UI/empresa";
import logoRojo from "../../assets/img/logo-rojo.png"
import logo from "../../assets/img/logo-rojosntxt.png"
import useMediaQuery from '@mui/material/useMediaQuery';
import './ParallaxImage.css';

export default function ParallaxImage(props){
    const {idImage} = props;
    const matches1120 = useMediaQuery('(min-width:1335px)');

    return <div className="container-body">
    <ParallaxBanner
                        layers={[
                          { image: imagesIntro[idImage], speed: -20 },
                        ]}
                        className="bg-container"
                      >
                        <div className="bg-container">
                            {matches1120? <img src={logoRojo}  alt="logo"/> : <img src={logo}  alt="logo"/>}
                        </div>
    </ParallaxBanner>
    </div>


}