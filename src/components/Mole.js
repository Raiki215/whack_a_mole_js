import React from "react";
import styled from "styled-components";

const StyledMole = styled.div`
  background-color: "sienna";
  border-radius: 50% 50% 20% 20%;
  cursor: pointer;
  height: 5.5em;
  position: absolute;
  bottom: -5.5em;
  width: 65%;

  &::after {
    border-radius: 50% 50% 20% 20%;
    content: "";
    display: block;
    height: 100%;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  & .mole-eyes {
    position: absolute;
    top: 1.4em;
    left: 0;
    right: 0;
  }

  & .mole-eye {
    border-radius: 50%;
    color: #333;
    font-family: none;
    font-size: 1em;
    line-height: 0;
    position: absolute;
    top: 0;

    &:nth-child(1) {
      left: 1.2em;
    }

    &:nth-child(2) {
      right: 1.2em;
    }
  }

  & .mole-mouth {
    background-color: tan;
    border-radius: 50%;
    display: block;
    height: 2em;
    position: absolute;
    top: 1.8em;
    left: calc(50% - (2.4em / 2));
    width: 2.4em;
  }

  & .mole-nose {
    background-color: #333;
    border-radius: 100%;
    position: absolute;
    top: calc(50% - 0.3em);
    left: calc(50% - 0.3em);
    height: 0.6em;
    width: 0.6em;
  }

  & .mole-whiskers {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;

    &-left {
      left: -80%;

      &::before {
        transform: rotate(15deg);
      }

      &::after {
        transform: rotate(-15deg);
      }
    }

    &-right {
      right: -80%;

      &::before {
        transform: rotate(-15deg);
      }

      &::after {
        transform: rotate(15deg);
      }
    }

    &-whisker,
    &::before,
    &::after {
      background-color: #fff;
      display: block;
      position: absolute;
      height: 0.01em;
      left: 0;
      width: 100%;
    }

    &::before,
    &::after {
      content: "";
    }

    &-whisker {
      top: calc(50% - 0.005em);
    }

    &::before {
      top: 0.4em;
    }

    &::after {
      bottom: 0.4em;
    }
  }
`;

const Mole = ({ className, mole, ...props }) => {
  return (
    <StyledMole className={`${className} ${className}-${mole.num}`} {...props}>
      <div className="mole-eyes">
        <div className="mole-eye">●</div>
        <div className="mole-eye">●</div>
      </div>
      <div className="mole-mouth">
        <div className="mole-nose"></div>
        <div className="mole-whiskers mole-whiskers-left">
          <span className="mole-whiskers-whisker"></span>
        </div>
        <div className="mole-whiskers mole-whiskers-right">
          <span className="mole-whiskers-whisker"></span>
        </div>
      </div>
    </StyledMole>
  );
};

export default Mole;
