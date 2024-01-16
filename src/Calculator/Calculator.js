import { useState } from "react";
import styled from "styled-components";

const numberPad = new Array(10)
  .fill(null)
  .map((elem, index) => index)
  .reverse();
const operationPad = ["*", "/", "+", "-"];
const intialValue = 0;

function Calculator() {
  const [value, changeValue] = useState(intialValue);

  const numberPress = (keyNo) => {
    let appendValue = value !== 0 ? `${value}` + `${keyNo}` : `${keyNo}`;
    changeValue(appendValue);
    // debugger;
  };

  return (
    <Wrapper>
      <div className="card" style={{ width: "20rem" }}>
        <div className="card-header">Calculator</div>
        <div className="card-body">
          <h4 className="card-title"> {value} </h4>
          <KeyContainer>
            <NumberContainer>
              {numberPad.map((element, index) => {
                return (
                  <StyledNumberPad onClick={() => numberPress(element)}>
                    {element}
                  </StyledNumberPad>
                );
              })}
              <StyledNumberPad onClick={() => numberPress(".")}>
                .
              </StyledNumberPad>
            </NumberContainer>
            <OperationContainer>
              {operationPad.map((element, index) => {
                return <StyledOperatorPad>{element}</StyledOperatorPad>;
              })}
            </OperationContainer>
          </KeyContainer>
          <AdditionalKeys>
            <StyledAdditionalButton className="btn-warning">
              =
            </StyledAdditionalButton>
            <StyledAdditionalButton className="btn-danger">
              Clear
            </StyledAdditionalButton>
          </AdditionalKeys>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex: auto;

  justify-content: center;
  align-items: center;
`;

const KeyContainer = styled.div`
  display: flex;
`;

const StyledNumberPad = styled.button`
  width: 33.33%;
`;

const StyledOperatorPad = styled.button`
  width: 100%;
`;

const NumberContainer = styled.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  :nth-last-child(2) {
    width: 66.66%;
  }
`;

const OperationContainer = styled.span``;

const AdditionalKeys = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledAdditionalButton = styled.button`
  width: 100%;
`;

export default Calculator;
