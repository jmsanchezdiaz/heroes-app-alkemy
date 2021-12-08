import HeroCardButtons from "../HeroCardButtons/HeroCardButtons";
import { Hero } from "../../types/types";
import Powerstats from "../Powerstats/Powerstats";

interface props {
  hero: Hero;
  isSearchItem?: boolean;
}

const HeroCard: React.FC<props> = ({ hero, isSearchItem = false }) => {
  const { name, image, powerstats } = hero;

  return (
    <div className="my-2 ">
      <article style={{ maxWidth: 200 }} className="card d-flex">
        <img
          className=" img-thumbnail"
          style={{ objectFit: "cover", height: "15rem", width: "15rem" }}
          src={image?.url}
          alt={name}
        />

        <div className="card-body my-2">
          <h5 className="card-title text-center  ">{name}</h5>
          {!isSearchItem && <Powerstats stats={powerstats} />}
          <HeroCardButtons hero={hero} />
        </div>
      </article>
    </div>
  );
};

export default HeroCard;
