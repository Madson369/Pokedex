import Pokestatus from "./PokeStatus";

function Gerarstatus(pokemonlistog) {

    let pokemonlist = []
 pokemonlist = [...pokemonlistog]

 //console.log(pokemonlist)
 



 return pokemonlist.map((i) => {
    const elementTypes = i.types.map((typeInfo) => typeInfo.type.name);
    //if(elementTypes[0] == 'flying' || elementTypes[1] == 'flying' )


    return <Pokestatus name={i.name} id={i.id} types={elementTypes} height={i.height} weight={i.weight} />;
  });
}

export { Gerarstatus };
