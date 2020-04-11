import React, { useState, useCallback } from "react";
import { Glitch } from "@/components/Glitch/";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Input = styled.input`
  margin: 0;
  padding: 0;
  margin-top: 128px;
  border: solid 1px #ccc;
  width: 80%;
  max-width: 600px;
  height: 32px;
`;
const Button = styled.button`
  outline: none;
  appearance: none;
  width: 64px;
  height: 34px;
  border: solid 1px #ccc;
  padding: 0;
  margin: 0;
`;

const Center = styled.div`
  text-align: center;
`;

export const GlitchContainer = styled.div`
  position: relative;
  margin: 64px 0;
`;

export function GlitchCustom() {
  const [value, setValue] = useState("naporin24690");
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value), []);
  const history = useHistory();
  const onClick = useCallback(() => history.push(`/glitch/${value}`), [history, value]);

  return (
    <Center>
      <GlitchContainer>
        <Glitch message={`@${value}`} color="black" />
      </GlitchContainer>
      <div>
        <Input placeholder={"input twitter id..."} value={value} onChange={onChange} />
        <Button onClick={onClick}>Enter</Button>
      </div>
    </Center>
  );
}
