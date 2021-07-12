import React from "react";
import spinner from "../../../assets/images/spinner.gif";

const Preloader = () => {
  return (
    <div>
      <img src={spinner} alt="spinner" />
    </div>
  );
};

export default Preloader;
