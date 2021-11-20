import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TeamHeroes from "../../components/TeamHeroes/TeamHeroes";
import TeamStadistics from "../../components/TeamStadistics/TeamStadistics";
import useSpreadContext from "../../customHooks/useSpreadContext";

const HomeScreen = () => {
  const navigate = useNavigate();
  const { actualTeam } = useSpreadContext();
  const [teamSpeciality, setTeamSpeciality] = useState<string>("");

  const updateSpeciality = (newSpeciality: string): void => {
    setTeamSpeciality(newSpeciality);
  };

  return (
    <section className="container text-center my-3">
      <div>
        <h3 className="text-danger fw-bold">ACTUAL TEAM</h3>
        <h6 className="text-danger fw-bold text-uppercase">
          TEAM SPECIALITY: {teamSpeciality}
        </h6>
      </div>

      <div
        style={{ minHeight: 300, border: "5px dashed #444" }}
        className="d-flex  justify-content-center align-items-center my-4"
      >
        {actualTeam.length > 0 ? (
          <TeamHeroes actualTeam={actualTeam} />
        ) : (
          <div>
            <h2 className="display-3 fw-bold">TEAM EMPTY</h2>
            <button
              onClick={() => navigate("/search")}
              className="btn btn-primary fw-bold"
            >
              Search New Heroes
            </button>
          </div>
        )}
      </div>
      <TeamStadistics
        actualTeam={actualTeam}
        updateSpeciality={updateSpeciality}
      />
    </section>
  );
};

export default HomeScreen;
