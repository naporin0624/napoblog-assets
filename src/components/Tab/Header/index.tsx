import React from "react";

import { useEnhance } from "./enhance";

import { Container, Button } from "./styles";

type Props = {
  onClick: (idx: number) => void;
  tabNames: string[];
  tabWidth?: number;
  currentTab: number;
};

export function Header(props: Props) {
  const { tabNames, onClick, currentTab } = props;
  const { order, next, prev, tabWidth } = useEnhance({ tabNames, tabWidth: props.tabWidth });

  const ref = React.useRef<HTMLDivElement>(null);
  const targetRef = React.useRef<number | null>(null);
  const initPosRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      const tabBtn = e.target;
      if (!(tabBtn instanceof HTMLButtonElement)) return;
      initPosRef.current = null;
      targetRef.current = null;
      tabBtn.style.zIndex = "1";
      tabBtn.style.left = `${order.findIndex(o => o === parseInt(tabBtn.value, 10)) * tabWidth}px`;
    };

    const el = ref.current;
    el?.addEventListener("mouseup", handler, { passive: true });

    return () => {
      el?.removeEventListener("mouseup", handler);
    };
  }, [order, tabWidth]);

  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      const tabBtn = e.target as HTMLButtonElement;
      if (!tabBtn || targetRef.current !== null) return;
      tabBtn.style.zIndex = "2";
      initPosRef.current = e.clientX;
      targetRef.current = parseInt(tabBtn.style.left.replace("px", ""), 10);
    };

    const el = ref.current;
    el?.addEventListener("mousedown", handler, { passive: true });

    return () => {
      el?.removeEventListener("mousedown", handler);
    };
  }, []);

  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      const el = e.target;
      const initPos = initPosRef.current;
      const target = targetRef.current;
      if (!(el instanceof HTMLButtonElement)) return;
      if (initPos === null) return;
      if (target === null) return;

      const sub = e.clientX - initPos;
      const distance = target + sub;

      if (sub > tabWidth / 2) {
        next(parseInt(el.value, 10));
      }
      if (-sub > tabWidth / 2) {
        prev(parseInt(el.value, 10));
      }
      el.style.left = `${distance}px`;
    };

    const el = ref.current;
    el?.addEventListener("mousemove", handler, { passive: true });

    return () => {
      el?.removeEventListener("mousemove", handler);
    };
  }, [next, prev, tabWidth]);

  return (
    <Container ref={ref}>
      {order.map((o, idx) => (
        <Button
          key={o}
          value={o}
          active={currentTab === o}
          onClick={() => onClick(o)}
          onMouseDown={() => onClick(o)}
          style={{ width: `${tabWidth}px`, left: `${tabWidth * idx}px` }}
        >
          {tabNames[o]}
        </Button>
      ))}
    </Container>
  );
}
