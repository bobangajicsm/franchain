import React, { ChangeEvent, useState } from "react";
import "./Process.css";
import Circle from "./components/Circle/Circle";
import Operator from "./components/Operator/Operator";

const Process: React.FC = () => {
  const [progressComplete] = useState(243);
  const [activeStep, setActiveStep] = useState<null | number>(2);

  const handleChange = (
    evt: ChangeEvent<HTMLInputElement>,
    step: number
  ): void => {
    console.log(evt.target.checked);
    if (evt.target.checked) {
      setActiveStep(step);
    }
  };
  return (
    <div className="process-wrapper bg-white text-black process z-10 relative">
      <h3 className="process-header flex justify-between">
        <span>Let's get you up and running</span>
        <span>5/6 steps remaining</span>
      </h3>
      <div className="bar">
        <div
          className="progress-bar"
          style={{ width: `${progressComplete}px` }}
        ></div>
      </div>
      <div className="px-3">
        <div
          className={`${
            activeStep === 1 ? "active " : null
          } collapse collapse-arrow py-5`}
        >
          <input
            type="radio"
            name="process"
            onChange={(evt) => handleChange(evt, 1)}
          />
          <div className="collapse-title">
            <div className="flex items-center">
              <Circle complete>1</Circle>
              <span className="ml-5 process-collapse-title">
                Complete KYC process
              </span>
            </div>
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div
          className={`${
            activeStep === 2 ? "active " : null
          } collapse collapse-arrow py-5`}
        >
          <input
            type="radio"
            name="process"
            defaultChecked
            onChange={(evt) => handleChange(evt, 2)}
          />
          <div className="collapse-title">
            <div className="flex items-center">
              <Circle>2</Circle>
              <span className="ml-5 process-collapse-title">
                Invite an operator
              </span>
            </div>
          </div>
          <div className="collapse-content">
            <Operator />
          </div>
        </div>
        <div
          className={`${
            activeStep === 3 ? "active " : null
          } collapse collapse-arrow py-5`}
        >
          <input
            type="radio"
            name="process"
            onChange={(evt) => handleChange(evt, 3)}
          />
          <div className="collapse-title">
            <div className="flex items-center">
              <Circle>3</Circle>
              <span className="ml-5 process-collapse-title">
                Create and assign locations
              </span>
            </div>
          </div>
          <div className="collapse-content">content</div>
        </div>

        <div
          className={`${
            activeStep === 4 ? "active " : null
          } collapse collapse-arrow py-5`}
        >
          <input
            type="radio"
            name="process"
            onChange={(evt) => handleChange(evt, 4)}
          />
          <div className="collapse-title">
            <div className="flex items-center">
              <Circle>4</Circle>
              <span className="ml-5 process-collapse-title">
                Divert revenue to location IBANs
              </span>
            </div>
          </div>
          <div className="collapse-content">content</div>
        </div>
        <div
          className={`${
            activeStep === 5 ? "active " : null
          } collapse collapse-arrow py-5`}
        >
          <input
            type="radio"
            name="process"
            onChange={(evt) => handleChange(evt, 5)}
          />
          <div className="collapse-title">
            <div className="flex items-center">
              <Circle>5</Circle>
              <span className="ml-5 process-collapse-title">
                Create an invoice
              </span>
            </div>
          </div>
          <div className="collapse-content">content</div>
        </div>
        <div
          className={`${
            activeStep === 6 ? "active " : null
          } collapse collapse-arrow py-5`}
        >
          <input
            type="radio"
            name="process"
            onChange={(evt) => handleChange(evt, 6)}
          />
          <div className="collapse-title">
            <div className="flex items-center">
              <Circle>6</Circle>
              <span className="ml-5 process-collapse-title">
                Withdraw funds to your account
              </span>
            </div>
          </div>
          <div className="collapse-content">content</div>
        </div>
      </div>
    </div>
  );
};

export default Process;
