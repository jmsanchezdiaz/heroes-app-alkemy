import React from "react";
import { Hero } from "../../types/types";
import HeroItem from "../HeroItem/HeroItem";
import SearchPaginationControls from "../SearchPaginationControls/SearchPaginationControls";

interface props {
  filtered: Hero[];
  goPrevPage: () => void;
  goNextPage: () => void;
  pageNumber: number;
  amountOfPages: number;
}

const SearchResults: React.FC<props> = ({
  filtered,
  goPrevPage,
  goNextPage,
  pageNumber,
  amountOfPages,
}) => {
  const areExistingResults: boolean = filtered?.length > 0;

  return (
    <>
      <section className="row justify-content-center m-2">
        {filtered?.map((hero) => (
          <HeroItem key={hero.id} hero={hero} />
        ))}
      </section>
      {areExistingResults && (
        <SearchPaginationControls
          goNextPage={goNextPage}
          goPrevPage={goPrevPage}
          pageNumber={pageNumber}
          amountOfPages={amountOfPages}
        />
      )}
    </>
  );
};

export default SearchResults;
