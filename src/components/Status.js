import { getPokemon } from "./PokeLi";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Topo from "./Topo";
import "./Status.css";
import Pokestatus from "./PokeStatus.jsx";
import { Gerarstatus } from "./Gerarstatus";
import { Button, Input } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import Botaohome from "./BotaoHome.jsx";

let PokemonWhatever = [];

const Status = () => {
  const re = /\/\d+/;
  const re2 = /\//g;

   
    const location = useLocation();
    const StatusId = location.pathname.match(re)[0].replace(re2, "");
    //console.log(StatusId)
  

  const [pokemonlist, setpokemonlist] = useState([]);

  const handlepokemon = (newPokemon) => {
    PokemonWhatever = [...PokemonWhatever, newPokemon];

    //console.log(PokemonWhatever);
    // PokemonWhatever.sort((a, b) => {
    //   return a.id - b.id;
    // });

    console.log(PokemonWhatever);
    if (PokemonWhatever.length === 1) {
      setpokemonlist(PokemonWhatever);
    }
  };

  function fillPokemon() {
    Array(1)
      .fill()
      .map((_, index) => {
        const pokemon = getPokemon(StatusId, handlepokemon);
        return pokemon;
      });
  }

  
  useEffect(() => {
    PokemonWhatever = []
    console.log('rola')
    fillPokemon();
  }, [StatusId]);

  return (
    <div>
      <Topo></Topo>
      {Gerarstatus(pokemonlist)}
      <Botaohome></Botaohome>
    </div>
  );
};

export default Status;
