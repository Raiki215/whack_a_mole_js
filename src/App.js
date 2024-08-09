import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import styled from "styled-components";
import { MOLE, MOLE_LENGTH } from "./constans";
import Mole from "./components/Mole";

const StyledApp = styled.div`
  padding: 1em;
  font-size: 4vmin;

  & .stage {
    background-color: #96d65e;
    display: flex;
    flex-wrap: wrap;
    padding: 0 1em 1em;
    position: relative;
    width: 20em;

    & .cell {
      display: flex;
      align-items: end;
      justify-content: center;
      width: calc(100% / 3);
    }
    & .hole {
      background-color: #431f07;
      border-radius: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 4.5em;
      width: 88%;

      &-mask {
        border-radius: 50%;
        display: flex;
        align-items: end;
        justify-content: center;
        overflow: hidden;
        padding-top: 1em;
        position: relative;
        width: 100%;
      }
    }
  }
`;

const App = () => {
  const moles = new Array(MOLE_LENGTH).fill(MOLE.default);

  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <div className="stage">
          {moles.map((mole, i) => (
            <div className="cell" key={i}>
              <div className="hole-mask">
                <div className="hole">
                  <Mole className="mole" mole={mole} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </StyledApp>
    </>
  );
};

export default App;
