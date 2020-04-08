import React from "react";

import { useEnhance } from "./enhance";

import { Container, TabBodyContainer } from "./styles";
import { Header } from "./Header";

type Props = {
  children: React.ReactElement[];
};

export function Tab(props: Props) {
  const { tabNames, activeIndex, setActiveIndex, activeTabBody } = useEnhance(props);

  return (
    <Container>
      <Header onClick={setActiveIndex} tabNames={tabNames} currentTab={activeIndex} />
      <TabBodyContainer>{activeTabBody}</TabBodyContainer>
    </Container>
  );
}
