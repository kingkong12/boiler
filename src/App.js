import TicTacToe from "./TicTacToe/TicTaToe";
import "./cssConfg/App.css";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <TicTacToe />
    </Container>
  );
}

const Container = styled.div`
  flex-grow: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default App;
