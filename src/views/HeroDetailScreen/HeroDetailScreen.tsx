import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import Loader from "../../components/Loader/Loader";
import { getHeroById } from "../../helpers/getHeroById";
import { Hero } from "../../types/types";

const HeroDetailScreen = () => {
  const { id = "1" } = useParams();
  const [hero, setHero] = useState<Hero>();
  const isMountedRef = useRef(true);

  useEffect(() => {
    getHeroById(id).then((heroResponse) => {
      if (isMountedRef.current && heroResponse) {
        setHero(heroResponse);
      }
    });

    return () => {
      isMountedRef.current = false;
    };
  }, [id]);

  return (
    <section
      style={{ minHeight: "80vh" }}
      className="d-flex w-100 justify-content-center align-items-center "
    >
      {hero ? (
        <div
          style={{ gap: "2rem" }}
          className="d-flex flex-column flex-md-row justify-content-center align-items-center"
        >
          <img
            style={{
              objectFit: "cover",
              maxWidth: "100%",
              maxHeight: "25rem",
            }}
            src={hero?.image.url}
            alt={hero?.name}
          />
          <div className="px-4 " style={{ maxWidth: "37.5rem" }}>
            <h2 className="text-danger display-4 fw-bold">
              Hello {hero?.name}
            </h2>

            <p className=" text-muted"> {hero?.biography["alter-egos"]}</p>
            <p>
              <span className="fw-bold">Secret Identity: </span>
              {hero?.biography["full-name"]}
            </p>
            <p className="text-capitalize">
              <span className="fw-bold">Alignment: </span>
              {hero?.biography["alignment"]}
            </p>
            <p style={{ maxWidth: "50%" }} className="text-wrap">
              <span className="fw-bold">Base: </span>
              {hero?.work.base}
            </p>
            <p>
              <span className="fw-bold">Height: </span>
              {hero?.appearance.height[1]}
            </p>
            <p>
              <span className="fw-bold">Weight: </span>
              {hero?.appearance.weight[1]}
            </p>
            <p>
              <span className="fw-bold">Hair Color: </span>
              {hero?.appearance["hair-color"]}
            </p>
            <p>
              <span className="fw-bold">Eye Color: </span>
              {hero?.appearance["eye-color"]}
            </p>
          </div>
        </div>
      ) : (
        <Loader size="1rem" width="15rem" height="15rem" color="red" />
      )}
    </section>
  );
};

export default HeroDetailScreen;
