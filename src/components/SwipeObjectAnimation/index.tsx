import React, { useMemo, useCallback, useRef, useState, Fragment } from "react";
import { Container, Box, Button } from "./styles";

export const SwipeObjectAnimation = () => {
  const parentBoxElement = useRef<HTMLDivElement | null>(null);
  const targetDragElement = useRef<HTMLDivElement | null>(null);
  const [boxCount, setBoxCount] = useState(1);
  const posToNum = useCallback((s: string) => parseFloat(s.replace("px", "").trim()), []);
  const makeArr = useCallback((n: number) => {
    const arr: number[] = [];
    for (let i = 0; i < n; i++) arr.push(i);
    return arr;
  }, []);
  const cardNum = useMemo(() => makeArr(boxCount), [boxCount]);

  const dragBox = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const el = e.target as HTMLDivElement;
    targetDragElement.current = el;
  }, []);

  const releaseBox = useCallback(() => {
    targetDragElement.current = null;
  }, []);

  const movingBox = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (!targetDragElement.current) return;
      const style = targetDragElement.current.style;

      let posY = posToNum(style.top) + e.movementY;
      posY = posY > 275 ? 275 : posY;
      posY = posY < 25 ? 25 : posY;
      let posX = posToNum(style.left) + e.movementX;
      posX = posX > 275 ? 275 : posX;
      posX = posX < 25 ? 25 : posX;

      targetDragElement.current.style.top = `${posY}px`;
      targetDragElement.current.style.left = `${posX}px`;
    },
    [targetDragElement],
  );

  return (
    <Fragment>
      <Button onClick={() => setBoxCount(c => c + 1)}>押すとボックスが増えるよ</Button>
      <Container ref={parentBoxElement}>
        {cardNum.map(n => (
          <Box
            key={n}
            style={{ top: "25px", left: "25px" }}
            onMouseDown={dragBox}
            onMouseUp={releaseBox}
            onMouseMove={movingBox}
          />
        ))}
      </Container>
    </Fragment>
  );
};
