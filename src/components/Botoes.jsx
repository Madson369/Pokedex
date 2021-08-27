import { Button, Input } from "semantic-ui-react";


function Botoes(props) {


    let PokemonWhatever = [...props.PokemonWhatever];
    let TypeWhatever = [...props.TypeWhatever];

    (

<div className="buttoncontainer ">
          <Button
            className="item"
            onClick={() => {
              PokemonWhatever = [];
              TypeWhatever = [];
              props.fillPokemon()
              
            }}
          >
            Todos
          </Button>
          <Button
            className="item"
            onClick={() => {
              PokemonWhatever = [];
              TypeWhatever = [];
              props.getType("normal", props.handletype);
            }}
          >
            Normal
          </Button>
          <Button
            className="item"
            onClick={() => {
              PokemonWhatever = [];
              TypeWhatever = [];
              props.getType("water", props.handletype);
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
              props.getType("fire", props.handletype);
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
              props.getType("grass", props.handletype);
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
              props.getType("electric", props.handletype);
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
              props.getType("ice", props.handletype);
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
              props.getType("flying", props.handletype);
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
              props.getType("ground", props.handletype);
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
              props.getType("rock", props.handletype);
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
              props.getType("stell", props.handletype);
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
              props.getType("bug", props.handletype);
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
              props.getType("dragon", props.handletype);
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
              props.getType("fairy", props.handletype);
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
              props.getType("poison", props.handletype);
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
              props.getType("fighting", props.handletype);
            }}
            color="blue"
          >
            Lutador
          </Button>
        </div>

    )

}

export default Botoes;