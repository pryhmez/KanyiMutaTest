import React from "react";

import logo from "../assets/logo.png";

const Logo = (props) => {
  return (
    <div className="logo-cont">
      <h2 style={{ color: props.color, fontWeight: "bold" }}>KANYI-MUTA</h2>
    </div>
  );
};

export default Logo;
