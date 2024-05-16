import React, { ReactNode } from "react";
import "./Circle.css";

interface CircleProps {
  children: ReactNode;
  complete?: boolean;
}

const Circle: React.FC<CircleProps> = ({ children, complete }) => (
  <div
    className={`circle flex items-center justify-center ${
      complete ? "complete" : null
    }`}
  >
    <span className="circle-text">{children}</span>
  </div>
);

export default Circle;
