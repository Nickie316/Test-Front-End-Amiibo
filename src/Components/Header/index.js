import React from "react";

import giorgio from "../../Assests/Images/giorgio.svg";
import "./styles.css";

const Header = () => {
  return (
    <div className="header">
      <img src={giorgio} className="logo" alt="logo" />
      <p className="title">Entrevista Front-end</p>
    </div>
  );
};

export default Header;
