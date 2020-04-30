import { useMemo, CSSProperties } from "react";

type Pos = {
  x: number;
  y: number;
};

type Props = {
  start: Pos;
  end: Pos;
  lineWeight?: number;
};

export function useEnhance(props: Props) {
  const { start, end, lineWeight } = props;

  const height = useMemo(() => lineWeight ?? 2, [lineWeight]);
  const theta = useMemo(() => Math.atan((end.y - start.y) / (end.x - start.x)) + (end.x - start.x < 0 ? Math.PI : 0), [
    end.x,
    end.y,
    start.x,
    start.y,
  ]);
  const degree = useMemo(() => (theta / Math.PI) * 180, [theta]);
  const l = useMemo(() => Math.abs(degree !== 90 ? (end.x - start.x) / Math.cos(theta) : end.y - start.y), [
    degree,
    end.x,
    end.y,
    start.x,
    start.y,
    theta,
  ]);

  const style = useMemo<CSSProperties>(
    () => ({
      width: l,
      height,
      top: start.y - height / 2,
      left: start.x,
      transformOrigin: "left",
      transform: `rotate(${theta}rad)`,
    }),
    [l, start.y, start.x, height, theta],
  );

  return { style };
}
