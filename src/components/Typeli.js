import axios from "axios";

const api = axios.create({
  baseURL: `https://pokeapi.co/api/v2`,
});

async function getType(type, handleType) {
  try {
    const response = await api.get(`/type/${type}`);
    handleType(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export { getType };
