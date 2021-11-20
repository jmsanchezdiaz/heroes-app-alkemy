import { Hero } from "../../types/types";
import HeroCard from "../HeroCard/HeroCard";

interface props {
  actualTeam: Hero[];
}

const TeamHeroes: React.FC<props> = ({ actualTeam }) => {
  return (
    <div
      style={{ gap: "1rem" }}
      className=" justify-content-center d-flex flex-wrap m-auto"
    >
      {actualTeam?.map((hero: Hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </div>
  );
};

export default TeamHeroes;
