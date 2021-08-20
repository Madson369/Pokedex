import PokeCard from "./components/PokeCard.jsx";
import Topo from "./components/Topo.jsx";
import axios from "axios";
import { getPokemon } from "./components/PokeLi";
import React, { useState, useEffect } from "react";
import { Button } from 'semantic-ui-react'
import "./components/PokeCard.css";


let PokemonWhatever = [];

function App() {
  const [Loaded, setLoaded] = useState(9);

  function incrementLoaded() {
    setLoaded(Loaded + 9);
    PokemonWhatever = [];
  }

  function fillPokemon() {
    console.log(Loaded);
    Array(Loaded)
      .fill()
      .map((_, index) => {
        const pokemon = getPokemon(index + 1, handlepokemon);
        return pokemon;
      });
  }

  const [pokemonlist, setpokemonlist] = useState([]);

  const handlepokemon = (newPokemon) => {
    PokemonWhatever = [...PokemonWhatever, newPokemon];

    //console.log(PokemonWhatever);
    PokemonWhatever.sort((a, b) => {
      return a.id - b.id;
    });

    console.log(PokemonWhatever);
    if (PokemonWhatever.length === Loaded) {
      setpokemonlist(PokemonWhatever);
    }
  };

  useEffect(() => {
    fillPokemon();
  }, [Loaded]);

  return (
    <div>
      <Topo></Topo>
      <div className="container">
        <ul className="pokedex">
          {pokemonlist.map((i) => {
            const elementTypes = i.types.map((typeInfo) => typeInfo.type.name);

            return <PokeCard name={i.name} id={i.id} types={elementTypes} />;
          })}
        </ul>
      </div>
      <div>
        <Button className='botaoload' onClick={incrementLoaded}>Click</Button>
      </div>
      );
    </div>
  );
}

export default App;
