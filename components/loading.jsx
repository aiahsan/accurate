import React from "react";
import Lottie from "react-lottie";
import animationData from "./loading.json";

const LoadingAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="posanimatiom">
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default LoadingAnimation;
