import React from "react";
import { ThreeCircles } from "react-loader-spinner";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="rgb(209, 209, 209)"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
