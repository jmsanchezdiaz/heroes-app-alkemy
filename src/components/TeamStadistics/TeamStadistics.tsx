import React, { useCallback, useEffect, useState } from "react";
import { getSumOfAllPowerstats } from "../../helpers/getSumOfAllPowerstats";
import { Hero, PowerstatsType } from "../../types/types";

interface props {
  actualTeam: Hero[];
  updateSpeciality: (newSpeciality: string) => void;
}

interface PhysicalStats {
  height: number;
  weight: number;
}

const TeamStadistics: React.FC<props> = ({ actualTeam, updateSpeciality }) => {
  const [teamStats, setTeamStats] = useState<PowerstatsType>({
    intelligence: "0",
    strength: "0",
    speed: "0",
    durability: "0",
    power: "0",
    combat: "0",
  });
  const [teamPhysical, setTeamPhysical] = useState<PhysicalStats>({
    height: 0,
    weight: 0,
  });

  const calculateTeamSpeciality = useCallback((): void => {
    const allPowerstats: PowerstatsType[] = actualTeam.map(
      (hero) => hero?.powerstats
    );

    let sumOfStats: PowerstatsType = getSumOfAllPowerstats(allPowerstats);

    let maxValue: number = Math.max(
      ...Object.values(sumOfStats).map((val) => parseInt(val))
    );

    Object.keys(sumOfStats).forEach((key) => {
      if (sumOfStats[key] === maxValue.toString()) updateSpeciality(key);
    });

    if (!actualTeam.length || !maxValue) updateSpeciality("None");
    setTeamStats(sumOfStats);
  }, [actualTeam, updateSpeciality]);

  const calculatePhysicalStats = useCallback((): void => {
    let totalStats: PhysicalStats = {
      height: 0,
      weight: 0,
    };

    const physicalStats: PhysicalStats[] = actualTeam?.map(({ appearance }) => {
      return {
        height: parseInt(appearance.height[1]),
        weight: parseInt(appearance.weight[1]),
      };
    });

    for (let hero of physicalStats) {
      totalStats = {
        height: totalStats.height + hero.height,
        weight: totalStats.weight + hero.weight,
      };
    }

    totalStats = {
      height: Math.round(totalStats.height / physicalStats.length) || 0,
      weight: Math.round(totalStats.weight / physicalStats.length) || 0,
    };

    setTeamPhysical(totalStats);
  }, [actualTeam]);

  useEffect(() => {
    calculateTeamSpeciality();
    calculatePhysicalStats();
  }, [actualTeam, calculatePhysicalStats, calculateTeamSpeciality]);

  return (
    <div className="bg-danger my-4 border border-2 border-danger rounded p-4 text-white">
      <h2>TEAM STADISTICS</h2>
      <div className="d-flex flex-wrap  ">
        <div>
          <h4 className="m-2">POWERSTATS</h4>

          <div className="d-flex flex-wrap justify-content-center m-2">
            {Object.entries(teamStats)?.map(([stat, val]) => {
              let parseValue = parseInt(val) ? val : "0";
              return (
                <div key={stat} className="m-2">
                  <h4 className="text-capitalize fw-bold">{stat}</h4>

                  <h4 className="fw-light">{parseValue}</h4>
                </div>
              );
            })}
          </div>
        </div>
        <div className="m-auto">
          <h4>PHYSICAL</h4>
          <div className="d-flex flex-wrap  justify-content-between ">
            <div className="m-2">
              <h4 className="fw-bold ">Height</h4>
              <h4 className="fw-light">{teamPhysical.height + "cm"}</h4>
            </div>
            <div className="m-2">
              <h4 className="fw-bold ">Weight</h4>
              <h4 className="fw-light">{teamPhysical.weight + "kg"}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamStadistics;
