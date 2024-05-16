import React from "react";
import Button from "../../../../components/Form/Button/Button";
import avatar from "../../../../assets/dan.svg";
import "./Jumbotron.css";

const Jumbotron: React.FC = () => {
  return (
    <>
      <header className="header flex items-center justify-between">
        <h1 className="title font-medium">Good morning, Jonathan</h1>
        <Button>Create collection</Button>
      </header>
      <div className="avatar">
        <img className="avatar-img" src={avatar} alt="Jonathan" />
        <div className="avatar-bg"></div>
        <div className="avatar-popup">
          <p>
            Hi Jonathan, I’m Dan from Franchain. I’m here to help you get set up
            and collecting payments from your franchisees.
          </p>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
