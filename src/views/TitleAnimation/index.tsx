import React, { useState, useEffect } from "react";
import { TitleTransition } from "@/components/TitleTransition";

export function TitleAnimation() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const id = setInterval(() => {
      setShow(b => !b);
    }, 3000);

    return () => {
      clearInterval(id);
    };
  }, []);
  return <TitleTransition show={show}>Hello</TitleTransition>;
}
