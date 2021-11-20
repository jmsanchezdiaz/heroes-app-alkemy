import axios from "axios";
import { Hero } from "../types/types";

export const getHeroById = async (id: string): Promise<Hero> => {
  try {
    let token = process.env.REACT_APP_HEROES_API_TOKEN;

    let url = `https://superheroapi.com/api.php/${token}/${id}`;
    const req = await axios(url);
    const { data } = req;
    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};
