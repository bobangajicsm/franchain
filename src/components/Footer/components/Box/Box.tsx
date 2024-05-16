import React, { ReactNode } from "react";
import sandwatch from "../../../../assets/sandwatch.webp";
import "./Box.css";

interface BoxProps {
  children: ReactNode;
}

const Box: React.FC<BoxProps> = ({ children }) => {
  return (
    <div className="box-wrapper bg-white flex items-center flex-col justify-center">
      <img className="box-image" src={sandwatch} alt="sandwatch" />
      <p className="box-text font-medium mb-0">{children}</p>
    </div>
  );
};

export default Box;
