import { colorSecundario } from "../components/UI/variables";
import styled from "styled-components";
import Forms from "../components/Forms/Forms";

const Contact = (props) => {
  const {setPage} = props;

    const Div = styled.div`
    background-color: ${colorSecundario};
    width: auto;
    height:100%;
    padding-top: 6em;
    display:flex;
    `;

  return (
    <Div>
      <Forms setPage={setPage}></Forms>
    </Div>
  )
}

export default Contact