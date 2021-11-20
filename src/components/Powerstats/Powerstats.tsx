import ProgressBar from "../ProgressBar/ProgressBar";
import { PowerstatsType } from "../../types/types";

export interface props {
  stats: PowerstatsType;
}

const Powerstats: React.FC<props> = ({ stats }) => {
  const powerstats: [string, string][] = Object.entries(stats);
  return (
    <div className="stats">
      {powerstats?.map(([name, value]) => {
        const parseValue: string = parseInt(value) ? value : "0";
        return (
          <div
            style={{ fontSize: ".8rem" }}
            key={name}
            className="d-flex align-items-center "
          >
            <span className="">{parseValue}</span>

            <ProgressBar value={parseValue} />

            <span className="  text-capitalize ">{name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Powerstats;
