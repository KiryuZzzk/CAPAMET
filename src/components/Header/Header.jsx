import { colorSecundario } from "../UI/variables";
import SlideShow from "../SlideShow/SlideShow";
import Title from "../Title/Title";
import {Box} from "@mui/material";

export default function Header(){
    return<Box sx={{display:"flex", boxSizing:"border-box", height: "80%",
    bgColor: colorSecundario, padding: "6em 1em 3em", flexWrap:"wrap", justifyContent: 'space-around'}}>
        <Title/>
        <SlideShow/>
    </Box>
}

