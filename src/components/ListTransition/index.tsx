import React, { Fragment, useState, useCallback, useMemo } from "react";
import { Container, AnimationBox, FormContainer, Input, Submit } from "./styled";

export const ListTransition = () => {
  const [state, setState] = useState<string[]>(["hoge", "huga"]);
  const [value, setValue] = useState<string>("");
  const onAdd = useCallback(() => {
    if (value.length <= 0) return;

    setState(ls => [...ls, value]);
    setValue("");
  }, [value]);

  const onRemove = useCallback((s: string) => setState(l => l.filter(el => el !== s)), []);
  const disabled = useMemo(() => value.length <= 0, [value]);
  return (
    <Fragment>
      <Container>
        {state.map(s => (
          <AnimationBox key={s} unmountOnExit timeout={800} onClick={() => onRemove(s)}>
            {s}
          </AnimationBox>
        ))}
      </Container>
      <FormContainer>
        <Input value={value} onChange={e => setValue(e.target.value)} />
        <Submit onClick={onAdd} disabled={disabled}>
          Add Item
        </Submit>
      </FormContainer>
    </Fragment>
  );
};
