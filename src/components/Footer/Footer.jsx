import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { colorPrimario } from '../UI/variables';
import { nombre } from '../UI/empresa'
import image from "../../assets/img/logo-64.png"
import { Stack } from '@mui/material';
import Slide from 'react-reveal/Slide';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';


export default function Footer() {
  return ( <>
    <Slide bottom>
    <Box sx={{ flexGrow: 1, backgroundColor:colorPrimario, px:"2em"}}> <Stack   direction="row"
    justifyContent="space-around"
    alignItems="center"
    spacing={2}>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >

            <img src={image} alt="logo" style={{height:"60px"}}/>
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, textTransform: 'uppercase', fontWeight: 'bold', color:"white" }}>
            {nombre}
          </Typography>
          <FaFacebookSquare aria-label="Facebook.com" color="white" size={50} onClick={() => window.open('https://www.facebook.com/gilberto.capamet')}/>
          <FaInstagramSquare aria-label="Instagram.com" color="white" size={50} onClick={() => window.open('https://www.instagram.com/capametcursos/')}/>
        </Stack>
    </Box>
    </Slide>
    <Typography sx={{backgroundColor:colorPrimario, color:"white", textAlign:"center", pt:"0", mt:"0"}}>2023©</Typography>
    </>
  );
}
