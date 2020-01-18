import React, { Fragment, useState } from "react";
import { CheckBoxContainer, Flex } from "./styles";
import { CheckBox } from "./CheckBox";
import { CheckBoxBug } from "./CheckBoxBug/index";

export const LottieCheckBox = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Fragment>
      <button onClick={() => setOpen(!open)}>push!</button>
      <CheckBoxContainer timeout={300} unmountOnExit in={open}>
        <Flex onClick={() => setChecked(!checked)}>
          <CheckBox checked={checked} />
          <CheckBoxBug checked={checked} />
        </Flex>
      </CheckBoxContainer>
    </Fragment>
  );
};
