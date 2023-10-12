import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styled from 'styled-components'
import { images } from '../UI/empresa';
import { Box } from '@mui/material';
import { fondoClaro } from '../UI/variables';
import { imagesDesc } from '../UI/empresa';




export default function SlideShow() {

    const Slides = styled.h1`
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: cover;
        height: 18em;
    `;

    const Spans = styled.span`
    position:absolute;
    bottom: 1.5em;
    margin:auto;
    color: white;
    font-weight: bold;
    font-size: 2em;
    text-align: center;
    background-color: rgba(0, 0, 0,0.8);

`;

    return (
        <Box sx ={{width: "60%", mx: "auto", boxShadow:4, boxSizing:"border-box", 
        marginTop: "30px", px:"10px", py:"0px", borderRadius:3, bgcolor:fondoClaro} }>
        <Slide pauseOnHover={false} duration={"3500"}>
            {
            images.map((image,index)=> <div>
                    <Slides style={{ 'backgroundImage': `url(${images[index]}) `, height:'400px'}}></Slides>
                    <Spans>{imagesDesc[index]}</Spans>
                </div>
            )
            }
        </Slide>
        </Box>
    );
};


