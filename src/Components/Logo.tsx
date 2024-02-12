import React from "react";
import Logo from "./cuki-cica-1.jpeg";
import "../index.css";

const LogoComponent: React.FC = () => {
  return <img src={Logo} alt="Logo" id="logo" />;
};

export default LogoComponent;
