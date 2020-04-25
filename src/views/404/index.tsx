import React, { useRef } from "react";
import { Container, Center } from "./styles";
import { NotFound } from "@/components/404";
import { useDrag } from "moveable-hooks";

export const NotFoundView = () => {
  const ref = useRef(null);
  useDrag({ ref });
  return (
    <Container>
      <Center ref={ref}>
        <NotFound />
      </Center>
    </Container>
  );
};
