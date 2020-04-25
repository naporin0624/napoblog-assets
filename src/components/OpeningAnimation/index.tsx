import React from "react";
import { Container, TopWindow, BottomWindow, BlurContainer, Split } from "./styles";

type Props = {
  children: React.ReactNode;
};

export function OpeningAnimation(props: Props) {
  const { children } = props;
  return (
    <Container>
      <Split />
      <TopWindow />
      <BottomWindow />
      <BlurContainer>{children}</BlurContainer>
    </Container>
  );
}
