import { getPokemon } from "./PokeLi";
import React, { useState } from "react";

let PokemonWhatever = [];

function Status() {
  
    const [pokemonlist, setpokemonlist] = useState([]);

    const handlepokemon = (newPokemon) => {
    PokemonWhatever = [...PokemonWhatever, newPokemon];

    //console.log(PokemonWhatever);
    // PokemonWhatever.sort((a, b) => {
    //   return a.id - b.id;
    // });

    //console.log(PokemonWhatever);
    if (PokemonWhatever.length === 1) {
      setpokemonlist(PokemonWhatever);
    }
  };

  function fillPokemon() {
    Array(1)
      .fill()
      .map((_, index) => {
        const pokemon = getPokemon(3, handlepokemon);
        return pokemon;
      });
  }

  fillPokemon()

  const tentei = (pokemonlist.map((i) => {
      const elementTypes = i.types.map((typeInfo) => typeInfo.type.name);
      return i.name
  }))

  console.log(tentei)


   
  

  return (
    <div>
      <p>131313</p>
    </div>
  );
}

export default Status;
