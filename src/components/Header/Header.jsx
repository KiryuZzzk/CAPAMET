import { colorSecundario } from "../UI/variables";
import SlideShow from "../SlideShow/SlideShow";
import Title from "../Title/Title";
import {Box} from "@mui/material";

export default function Header(){
    return<Box sx={{display:"flex", boxSizing:"border-box",  margiTop:"0.5em", height: "80%", 
    bgColor: colorSecundario, padding: "6em 1em 3em", flexWrap:"wrap", justifyContent: 'space-around',  alignItems: 'stretch', flexGrow: 1}}>
        <Title/>
        <SlideShow/>
    </Box>
}

