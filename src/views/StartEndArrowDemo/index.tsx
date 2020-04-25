import React, { useRef, useCallback, useState } from "react";
import { useMouse, useKey } from "react-use";
import { StartEndArrow } from "@/components/StartEndArrow";

type Pos = {
  x: number;
  y: number;
};

export function StartEndArrowDemo() {
  const [start, setStart] = useState<Pos>({ x: 0, y: 0 });
  const ref = useRef(null);
  const { docX: x, docY: y } = useMouse(ref);

  useKey(
    "s",
    () => {
      setStart({ x, y });
    },
    undefined,
    [x, y],
  );

  return (
    <div ref={ref}>
      <StartEndArrow start={start} end={{ x, y }} lineWeight={3} />
    </div>
  );
}
