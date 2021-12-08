import React from "react";
import { Hero } from "../../types/types";
import HeroCard from "../HeroCard/HeroCard";

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
      <section className="justify-content-center  d-flex flex-wrap m-auto">
        {filtered?.map((hero) => (
          <HeroCard key={hero.id} hero={hero} isSearchItem={true} />
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
