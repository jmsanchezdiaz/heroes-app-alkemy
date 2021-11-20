import React from "react";

interface props {
  goPrevPage: () => void;
  goNextPage: () => void;
  pageNumber: number;
  amountOfPages: number;
}

const SearchPaginationControls: React.FC<props> = ({
  goPrevPage,
  goNextPage,
  pageNumber,
  amountOfPages,
}) => {
  return (
    <div
      style={{ paddingRight: 20 }}
      className="d-flex justify-content-between w-100"
    >
      <button onClick={goPrevPage} className="btn btn-dark">
        Previous
      </button>
      <h3 className="fw-bold ">
        {pageNumber} of {amountOfPages}
      </h3>
      <button onClick={goNextPage} className="btn btn-dark">
        Next
      </button>
    </div>
  );
};

export default SearchPaginationControls;
