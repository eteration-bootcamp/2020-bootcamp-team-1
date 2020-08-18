import React, { useEffect, useRef } from "react";
import styles from "../Common.module.css";
import { useHistory } from "react-router-dom";

const SearchResults = ({ setVisibility, visible, loading, results }) => {
  const { push } = useHistory();
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setVisibility(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const onItemClick = id => {
    setVisibility(false);
    push(`/recipe/${id}`);
  };

  return (
    <div
      ref={wrapperRef}
      className={
        styles.SearchResults + " rounded position-absolute mt-3 py-1 w-100"
      }
      style={visible ? undefined : { display: "none" }}
    >
      {!loading &&
        results.length > 0 &&
        results.map(item => (
          <div
            key={item.id}
            onClick={() => onItemClick(item.id)}
            className={
              styles.SearchResultItem + " py-1 px-2 d-flex align-items-center"
            }
          >
            <span>
              <img alt="" src={item.image} />
            </span>
            <p className="d-inline-block m-0 ml-2">{item.title}</p>
          </div>
        ))}
    </div>
  );
};

export default SearchResults;
