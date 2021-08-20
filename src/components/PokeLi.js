import axios from "axios";

const api = axios.create({
  baseURL: `https://pokeapi.co/api/v2`,
});

async function getPokemon(id, handlePokemon) {
  try {
    const response = await api.get(`/pokemon/${id}`);
    handlePokemon(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export { getPokemon };
