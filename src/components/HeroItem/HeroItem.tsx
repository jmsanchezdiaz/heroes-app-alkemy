import { Hero } from "../../types/types";
import HeroCardButtons from "../HeroCardButtons/HeroCardButtons";

interface props {
  hero: Hero;
}

const HeroItem: React.FC<props> = ({ hero }) => {
  const {
    image: { url },
    name,
  } = hero;
  return (
    <article className="card col-sm-6 m-2 py-2" style={{ width: "12.5rem" }}>
      <img
        className="card-img-top img-fluid"
        src={url}
        style={{
          maxHeight: "14rem",
        }}
        alt={name}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h4 className="card-title my-3 text-center">{name}</h4>
        <HeroCardButtons hero={hero} />
      </div>
    </article>
  );
};

export default HeroItem;
