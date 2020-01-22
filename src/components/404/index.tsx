import React from "react";
import Lottie from "react-lottie";
import NotFoundAnimation from "./404.json";

const options = {
  loop: true,
  autoplay: true,
  animationData: NotFoundAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export const NotFound = () => {
  return <Lottie options={options} width={500} />;
};
