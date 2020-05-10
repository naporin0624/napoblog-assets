import React, { useEffect, useRef } from "react";
import { main } from "./scripts";

export function BallReflection() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    main(el);
  }, []);

  return (
    <div ref={ref} style={{ width: "100vw", height: "100vh" }}>
      <p id="aa"></p>
    </div>
  );
}
