import styled from "styled-components";
import { TransitionGroup } from "react-transition-group";
import transition from "styled-transition-group";

export const Container = styled(TransitionGroup)`
  position: absolute;
  top: 0px;

  display: flex;
  width: 300px;
  overflow-x: scroll;
  margin: 12px;
`;

export const AnimationBox = transition.p`
  padding: 8px 16px;
  font-size: 13px;
  border: solid 1px #c1c1c1;
  margin: 0 8px;
  border-radius: 3px;
  background-color: #c1c1c1;
  color: white;
  cursor: pointer;

  &:enter {
    opacity: 0;
  }
  &:enter-active {
    opacity: 1;
    transition: all 0.8s ease-out;
  }
  &:exit {
    opacity: 1;
  }
  &:exit-active {
    opacity: 0;
    transition: all 0.8s ease-out;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  margin-top: 56px;
`;
export const Input = styled.input``;
export const Submit = styled.button``;
