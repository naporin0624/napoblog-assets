import React from "react";
import { Stick, Triangle } from "./styles";
import { useEnhance } from "./enhance";

type Pos = {
  x: number;
  y: number;
};

type Props = {
  start: Pos;
  end: Pos;
  lineWeight?: number;
};

export function StartEndArrow(props: Props) {
  const { style } = useEnhance(props);

  return <Stick style={style} />;
}
