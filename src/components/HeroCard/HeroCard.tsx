import HeroCardButtons from "../HeroCardButtons/HeroCardButtons";
import { Hero } from "../../types/types";
import Powerstats from "../Powerstats/Powerstats";

interface props {
  hero: Hero;
}

const HeroCard: React.FC<props> = ({ hero }) => {
  const { name, image, powerstats } = hero;

  return (
    <div className="my-2">
      <article style={{ maxWidth: 200 }} className="card d-flex">
        <img
          className=" img-thumbnail"
          style={{ objectFit: "cover", height: "15rem", width: "15rem" }}
          src={image?.url}
          alt={name}
        />

        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <Powerstats stats={powerstats} />
          <HeroCardButtons hero={hero} />
        </div>
      </article>
    </div>
  );
};

export default HeroCard;
