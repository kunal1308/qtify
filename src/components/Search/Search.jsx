import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/Search icon.svg";
import styles from "./Search.module.css";
import AutoSuggestion from "../AutoSuggestion/AutoSuggestion";

const Search = ({ placeholder, data }) => {
  const [val, setVal] = useState("");
  const [filteredAlbum, setFilteredAlbum] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const changeHandler = (e) => {
    setVal(e.target.value);
    const res = data.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredAlbum(res);
  };
  const handleClearClick = () => {
    setVal("")
  };

  return (
    <form className={styles.wrapper} onSubmit={onSubmit}>
      <input
        className={styles.search}
        placeholder={placeholder}
        required
        value={val}
        onChange={changeHandler}
      />
      <div>
        <button
          className={styles.searchButton}
          type="submit"
          onClick={onSubmit}
        >
          <SearchIcon />
        </button>
      </div>
      {val && filteredAlbum.length ? (
        <>
          <AutoSuggestion filteredAlbum={filteredAlbum} />
          <button className={styles.clearButton} onClick={handleClearClick}>
            X
          </button>
        </>
      ) : null}
    </form>
  );
};

export default Search;
