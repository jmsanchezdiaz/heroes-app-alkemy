import { PowerstatsType } from "../types/types";

export const updateSkill = (actualValue: string, nextValue: string): string =>
  (parseInt(actualValue) + (parseInt(nextValue) || 0)).toString();

export const getSumOfAllPowerstats = (
  statsArr: PowerstatsType[]
): PowerstatsType => {
  let totalPowerstats: PowerstatsType = {
    intelligence: "0",
    strength: "0",
    speed: "0",
    durability: "0",
    power: "0",
    combat: "0",
  };

  statsArr.forEach((stats) => {
    Object.keys(totalPowerstats).forEach((key) => {
      totalPowerstats[key] = updateSkill(totalPowerstats[key], stats[key]);
    });
  });

  return totalPowerstats;
};
