import ProgrammedCourses from "../components/ProgrammedCourses/ProgrammedCourses";
import styled from "styled-components";
import { fondoClaro } from "../components/UI/variables";
import ProxCourses from "../components/ProxCourses/ProxCourses";
import ProgrammedCoursessm from "../components/ProgrammedCourses/ProgrammedCoursessm";
import {diplomados} from "../components/UI/diplomados"
import { useMediaQuery } from "@mui/material";

const Diplomados = (props) => {
  const {setPage} = props;

    const Div = styled.div`
    background-color: ${fondoClaro};
    width: auto;
    `;
  const matches620 = useMediaQuery('(min-width:620px)');

  return (
    <Div>
        {
    matches620 ? <ProgrammedCourses material="Cursos" id={1}/> : <ProgrammedCoursessm material="Cursos" id={1}/>
        }
        <ProxCourses cursos={diplomados} colorTarjeta={fondoClaro} setPage={setPage}></ProxCourses>
    </Div>
  )
}

export default Diplomados