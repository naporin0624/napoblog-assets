import { useState, useMemo } from "react";
import { ReactElement } from "react";

type Props = {
  children: ReactElement[];
};

export function useEnhance(props: Props) {
  const { children } = props;

  const [activeIndex, setActiveIndex] = useState(0);
  const [childrenOrder, setChildrenOrder] = useState(children);

  const tabNames = useMemo(
    () => childrenOrder.map((child, idx) => (child.props["data-tab"] as string) || `tab${idx}`),
    [children],
  );
  const activeTabBody = useMemo(() => children[activeIndex], [children, activeIndex]);

  return { activeIndex, tabNames, setActiveIndex, activeTabBody };
}
