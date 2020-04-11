import styled, { keyframes } from "styled-components";

const Glitch = keyframes`
  0% {
    transform: skewY(-10deg) scale(1.5) translateY(-5%);
  }
  5% {
    transform: skewY(15deg) scale(1) translateX(20%) rotate(30deg);
  }
  15% {
    transform: skewY(50deg) scale(1.2) translateY(30px);
  }
  20% {
    transform: skewY(30deg) scale(2) rotate(-60deg);
  }
  30% {
    transform: skewY(0deg) scale(1) rotate(0deg);
  }
  100% {
    transform: skewY(0deg) scale(1); 
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
type Props = { nth: number; per?: number };
export const Wrapper = styled.div<Props>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${props => 100 / (props.per || 10)}%;
  height: 100%;
  overflow: hidden;
  & > p {
    position: absolute;
    top: 0;
    white-space: nowrap;
  }
  transition: all 300ms ease-in-out;
  left: ${props => (props.nth - 1) * (100 / (props.per || 10))}%;
  & > p {
    left: -${props => (props.nth - 1) * 100}%;
  }
  animation: ${Glitch} ${props => animationTime(props)}s ease ${props => animationTime(props)}s infinite;
`;

export const Placeholder = styled.div`
  visibility: hidden;
`;

export const Text = styled.p<{ color?: string }>`
  margin: 0;
  padding: 0;
  font-size: 64px;
  font-weight: 600;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
  color: ${props => props.color || "#000"};
`;

function animationTime(props: Props) {
  return Math.abs((props.per || 10) - props.nth) * 0.01 * Math.random();
}
