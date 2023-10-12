import ProgrammedCourses from "../components/ProgrammedCourses/ProgrammedCourses";
import styled from "styled-components";
import { fondoClaro } from "../components/UI/variables";
import ProxCourses from "../components/ProxCourses/ProxCourses";
import {diplomados} from "../components/UI/diplomados"

const Diplomados = (props) => {
  const {setPage} = props;

    const Div = styled.div`
    background-color: ${fondoClaro};
    width: auto;
    `;

  return (
    <Div>
        <ProgrammedCourses material="Diplomados" id={4}/>
        <ProxCourses cursos={diplomados} colorTarjeta={fondoClaro} setPage={setPage}></ProxCourses>
    </Div>
  )
}

export default Diplomados