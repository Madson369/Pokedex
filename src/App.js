import PokeCard from "./components/PokeCard.jsx";
import Topo from "./components/Topo.jsx";
import axios from "axios";
import { getPokemon } from "./components/PokeLi";
import React, { useState, useEffect } from "react";
import { Button, Input } from "semantic-ui-react";
import "./components/PokeCard.css";
import Botaoload from "./components/Botaoload.jsx";
import { Gerarhtml } from "./components/Gerarhtml.js";

let PokemonWhatever = [];

function App() {
  const [Loaded, setLoaded] = useState(9);

  function incrementLoaded() {
    setLoaded(Loaded + 9);
    PokemonWhatever = [];
  }

  function fillPokemon() {
    //console.log(Loaded);
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

    //console.log(PokemonWhatever);
    if (PokemonWhatever.length === Loaded) {
      setpokemonlist(PokemonWhatever);
    }
  };

  useEffect(() => {
    fillPokemon();
  }, [Loaded]);

  function onChange(event) {
    console.log(event);
    if (event.target.value != undefined) {
      console.log(event);
      PokemonWhatever = [];
      setpokemonlist([]);
      console.log(Loaded);
      if (event.target.value == "") {
        setLoaded(9);
        getPokemon(9, handlepokemon);
      } else {
        setLoaded(1);
        getPokemon(event.target.value.toLowerCase(), handlepokemon);
      }
    }
  }


  return (
    <div>
      <Topo></Topo>
      <div >
        <Input onChange={onChange} placeholder='Procurar por nome' />
      </div>
      <div className="container">
        <ul className="pokedex">
          {pokemonlist.length > 0 ? Gerarhtml(pokemonlist) : <li><img className='deuruim'src='https://c.tenor.com/ZQvpE8_p-hMAAAAC/pokemon-confused.gif' ></img></li>} 
          {/* {pokemonlist.map((i) => {
            const elementTypes = i.types.map((typeInfo) => typeInfo.type.name);
            //if(elementTypes[0] == 'flying' || elementTypes[1] == 'flying' )
             return <PokeCard name={i.name} id={i.id} types={elementTypes} />;
          })} */}
        </ul>
      </div>
      <div>
        <Botaoload onClick={incrementLoaded}></Botaoload>
      </div>
      );
    </div>
  );
}


export default App;
