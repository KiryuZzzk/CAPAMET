import React from "react"
import { Box } from "@mui/material";
import {Typography} from "@mui/material";
import { fondoClaro, colorSecundario } from "../UI/variables";
import mapa from "../../assets/img/mapa.png"
import {useMediaQuery} from "@mui/material";


export default function Maps(){

    const matches= useMediaQuery('(min-width:1032px)');

    return <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      my:"2em",
      mx:"auto",
      width: "50%",
      backgroundColor: fondoClaro,
      p:"2em", borderRadius:"10px", boxSizing:"border-box"
    }}
    >
        {
        matches ? <Typography variant="h2"  sx={{fontSize:"3em", fontWeight:"400", 
        lineHeight:"4.5rem", textAlign:"center" , borderBottom:"4px solid",borderColor:colorSecundario, width:"50%"}}> 
        Ubicación </Typography> : <Typography variant="h2" sx={{fontSize:"5vw", fontWeight:"400", 
        lineHeight:"4.5rem", borderBottom:"4px solid",borderColor:colorSecundario, textAlign:"center", mx:"auto", width:"50%"}}> 
        Ubicación </Typography>

        }
        <img src={mapa} alt="Mapa" width="90%"/>
    </Box>

}