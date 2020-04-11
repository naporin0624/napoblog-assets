import React from "react";
import { Glitch } from "@/components/Glitch/";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Container = styled.div`
  background: #000;
  height: 100vh;
  width: 100vw;
  display: flex;
  place-items: center;
  justify-items: center;
`;

export function GlitchId() {
  const params = useParams<{ id: string }>();

  return (
    <Container>
      <a href={`https://twitter.com/${params.id}`}>
        <Glitch message={`@${params.id}`} color="white" />
      </a>
    </Container>
  );
}
