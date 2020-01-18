import styled from "styled-components";
import transition from "styled-transition-group";

export const Container = styled.div``;
export const CheckBoxContainer = transition.div`
  &:enter {
    opacity: 0;
  }
  &:enter-active {
    opacity: 1;
    transition: all 0.3s ease-out;
  }
  &:exit {
    opacity: 1;
  }
  &:exit-active {
    opacity: 0;
    transition: all 0.3s ease-out;
  }
`;

export const Flex = styled.div`
  display: flex;
`;
