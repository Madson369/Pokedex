import "./PokeCard.css";

function PokeCard(props) {
  return (
    <li className={`card ${props.types[0]}`}> 
      <img
        className="card-image "
        alt={props.name}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
      />
      <h2 className="card-title">
        {props.id}. {props.name}
      </h2>
      <p className="card-subtitle">{props.types.join(" | ")}</p>
    </li>
  );
}

export default PokeCard;

//pokemon.types.map((typeInfo) => typeInfo.type.name)[0]