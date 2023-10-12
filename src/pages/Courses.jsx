import ProgrammedCourses from "../components/ProgrammedCourses/ProgrammedCourses";
import styled from "styled-components";
import { fondoClaro } from "../components/UI/variables";
import ProxCourses from "../components/ProxCourses/ProxCourses";
import {cursos} from "../components/UI/cursos"

const Courses = (props) => {
  const {setPage} = props;
  
    const Div = styled.div`
    background-color: ${fondoClaro};
    width: auto;
    `;

  return (
    <Div>
        <ProgrammedCourses material="Cursos" id={1}/>
        <ProxCourses cursos={cursos} colorTarjeta={fondoClaro} setPage={setPage}></ProxCourses>
    </Div>
  )
}

export default Courses