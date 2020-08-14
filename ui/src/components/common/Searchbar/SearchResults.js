import React, { useEffect, useRef, Fragment } from "react";
import styles from "../Common.module.css";

const SearchResults = ({ setVisibility, visible, loading }) => {
  const tempImg = "https://scx1.b-cdn.net/csz/news/800/2016/howcuttingdo.jpg";

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

  return (
    <div
      ref={wrapperRef}
      className={
        styles.SearchResults + " rounded position-absolute mt-3 py-1 w-100"
      }
      style={visible ? undefined : { display: "none" }}
    >
      {!loading && (
        <Fragment>
          <div
            className={
              styles.SearchResultItem + " py-1 px-2 d-flex align-items-center"
            }
          >
            <span>
              <img src={tempImg} />
            </span>
            <p className="d-inline-block m-0 ml-2">Food Item 1</p>
          </div>
          <div
            className={
              styles.SearchResultItem + " py-1 px-2 d-flex align-items-center"
            }
          >
            <span>
              <img src={tempImg} />
            </span>
            <p className="d-inline-block m-0 ml-2">Food Item 2</p>
          </div>
          <div
            className={
              styles.SearchResultItem + " py-1 px-2 d-flex align-items-center"
            }
          >
            <span>
              <img src={tempImg} />
            </span>
            <p className="d-inline-block m-0 ml-2">Food Item 3</p>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default SearchResults;
