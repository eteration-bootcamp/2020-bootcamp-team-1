import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import { connect } from "react-redux";

import styles from "../Common.module.css";
import SearchResults from "./SearchResults";
import { searchRecipes } from "../../../actions/home";
import useDebounce from "../../../utils/useDebounce";

const Searchbar = ({
  large = false,
  placeholder = "Search ...",
  searchLoading,
  searchResults,
  searchRecipes
}) => {
  const iconSize = large ? "28px" : "21px";
  const [resultsVisible, setResultsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 400);

  const onChange = e => {
    if (e.target.value && e.target.value !== "") {
      setResultsVisible(true);
    } else if (e.target.value === "") {
      setResultsVisible(false);
    }
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (searchTerm !== "") {
      searchRecipes({ filter: debouncedSearchTerm });
    }
  }, [debouncedSearchTerm]);

  return (
    <Container className={styles.SearchbarWrapper + " justify-content-center"}>
      <div className={styles.Searchbar + " m-auto"}>
        <Form.Control
          size={large ? "lg" : undefined}
          type="text"
          onChange={onChange}
          placeholder={placeholder}
        />
        {searchLoading ? (
          <Spinner
            animation="border"
            role="status"
            className={"position-absolute " + styles.Spinner}
          />
        ) : (
          <svg
            className={styles.SearchIcon}
            fill="#767676"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width={iconSize}
            height={iconSize}
          >
            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
          </svg>
        )}
        <SearchResults
          setVisibility={setResultsVisible}
          visible={resultsVisible}
          loading={searchLoading}
          results={searchResults}
        />
      </div>
    </Container>
  );
};

const mapStateToProps = state => ({
  searchResults: state.homeReducer.searchResults,
  searchLoading: state.homeReducer.searchLoading
});

export default connect(mapStateToProps, { searchRecipes })(Searchbar);
