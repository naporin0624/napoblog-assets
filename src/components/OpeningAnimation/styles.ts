import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const Window = styled.div`
  z-index: 3;
  position: fixed;
  width: 100%;
  height: 50%;
  background: #000000;
`;

const ToUp = keyframes`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-100%);
  }
`;

const ToDown = keyframes`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(100%);
  }
`;

export const TopWindow = styled(Window)`
  top: 0;
  left: 0;
  animation: ${ToUp} 4s cubic-bezier(1, 0.01, 0.49, 0.89);
  animation-delay: 1s;
  animation-fill-mode: forwards;
`;

export const BottomWindow = styled(Window)`
  top: 50%;
  left: 0;
  animation: ${ToDown} 4s cubic-bezier(1, 0.01, 0.49, 0.89);
  animation-delay: 1s;
  animation-fill-mode: forwards;
`;

const BlurAnim = keyframes`
  90% {
    filter: blur(6px);
  }
  100% {
    filter: blur(0px);
  }
`;

export const BlurContainer = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation-fill-mode: forwards;
  animation: ${BlurAnim} 5.5s ease-out;
`;

const SplitAnim = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

export const Split = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 4;
  background: white;
  height: 1px;
  /* width: 100%; */
  /* animation-fill-mode: forwards; */
  animation: ${SplitAnim} 1s ease-in;
`;
