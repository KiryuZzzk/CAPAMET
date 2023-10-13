import { Grid, Typography } from '@mui/material';
import { ImCalendar } from 'react-icons/im';
import {Box} from '@mui/material';
import { colorSecundario } from '../UI/variables';
import { certificaciones } from '../UI/certificaciones';
import { Fade } from "react-reveal";
import ParallaxImage from "../ParallaxImage/ParallaxImage";


export default function ProgrammedCoursessm(props){
    return <Fade bottom>

     <Box display= "flex" flexDirection='column' paddingTop="7em" justifyContent="center">
        <Typography variant="h6" width="50%" m="auto">Ofrecemos una amplia gama de cursos para ayudarte a alcanzar tus metas profesionales en la atención médica de emergencia. 
            Desde capacitación básica para Técnicos en Emergencias Médicas hasta cursos especializados para paramédicos y personal de rescate, 
            nuestro equipo está aquí para ayudarte a alcanzar tu máximo potencial. <br></br><br></br>
        Nuestros cursos están diseñados para ser prácticos y orientados a la acción, y se basan en la última investigación y tecnología en el campo
        de la atención médica de emergencia.</Typography>
        <Grid spacing={4} width="100%" m="auto" sx={{ boxSizing:"border-box"}}>
        {
            certificaciones.map((certificacion)=> <img src={certificacion.imagen} alt={certificacion.asc} width="50%"/>)
            }
        </Grid>
    </Box>
    <ParallaxImage idImage={props.id}/>

    <Box sx={{display:"flex", justifyContent: 'center', marginTop:"2em" }}>
    <ImCalendar size={60}/>
    <Typography variant="h2" sx={{fontSize:"2.5rem", fontWeight:"400", 
    lineHeight:"4.5rem", borderBottom:"4px solid",borderColor:colorSecundario, textAlign:"center", mx:"5rem"}}> 
    {props.material} </Typography>
    
    </Box>

    </Fade>

}
