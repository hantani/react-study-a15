import axios from "axios";

const BASE_URL = "https://disney_api.nomadcoders.workers.dev/characters";

export const fetchCharacters = async () => {
  return await axios.get(`${BASE_URL}`).catch((error) => {
    console.log(error);
  });
};

export const fetchCharacter = async (id: string | undefined) => {
  return await axios.get(`${BASE_URL}/${id}`).catch((error) => {
    console.log(error);
  });
};
