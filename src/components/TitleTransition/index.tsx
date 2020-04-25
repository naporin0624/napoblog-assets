import React from "react";
import transition from "styled-transition-group";
import styled from "styled-components";

const Base = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 36px;
`;

export const Title = transition(Base)`
  &:enter {
    opacity: 0;
    transform: translateX(-20px);
  }
  &:enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 2000ms ease-in-out;
  }
  &:exit {
    opacity: 1;
    transform: translateX(0);
  }
  &:exit-active {
    opacity: 0;
    transform: translateX(-20px);
    transition: all 2000ms ease-in-out;
  }
`;

type Props = {
  show: boolean;
  children?: React.ReactNode;
};
export function TitleTransition(props: Props) {
  return (
    <Title in={props.show} timeout={2000} unmountOnExit>
      {props.children}
    </Title>
  );
}
