import "./cssConfg/App.css";
import styled from "styled-components";
import Clock from "./Clock/Clock";
import StopWatch from "./Clock/Stopwatch/StopWatch";

function App() {
  return (
    <Container>
      <Clock />
      <StopWatch />
    </Container>
  );
}

const Container = styled.div``;
export default App;
