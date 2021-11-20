import { useAlert } from "react-alert";
import { useNavigate } from "react-router";
import useSpreadContext from "../../customHooks/useSpreadContext";
import { Hero } from "../../types/types";

interface props {
  hero: Hero;
}
const HeroCardButtons: React.FC<props> = ({ hero }) => {
  const { deleteHero, addHero, isHeroPartOfTeam, isAbleToAdd, errorHandling } =
    useSpreadContext();
  const alert = useAlert();
  const navigate = useNavigate();

  const addNewHero = (): void => {
    if (isAbleToAdd(hero)) {
      addHero(hero);
      alert.success(`${hero.name} has been successfully added!`);
    } else alert.error(errorHandling(hero));
  };

  const removeHero = (): void => {
    deleteHero(hero.id);
    alert.info(`${hero.name} has been successfully removed!`);
  };

  return (
    <div className="mt-2 d-flex justify-content-around">
      {isHeroPartOfTeam(hero.id) ? (
        <button onClick={removeHero} className="btn btn-danger">
          Remove
        </button>
      ) : (
        <button onClick={addNewHero} className="btn btn-primary">
          Add
        </button>
      )}
      <button
        onClick={() => navigate(`/hero/${hero.id}`)}
        className="btn btn-success"
      >
        Details
      </button>
    </div>
  );
};

export default HeroCardButtons;
