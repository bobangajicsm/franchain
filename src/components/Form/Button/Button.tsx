import React, { ReactNode } from "react";
import "./Button.css";

interface ButtonProps {
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button className="button">{children}</button>;
};

export default Button;
