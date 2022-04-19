import React from "react";
import { ButtonStyle } from "./style";

const Button = ({ children, type, bgcolor, width, height, onClick }) => {
  return (
    <ButtonStyle
      type={type}
      bgcolor={bgcolor}
      width={width}
      height={height}
      onClick={onClick}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
