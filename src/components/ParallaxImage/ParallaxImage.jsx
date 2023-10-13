import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { imagesIntro } from "../UI/empresa";
import logoRojo from "../../assets/img/logo-rojo.png"
import logo from "../../assets/img/logo-rojosntxt.png"
import useMediaQuery from '@mui/material/useMediaQuery';
import './ParallaxImage.css';
import styled from "styled-components";

export default function ParallaxImage(props){
    const {idImage} = props;
    const matches1120 = useMediaQuery('(min-width:1335px)');

    const LogoSmall = styled.img`
    width: 30vw;
  `;

  const LogoBig = styled.img`
  width: 70%;
  min-width: 1000px;
  `;

    return <div className="container-body">
    <ParallaxBanner
                        layers={[
                          { image: imagesIntro[idImage], speed: -20 },
                        ]}
                        className="bg-container"
                      >
                        <div className="bg-container">
                            {matches1120? <LogoBig src={logoRojo}  alt="logo"/> : <LogoSmall src={logo}  alt="logo"/>}
                        </div>
    </ParallaxBanner>
    </div>


}