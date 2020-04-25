import React, { Fragment } from "react";
import { OpeningAnimation } from "@/components/OpeningAnimation";
import styled from "styled-components";

const Center = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function OpeningAnimationDemo() {
  return (
    <Fragment>
      <OpeningAnimation>
        <Center>
          <h1>Hello World</h1>
        </Center>
      </OpeningAnimation>
    </Fragment>
  );
}
