import React, { useRef, useEffect } from "react";
import Lottie from "react-lottie";
import checkbox from "./checkbox1.json";
import { AnimationItem } from "lottie-web";

interface LottieType extends Lottie {
  anim: AnimationItem;
}
interface Props {
  checked: boolean;
}
const options = {
  loop: false,
  autoplay: false,
  animationData: checkbox,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export const CheckBox = (props: Props) => {
  const { checked } = props;
  const ref = useRef<LottieType>(null);
  const prev = useRef<boolean>();

  useEffect(() => {
    if (prev.current === undefined) {
      prev.current = checked;
      checked && ref.current?.anim.goToAndPlay(ref.current?.anim.getDuration(true), true);
      return;
    }

    if (checked) {
      ref.current?.anim.goToAndPlay(0, true);
    } else {
      ref.current?.anim.setDirection(-1);
      ref.current?.anim.goToAndPlay(15, true);
    }
  }, [checked]);
  return <Lottie ref={ref} options={options} width={300} />;
};
