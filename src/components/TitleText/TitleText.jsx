import React from "react"
import { fondoClaro } from "../UI/variables";
import {Typography} from "@mui/material";
import {Stack} from "@mui/material";
import { Fade } from "react-reveal";
import { colorSecundario } from "../UI/variables";


export default function TitleText(props){

    const {title, description} = props;

    return <Fade bottom>
        <Stack direction="column" sx={{ marginTop:"2em", backgroundColor:fondoClaro, py:"2em"}}>
            <Typography variant="h2" sx={{fontSize:"2.5rem", fontWeight:"400", 
            lineHeight:"4.5rem", borderBottom:"4px solid",borderColor:colorSecundario, textAlign:"center", mx:"auto", width:"5em"}}> 
            {title} </Typography>
            <Typography variant="h5" sx={{pt:"1em", py:"2em", textAlign:"center", width:"80%", m:"auto"}}>
            {description}
            </Typography>
        </Stack>
    </Fade>

}