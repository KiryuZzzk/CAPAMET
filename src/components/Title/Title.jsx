import React from 'react';
import styled from '@emotion/styled';
import image from "../../assets/img/logo.png";
import { Box } from '@mui/material';
import Zoom from 'react-reveal/Zoom';


export default function Title(){


    const ImgLogo = styled.img`
        height: 200px;
        width: auto;
        `;

        return <Box sx ={{ mx: "auto", boxShadow:0, boxSizing:"border-box", marginTop: "30px", px:"10px", py:"0px", borderRadius:3, display:"flex",
        justifyContent: 'center', alignItems: 'center'}}>
            <Zoom><ImgLogo src={image}/> </Zoom>
            </Box>
}