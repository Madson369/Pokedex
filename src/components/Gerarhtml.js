import PokeCard from "./PokeCard.jsx";

function Gerarhtml(pokemonlistog) {

    let pokemonlist = []
 pokemonlist = [...pokemonlistog]

 //console.log(pokemonlist)
 



 return pokemonlist.map((i) => {
    const elementTypes = i.types.map((typeInfo) => typeInfo.type.name);
    //if(elementTypes[0] == 'flying' || elementTypes[1] == 'flying' )


    return <PokeCard name={i.name} id={i.id} types={elementTypes} />;
  });
}

export { Gerarhtml };
