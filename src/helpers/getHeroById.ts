import axios from "axios";
import { Hero } from "../types/types";

export const getHeroById = async (id: string): Promise<Hero> => {
  let token = process.env.REACT_APP_HEROES_API_TOKEN;

  let url = `https://superheroapi.com/api/${token}/${id}`;
  const req = await axios({
    method: "get",
    url,
    withCredentials: false,
  });
  const { data } = req;
  return data;
};
