import styled from "styled-components";

export const Stick = styled.div`
  position: absolute;
  box-sizing: border-box;
  background: black;

  &:after {
    content: "";
    transform-origin: top right;
    position: absolute;
    right: 0;
    width: 6px;
    height: 6px;
    border-top: 3px solid #7a0;
    border-right: 3px solid #7a0;
    transform: rotate(-45deg);
  }
`;

export const Triangle = styled.div``;
