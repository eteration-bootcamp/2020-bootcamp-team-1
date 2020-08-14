import React, { useState } from "react";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import styles from "../Common.module.css";
import SearchResults from "./SearchResults";

const Searchbar = ({
  large = false,
  placeholder = "Search ...",
  className
}) => {
  const iconSize = large ? "28px" : "21px";
  const [resultsVisible, setResultsVisible] = useState(false);
  const [resultsLoading, setResultsLoading] = useState(false);

  const onChange = e => {
    if (e.target.value !== "") {
      setResultsLoading(true);
      setResultsVisible(true);
      setTimeout(() => setResultsLoading(false), 1000);
    } else {
      setResultsVisible(false);
    }
  };

  return (
    <Container className={styles.SearchbarWrapper + " justify-content-center"}>
      <div className={styles.Searchbar + " m-auto"}>
        <FormControl
          size={large ? "lg" : undefined}
          type="text"
          onChange={onChange}
          placeholder={placeholder}
        />
        {resultsLoading ? (
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
          loading={resultsLoading}
        />
      </div>
    </Container>
  );
};

export default Searchbar;
