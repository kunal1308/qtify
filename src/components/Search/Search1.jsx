import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { ReactComponent as SearchIcon } from "../../assets/Search icon.svg";
import styles from "./Search.module.css";
import AutoSuggestion from "../AutoSuggestion/AutoSuggestion";

const Search1 = ({ data }) => {
  const [val, setVal] = useState(null);
  const [filteredAlbum, setFilteredAlbum] = useState([]);

  const changeHandler = (e) => {
    setVal(e.target.value);
    const res = data.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredAlbum(res);
  };
  const clickHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.wrapper}>
        <Autocomplete
          className={styles.search}
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={filteredAlbum}
          getOptionLabel={(option) => option.title}
          renderOption={(props, option) => {
            <AutoSuggestion
              {...props}
              // key={option.id}
              title={option.title}
              songs={option.songs}
              image={option.image}
              follows={option.follows}
            />;
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search an album of your choice"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
              value={val}
              onChange={changeHandler}
            />
          )}
        //   onKeyDown={(event) => {
        //     if (event.key === "Enter") {
        //       event.defaultMuiPrevented = true;
        //     }
        //   }}
        />
        <button
          className={styles.searchButton}
          type="submit"
          onClick={clickHandler}
        >
          <SearchIcon />
        </button>
    </form>
  );
};

export default Search1;
