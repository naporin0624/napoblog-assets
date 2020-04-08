import React, { useState, useCallback, useMemo } from "react";
import { AnimContainer, Tab, MoveContainer, Next, Prev, Container } from "./styles";

type Props = {
  tabNames: string[];
  per?: number;
};

export function AntTab(props: Props) {
  const [page, setPage] = useState(1);
  const [active, setActive] = useState(props.tabNames.length > 0 ? props.tabNames[0] : "");
  const per = useMemo(() => props.per || 3, [props.per]);
  const maxPage = useMemo(() => Math.ceil(props.tabNames.length / per), [props.tabNames, per]);

  const onClickNext = useCallback(() => setPage(p => (p < maxPage ? p + 1 : maxPage)), [maxPage]);
  const onClickPrev = useCallback(() => setPage(p => (p > 0 ? p - 1 : 1)), []);

  return (
    <Container>
      <Prev onClick={onClickPrev} />
      <AnimContainer per={per}>
        <MoveContainer per={per} page={page}>
          {props.tabNames.map(name => (
            <Tab key={name} active={active === name} onClick={() => setActive(name)}>
              {name}
            </Tab>
          ))}
        </MoveContainer>
      </AnimContainer>
      <Next onClick={onClickNext} />
    </Container>
  );
}
