import React from "react";
import { Container, Placeholder, Wrapper, Text } from "./styles";

type Props = {
  message: string;
  color: string;
  per?: number;
};

export function Glitch(props: Props) {
  const { message, color, per } = props;

  const el = [...new Array(per || 10)].fill(1).map((_, idx) => idx);
  return (
    <Container>
      {el.map(idx => (
        <Wrapper key={idx} nth={idx + 1} per={10}>
          <Text color={color}>{message}</Text>
        </Wrapper>
      ))}
      <Placeholder>
        <Text>{message}</Text>
      </Placeholder>
    </Container>
  );
}
