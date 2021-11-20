import { Field, Form, Formik } from "formik";
import { useState } from "react";
import Loader from "../../components/Loader/Loader";
import SearchResults from "../../components/SearchResults/SearchResults";
import { usePagination } from "../../customHooks/usePagination";
import { getHeroesByName } from "../../helpers/getHeroesByName";
import { Hero, ErrorMessage } from "../../types/types";

interface FormData {
  search_input: string;
}

const SearchScreen = () => {
  const [results, setResults] = useState<Hero[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { filtered, goPrevPage, goNextPage, pageNumber, amountOfPages } =
    usePagination(results, 10);

  const validate = (value: string): ErrorMessage => {
    if (!value) return "Input Required";
    return "";
  };

  const handleSubmit = (values: FormData) => {
    setIsLoading(true);
    setResults([]);
    getHeroesByName(values.search_input)
      .then((heroes) => {
        if (heroes) {
          setIsLoading(false);
          setResults(heroes);
        } else setIsLoading(false);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Formik onSubmit={handleSubmit} initialValues={{ search_input: "" }}>
        {({ errors, touched }) => (
          <Form className="text-center">
            <h2 className="py-3">Search your Heroes</h2>

            <div className="form-group d-flex mx-2">
              <Field
                placeholder="Search your hero"
                id="search_input"
                name="search_input"
                className="form-control"
                validate={validate}
              />

              <button className="btn btn-success mx-2">Search</button>
            </div>
            {errors.search_input && touched.search_input && (
              <span className="text-danger fs-2 px-2">
                {errors.search_input}
              </span>
            )}
          </Form>
        )}
      </Formik>

      <div className="container mt-4">
        {!isLoading ? (
          filtered?.length > 0 ? (
            <SearchResults
              filtered={filtered}
              pageNumber={pageNumber}
              amountOfPages={amountOfPages}
              goNextPage={goNextPage}
              goPrevPage={goPrevPage}
            />
          ) : (
            <h2 className="text-center text-danger display-2">
              No Search Results
            </h2>
          )
        ) : (
          <Loader size="1rem" width="15rem" height="15rem" color="red" />
        )}
      </div>
    </div>
  );
};

export default SearchScreen;
