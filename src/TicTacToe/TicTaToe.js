import { useCallback, useMemo } from "react";
import { useState } from "react";
import styled from "styled-components";

const fillGridWithNull = () => new Array(9).fill(null);
const getGridValue = (state) => (state ? "X" : "0");
const winnerIndexes = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function TicTacToe() {
  const [gridValue, changeGridValue] = useState(fillGridWithNull());
  const [turn, changeTurn] = useState(true);

  const onGridClick = (index) => {
    changeGridValue((previousState) => {
      previousState.splice(index, 1, getGridValue(turn));
      return previousState;
    });
    changeTurn((previousState) => !previousState);
  };

  const caclcualteWinner = useMemo(() => {
    for (const element of winnerIndexes) {
      let [a, b, c] = element;
      if (gridValue[a] === gridValue[b] && gridValue[b] === gridValue[c])
        return gridValue[a];
    }
    return null;
  }, [turn]);

  const turnText = (turn && "X's Turn") || "0's turn";
  return (
    <>
      {caclcualteWinner ? `winner is  ${caclcualteWinner}` : turnText}

      <Wrapper>
        {gridValue.map((elem, index) => {
          return (
            <Box
              key={`${index}+i`}
              onClick={() => onGridClick(index)}
              disabled={elem !== null}
            >
              {elem}
            </Box>
          );
        })}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 40%;
  height: 40%;
  background-color: lightblue;

  display: flex;
  flex-wrap: wrap;
`;
const Box = styled.span`
  min-width: 33.33%;
  min-height: 33.33%;
  border: 1px solid black;
  text-align: center;
  ${({ disabled }) => (disabled ? `pointer-events: none;` : ``)}
`;
export default TicTacToe;
