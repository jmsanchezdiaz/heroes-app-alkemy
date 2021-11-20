import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { HeroesContext } from "../heroesProvider/HeroesProvider";
import { AuthContextType, HeroesContextType } from "../types/types";

type FusedContext = HeroesContextType & AuthContextType;

const useSpreadContext = (): FusedContext => {
  const authState = useContext(AuthContext);
  const heroesState = useContext(HeroesContext);
  return { ...authState, ...heroesState };
};

export default useSpreadContext;
