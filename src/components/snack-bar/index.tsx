import React, { Fragment } from "react";
import { createPortal } from "react-dom";

import { AnimContainer, CloseBtn } from "./styles";

type Props = {
  visible?: boolean;
  ref: Element;
  close: () => void;
  children?: React.ReactNodeArray;
};

function SnackBarContainer(props: Props) {
  return (
    <AnimContainer timeout={500} in={props.visible} unmountOnExit>
      {props.children}
      <CloseBtn onClick={props.close}>close</CloseBtn>
    </AnimContainer>
  );
}

export function SnackBar(props: Props) {
  createPortal(<SnackBarContainer {...props} />, props.ref);
}
