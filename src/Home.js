import PokeCard from "./components/PokeCard.jsx";
import Topo from "./components/Topo.jsx";
import { getPokemon } from "./components/PokeLi";
import React, { useState, useEffect } from "react";
import { Button, Input } from "semantic-ui-react";
import "./components/PokeCard.css";
import Botaoload from "./components/Botaoload.jsx";
import { Gerarhtml } from "./components/Gerarhtml.js";
import { getType } from "./components/Typeli";
let PokemonWhatever = [];
let TypeWhatever = [];
let PokemonobjL = [];

let PokemonIdL = [];

function Home() {
  const [Loaded, setLoaded] = useState(9);

  function incrementLoaded() {
    setLoaded(Loaded + 9);
    PokemonWhatever = [];
  }

  function fillPokemon() {
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

  const handletype = (newType) => {
    TypeWhatever = [...TypeWhatever, newType];

    //console.log(TypeWhatever);
    TypeWhatever.sort((a, b) => {
      return a.id - b.id;
    });
    //console.log(TypeWhatever);
    PokemonobjL = TypeWhatever[0].pokemon;

    //console.log(PokemonobjL)

    PokemonIdL = PokemonobjL.map((i) => {
      const pokemonnseimaisoqpordenome = i.pokemon.url;

      const re = /\/\d+\//;
      const re2 = /\//g;

      let url = pokemonnseimaisoqpordenome.match(re)[0].replace(re2, "");

      console.log(url);
      return url;
    });
    PokemonIdL.map((id) => getPokemon(id, handlepokemon));
  };

  //getType("fire", handletype);

  useEffect(() => {
    fillPokemon();
  }, [Loaded]);

  function onChange(event) {
    //console.log(event);
    if (
      event.target.value !== undefined &&
      event.target.value !== "  " &&
      event.target.value !== "  "
    ) {
      //console.log(event);
      PokemonWhatever = [];
      setpokemonlist([]);
      //console.log(Loaded);
      if (event.target.value === "") {
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
      <div>
        <Input onChange={onChange} placeholder="Procurar Pokemon" />
        {/* <Botoes PokemonWhatever={(PokemonWhatever)} TypeWhatever={(TypeWhatever)} fillPokemon={fillPokemon()} getType={getType()} handletype={handletype()} ></Botoes> */}
        <div className="buttoncontainer ">
          <Button
            className="item"
            onClick={() => {
              PokemonWhatever = [];
              TypeWhatever = [];
              fillPokemon()
              
            }}
          >
            Todos
          </Button>
          <Button
            className="item"
            onClick={() => {
              PokemonWhatever = [];
              TypeWhatever = [];
              getType("normal", handletype);
            }}
          >
            Normal
          </Button>
          <Button
            className="item"
            onClick={() => {
              PokemonWhatever = [];
              TypeWhatever = [];
              getType("water", handletype);
            }}
            color="blue"
          >
            Agua
          </Button>
          <Button
            className="item"
            onClick={() => {
              PokemonWhatever = [];
              TypeWhatever = [];
              getType("fire", handletype);
            }}
            color="red"
          >
            Fogo
          </Button>
          <Button
            className="item"
            onClick={() => {
              PokemonWhatever = [];
              TypeWhatever = [];
              getType("grass", handletype);
            }}
            color="green"
          >
            Planta
          </Button>
          <Button
            className="item"
            onClick={() => {
              PokemonWhatever = [];
              TypeWhatever = [];
              getType("electric", handletype);
            }}
            color="yellow"
          >
            Raio
          </Button>
          <Button
            className="item"
            onClick={() => {
              PokemonWhatever = [];
              TypeWhatever = [];
              getType("ice", handletype);
            }}
            color="blue"
          >
            Gelo
          </Button>
          <Button
            className="item"
            onClick={() => {
              PokemonWhatever = [];
              TypeWhatever = [];
              getType("flying", handletype);
            }}
            color="blue"
          >
            Voador
          </Button>
          <Button
            className="item"
            onClick={() => {
              PokemonWhatever = [];
              TypeWhatever = [];
              getType("ground", handletype);
            }}
            color="brown"
          >
            Terra
          </Button>
          <Button
            className="item"
            onClick={() => {
              PokemonWhatever = [];
              TypeWhatever = [];
              getType("rock", handletype);
            }}
            color="brown"
          >
            Pedra
          </Button>
          <Button
            className="item"
            onClick={() => {
              PokemonWhatever = [];
              TypeWhatever = [];
              getType("stell", handletype);
            }}
            color="teal"
          >
            Aço
          </Button>
          <Button
            className="item"
            onClick={() => {
              PokemonWhatever = [];
              TypeWhatever = [];
              getType("bug", handletype);
            }}
            color="green"
          >
            Inseto
          </Button>
          <Button
            className="item"
            onClick={() => {
              PokemonWhatever = [];
              TypeWhatever = [];
              getType("dragon", handletype);
            }}
            color="purple"
          >
            Dragão
          </Button>
          <Button
            className="item"
            onClick={() => {
              PokemonWhatever = [];
              TypeWhatever = [];
              getType("fairy", handletype);
            }}
            color="pink"
          >
            Fada
          </Button>
          <Button
            className="item"
            onClick={() => {
              PokemonWhatever = [];
              TypeWhatever = [];
              getType("poison", handletype);
            }}
            color="purple"
          >
            Venenoso
          </Button>
          <Button
            className="item"
            onClick={() => {
              PokemonWhatever = [];
              TypeWhatever = [];
              getType("fighting", handletype);
            }}
            color="blue"
          >
            Lutador
          </Button>
        </div>
      </div>
      <div className="container">
        <ul className="pokedex">
          {pokemonlist.length > 0 ? (
            Gerarhtml(pokemonlist)
          ) : (
            <li>
              <img
                className="deuruim"
                src="https://c.tenor.com/ZQvpE8_p-hMAAAAC/pokemon-confused.gif"
              ></img>
            </li>
          )}
        </ul>
      </div>
      <div>
        <Botaoload onClick={incrementLoaded}></Botaoload>
      </div>
      );
    </div>
  );
}

export default Home;
