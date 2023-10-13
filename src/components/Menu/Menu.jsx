import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { colorPrimario, colorSecundario } from '../UI/variables';
import { nombre } from '../UI/empresa'
import image from "../../assets/img/logo-64.png"
import { useEffect } from 'react';


export default function ButtonAppBar(props) {

const {setPage} = props;


useEffect(() => {
  window.scrollTo(0, 0)}, [])


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor:colorPrimario }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >

            <img src={image} alt="logo" style={{height:"60px"}}/>
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, textTransform: 'uppercase', fontWeight: 'bold'  }}>
            {nombre}
          </Typography>
          <Button color="inherit" onClick={() => {props.setPage("Home");window.scrollTo(0, 0);}}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textTransform: 'capitalize', fontWeight: 'bold'}}>
            Inicio
          </Typography></Button>
          <Button color="inherit" onClick={() => {setPage("Courses");window.scrollTo(0, 0);}}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textTransform: 'capitalize', fontWeight: 'bold' }}>
            Cursos
          </Typography></Button>
          <Button color="inherit" onClick={() => {setPage("Diplomados");window.scrollTo(0, 0);}}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textTransform: 'capitalize', fontWeight: 'bold'}}>
            Diplomados
          </Typography></Button>
          <Button color="inherit" onClick={() => {setPage("Contact");window.scrollTo(0, 0);}}><Typography variant="h6" component="div" sx={{ flexGrow: 1, textTransform: 'capitalize', fontWeight: 'bold'}}>
            Contacto
          </Typography></Button>
          <Button color="inherit" onClick={() => {setPage("Home");window.scrollTo(0, 0);}} sx={{backgroundColor: colorSecundario }}><Typography variant="h6" component="div" sx={{ flexGrow: 1, textTransform: 'capitalize', 
          fontWeight: 'bold', color:"black"}}>
            Plataforma educativa
          </Typography></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
