import React, { useState, useEffect } from "react";
import axios from "axios";

import "./styles.css";
import { getAllAmiibos } from "../../Services/amiibo";
import allAmiibos from "./amiibos.json";

import Header from "../../Components/Header";
import AmiiboCard from "../../Components/AmiiboCard";
import ListTitle from "../../Components/ListTitle";

const Home = () => {
  const [amiibos, setAmiibos] = useState([]);
  const [cloneAmiibos, setCloneAmiibos] = useState([])

  const getAmiibos = async () => {
    // TODO: Get amiibo from API
    axios
      .get(
        "https://www.amiiboapi.com/api/amiibo/?amiiboSeries=Super%20Smash%20Bros."
      )
      .then((response) => {
        setAmiibos(response.data.amiibo)
        setCloneAmiibos(response.data.amiibo)
        }
      )
      .catch((e) => console.log(e));
  };

  // console.log(amiibos);

  useEffect(() => {
    getAmiibos();
  }, []);

  const handleSearch = (search) => {
    // TODO: Implement search filter
      if(search) {
        setCloneAmiibos(amiibos.filter(l => l.name.includes(search)))
      } else {
        setCloneAmiibos(amiibos)
      }
    };

    console.log(cloneAmiibos)

  return (
    <div className="Wrapper">
      <Header />
      <ListTitle searchPress={handleSearch} />
      <div className="amiiboContainer">
        {/* // TODO: Implement Amiibo cards from amiibo array */}
        {cloneAmiibos.map((el, index) => (
          <div className="amiiboCard" key={index}>
            <img src={el.image} alt={el.name} />
            <h3>{el.name}</h3>
            <p>{el.gameSeries}</p>
            <p>{el.amiiboSeries}</p>
            <p>Release date: {el.release.na}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;