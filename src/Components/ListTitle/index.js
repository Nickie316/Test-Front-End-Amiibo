import React from "react";

import "./styles.css";
import amiiboLogo from "../../Assests/Images/logo-amiibo-glow.webp";
import SearchBar from "../SearchBar";

const ListTitle = ({ searchPress }) => {
  return (
    <>
      <div className="listTileContainer">
        <img src={amiiboLogo} alt={"amiiboLogo"} className="amiiboLogo" />
        <p className="subtitle">Super Smash Bros. amiibo Character Lineup</p>
      </div>

      <SearchBar searchPress={searchPress} />
    </>
  );
};

export default ListTitle;
