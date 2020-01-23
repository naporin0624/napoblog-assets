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
    if (!targetDragElement.current) return;

    const style = targetDragElement.current.style;
    let top = posToNum(style.top);
    let left = posToNum(style.left);
    top = top > 275 ? 275 : top;
    top = top < 25 ? 25 : top;
    left = left > 275 ? 275 : left;
    left = left < 25 ? 25 : left;
    style.top = `${top}px`;
    style.left = `${left}px`;
    targetDragElement.current = null;
  }, []);

  const movingBox = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (!targetDragElement.current) return;
      const style = targetDragElement.current.style;

      const posY = posToNum(style.top) + e.movementY;
      const posX = posToNum(style.left) + e.movementX;

      targetDragElement.current.style.top = `${posY}px`;
      targetDragElement.current.style.left = `${posX}px`;
    },
    [targetDragElement],
  );

  return (
    <Fragment>
      <Button onClick={() => setBoxCount(c => c + 1)}>押すとボックスが増えるよ</Button>
      <Container ref={parentBoxElement} onMouseMove={movingBox} onMouseUp={releaseBox}>
        {cardNum.map(n => (
          <Box key={n} style={{ top: "25px", left: "25px" }} onMouseDown={dragBox} onMouseUp={releaseBox} />
        ))}
      </Container>
    </Fragment>
  );
};
