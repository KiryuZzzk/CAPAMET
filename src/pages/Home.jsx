import Header from "../components/Header/Header"
import { colorSecundario } from "../components/UI/variables";
import styled from "styled-components";
import About from "../components/About/About";

const Home = (props) => {

    const Div = styled.div`
    background-color: ${colorSecundario};
    width: auto;
  `;

  return (
    <Div>
        <Header/>
        <About></About>
    </Div>
  )
}

export default Home