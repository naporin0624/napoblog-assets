import React, { Fragment, useState } from "react";
import { CheckBoxContainer } from "./styles";
import { CheckBox } from "./CheckBox";

export const LottieCheckBox = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Fragment>
      <button onClick={() => setOpen(!open)}>push!</button>
      <CheckBoxContainer timeout={300} unmountOnExit in={open}>
        <div onClick={() => setChecked(!checked)}>
          <CheckBox checked={checked} />
        </div>
      </CheckBoxContainer>
    </Fragment>
  );
};
