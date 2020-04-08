import { useState, useMemo, useCallback } from "react";

type Props = {
  tabNames: string[];
  tabWidth?: number;
};

function swap<T extends string | number>(array: T[], idx1: number, idx2: number) {
  const work = [...array];
  work[idx1] = array[idx2];
  work[idx2] = array[idx1];
  return work;
}

export function useEnhance(props: Props) {
  const { tabNames } = props;

  const initPosition = useMemo(() => [...new Array(tabNames.length)].map((_, idx) => idx), [tabNames]);
  const [order, setOrder] = useState(initPosition);
  const tabWidth = useMemo(() => props.tabWidth || 64, [props.tabWidth]);
  const next = useCallback((idx: number) => {
    setOrder(o => {
      const currentIndex = o.findIndex(o => o === idx);
      if (currentIndex > o.length - 2) return o;
      return swap(o, currentIndex, currentIndex + 1);
    });
  }, []);
  const prev = useCallback((idx: number) => {
    setOrder(o => {
      const currentIndex = o.findIndex(o => o === idx);
      if (currentIndex < 1) return o;
      return swap(o, currentIndex - 1, currentIndex);
    });
  }, []);

  return { order, setOrder, tabWidth, prev, next };
}
