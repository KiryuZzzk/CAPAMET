import { Box } from "@mui/material"
import Cards from "../Cards/Cards"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { colorPrimario } from "../UI/variables";
import { contenidoClaro } from "../UI/variables";
import { colorEfectos } from "../UI/variables";
import {Typography} from "@mui/material";
import { BsFilterLeft } from 'react-icons/bs';
import { colorSecundario } from "../UI/variables";
import { useState } from "react";

export default function ProxCourses(props){
    const {cursos, colorTarjeta ,setPage} = props;

    const [asc, setAsc] = useState("");

    function filtarAsc(cursos){
        const ids = cursos.map(({ asc }) => asc);
        const filtered = cursos.filter(({ asc }, index) =>
            !ids.includes(asc, index + 1));
        return filtered;
    }

    function filtrarCursos(cursos, ascBuscada){
        let filtered = cursos.filter((curso) =>
            curso.asc ===ascBuscada);
            
        if (filtered.length ===0){
            filtered = cursos;
        };
        return filtered;
    }



    return (
        <>
        <Stack spacing={4} direction="row" useFlexGap flexWrap="wrap" justifyContent="center"  mt="2em" mb="1em" display="flex" p="0.5em">
            <BsFilterLeft size={50} sx={{margin:"0", backgroundColor:colorPrimario}}/>
            <Typography variant="h5" gutterBottom ml="0">Filtrar</Typography>
            <Button variant="contained" size="large" onClick={() => {setAsc("")}}
                        sx={{backgroundColor:colorPrimario, fontWeight:"bold", '&:focus,active':{backgroundColor:colorEfectos, color:"black"},
                        '&:hover':{backgroundColor:colorSecundario, color:"white", fontWeight:"bold"}}}>
                            Mostrar Todos</Button>
                {
                        filtarAsc(cursos).map((curso,id) => {
                        return <Button variant="contained" size="large" onClick={() => {setAsc(curso.asc)}} key={curso.nombre}
                        sx={{backgroundColor:colorPrimario, fontWeight:"bold", '&:focus,active':{backgroundColor:colorEfectos, color:"black"},
                        '&:hover':{backgroundColor:colorSecundario, color:"white", fontWeight:"bold"}}}>
                            {curso.asc}</Button>
                    })
                }

        </Stack>

        <Box sx={{display:"flex", boxSizing:"border-box",  margiTop:"0.5em", margin:"auto", width:"95%", borderRadius:"10px",
         padding: "0.5em 1em 3em", flexWrap:"wrap", justifyContent: 'space-around',  alignItems: 'stretch', flexGrow: 1, backgroundColor:contenidoClaro} }>
            {
                filtrarCursos(cursos, asc).map(curso => {
                    return <Cards id={curso.id} nombre={curso.nombre} asc={curso.asc} fecha={curso.fecha}  ubicacion={curso.ubicacion} costo={curso.costo} 
                    imagen={curso.imagen} colorTarjeta={colorTarjeta} setPage={setPage}>

                    </Cards>
                })
            }
        </Box>
        </>
    )
}