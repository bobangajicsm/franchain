import React, { useEffect, useState } from "react";
import "./Operator.css";
import Button from "../../../../../../components/Form/Button/Button";
import { Operator as OperatorType } from "../../../../../../Types";

const Operator: React.FC = () => {
  const [operator, setOperator] = useState<OperatorType[]>([]);

  useEffect(() => {
    getInitialData();
  }, []);

  const getInitialData = async () => {
    try {
      const response = await fetch("/operators.json");
      const data = await response.json();
      setOperator(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="flex operator">
      <div className="video"></div>
      <div>
        {operator.map((op) => (
          <p key={op.id} className="operator-text">
            {op.text}
          </p>
        ))}
        <Button>Invite an operator</Button>
      </div>
    </div>
  );
};

export default Operator;
