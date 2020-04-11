import React from "react";
import { Glitch } from "@/components/Glitch/";
import styled from "styled-components";

const Container = styled.div`
  background: #000;
  height: 100vh;
  width: 100vw;
  display: flex;
  place-items: center;
  justify-items: center;
`;

export function GlitchDemo() {
  return (
    <Container>
      <a href="https://twitter.com/naporin24690">
        <Glitch message={"@naporin24690"} color="white" />
      </a>
    </Container>
  );
}
