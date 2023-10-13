import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { colorPrimario} from '../UI/variables';
import image from "../../assets/img/logo-64.png"
import { useEffect } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BiMenuAltRight } from 'react-icons/bi';


export default function ButtonAppBarsm(props) {

    const {setPage} = props;


    useEffect(() => {
      window.scrollTo(0, 0)}, [])
    

      const [anchorEl, setAnchorEl] = React.useState(null);
      const open = Boolean(anchorEl);
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      
      };
      const handleClose = (event) => {
        setAnchorEl(null);
        setPage(event.currentTarget.role);
        window.scrollTo(0, 0)
      };

      const handleCloseMenu = () => {
        setAnchorEl(null);
      };
    
      return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed" sx={{ bgcolor:colorPrimario }}>
            <Toolbar sx={{display:"flex", justifyContent: 'space-between'}}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
    
                <img src={image} alt="logo" style={{height:"60px"}}/>
              </IconButton>
              <div>
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <BiMenuAltRight size={60} color="white"/>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleCloseMenu}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose} role="Home">Inicio</MenuItem>
                <MenuItem onClick={handleClose} role="Courses">Cursos</MenuItem>
                <MenuItem onClick={handleClose} role="Diplomados">Diplomados</MenuItem>
                <MenuItem onClick={handleClose} role="Contact">Contacto</MenuItem>
                <MenuItem onClick={handleClose} role="Home">Plataforma Educativa</MenuItem>
              </Menu>
            </div>
            </Toolbar>
          </AppBar>
        </Box>
      );
    }
    