import axios from "axios";
import { Hero } from "../types/types";

export const getHeroesByName = async (heroName: string): Promise<Hero[]> => {
  let token = process.env.REACT_APP_HEROES_API_TOKEN;

  let url = `https://superheroapi.com/api/${token}/search/${heroName}`;
  const req = await axios(url);
  const { data } = req;
  return data.results;
};
