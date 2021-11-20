import { createContext, useEffect, useState } from "react";
import { Hero, HeroesContextType, ProviderProps } from "../types/types";

export const HeroesContext = createContext({} as HeroesContextType);

const initState = () =>
  JSON.parse(window.localStorage.getItem("actualTeam") as string) || [];

export const HeroesProvider = ({ children }: ProviderProps) => {
  const [actualTeam, setActualTeam] = useState<Hero[]>(initState);

  useEffect(() => {
    window.localStorage.setItem("actualTeam", JSON.stringify(actualTeam));
  }, [actualTeam]);

  const isTeamFull: boolean = actualTeam?.length >= 6;
  const isAligmentFull = (hero: Hero): boolean => {
    const quantityMatchingAlignmentHeroes = actualTeam.filter(
      ({ biography }) => biography.alignment === hero.biography.alignment
    ).length;
    return quantityMatchingAlignmentHeroes >= 3;
  };

  const errorHandling = (hero: Hero): string => {
    const alignment = hero.biography.alignment;
    if (isAligmentFull(hero))
      return `Your team already has 3 ${alignment} characters`;
    else if (isTeamFull) return "Your team is full";
    return "Unknown error";
  };

  const isAbleToAdd = (hero: Hero): boolean => {
    return !isTeamFull && !isAligmentFull(hero);
  };

  const addHero = (hero: Hero) =>
    setActualTeam((prevState) => prevState.concat(hero));

  const deleteHero = (heroId: Hero["id"]) =>
    setActualTeam((prevState) => prevState.filter(({ id }) => id !== heroId));

  const isHeroPartOfTeam = (heroId: Hero["id"]) =>
    actualTeam.some(({ id }) => id === heroId);

  const value = {
    actualTeam,
    addHero,
    errorHandling,
    isAbleToAdd,
    deleteHero,
    isHeroPartOfTeam,
  };

  return (
    <HeroesContext.Provider value={value}>{children}</HeroesContext.Provider>
  );
};
