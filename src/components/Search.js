import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";

export const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  function inputVal(event) {
    setSearchInput(event.target.value);
    console.log(searchInput);
  }

  const search = (e) => {
    e.preventDefault();
    console.log("search me");
  };

  return (
    <>
      <div className="search_container">
        <SearchIcon />
        <input
          type="search"
          name="search"
          id="search"
          onChange={inputVal}
          value={searchInput}
        />
        <MicIcon />
      </div>
      <div className="buttonContained">
        <Button variant="outlined" size="medium" onClick={search}>
          Google Search
        </Button>
        <Button variant="outlined" size="medium">
          I'm Feeling Lucky
        </Button>
      </div>
    </>
  );
};
