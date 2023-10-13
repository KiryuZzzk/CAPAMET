import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Cards({id,nombre, asc, fecha, ubicacion, costo, imagen, colorTarjeta, setPage}) {



  
  return (
    <Card sx={{ width: "20%", m:"1em", p:"0.5em", borderRadius:"1em", backgroundColor:colorTarjeta, minWidth:"20em"}}>
      <CardActionArea onClick={()=>{ setPage("Contact")}} sx={{ height:"40em", width:"100%", display:"flex", flexDirection:"column", alignContent: 'space-between'}}>
        <CardMedia sx={{borderRadius:"1em", boxSizing:"border-box"}}
          component="img"
          height="65%"
          image={imagen}
          alt={nombre}
        />
        <CardContent sx={{margin:"5px", height:"35%",width:"80%",display:"flex", flexDirection:"column", boxSizing:"border-box"}}>
          <Typography gutterBottom variant="h5">
            {nombre}
            <Typography variant="h5" color="text.secondary">
              {asc}
            </Typography>
          </Typography>

          <Typography variant="h6" color="text.secondary">
            {fecha}  {ubicacion}
          </Typography>
          <Typography variant="h5" sx={{paddingTop:"10px"}}>
            {costo}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}