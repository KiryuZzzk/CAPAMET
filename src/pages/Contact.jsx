import { colorSecundario } from "../components/UI/variables";
import styled from "styled-components";
import Forms from "../components/Forms/Forms";
import Maps from "../components/Maps/Maps";

const Contact = (props) => {
  const {setPage} = props;

    const Div = styled.div`
    background-color: ${colorSecundario};
    width: auto;
    height:100%;
    padding-top: 6em;
    display:flex;
    flex-direction:column;
    `;

  return (
    <Div>
      <Forms setPage={setPage}></Forms>
      <Maps/>
    </Div>
  )
}

export default Contact