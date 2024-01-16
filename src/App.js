import "./cssConfg/App.css";
import styled from "styled-components";
import "papercss/dist/paper.min.css";
import Calculator from "./Calculator/Calculator";

function App() {
  return (
    <>
      <Calculator />
    </>
  );
}

const Container = styled.div``;

export default App;
