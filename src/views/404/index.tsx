import React from "react";
import { Container, Center } from "./styles";
import { NotFound } from "@/components/404";

export const NotFoundView = () => {
  return (
    <Container>
      <Center>
        <NotFound />
      </Center>
    </Container>
  );
};
