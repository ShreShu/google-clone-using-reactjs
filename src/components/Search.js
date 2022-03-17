import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";

export const Search = ({ hidebutton = false }) => {
  const [searchInput, setSearchInput] = useState("");
  const history = useNavigate();

  function inputVal(event) {
    setSearchInput(event.target.value);
    console.log(searchInput);
  }

  const search = (e) => {
    e.preventDefault();
    console.log("search me");
    history("/search");
  };

  return (
    <form>
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
      {hidebutton ? (
        <div className="buttonContained">
          <Button
            type="submit"
            variant="outlined"
            size="medium"
            onClick={search}
          >
            Google Search
          </Button>
          <Button variant="outlined" size="medium">
            I'm Feeling Lucky
          </Button>
        </div>
      ) : (
        <div className="buttonContained_hidden">
          <Button
            type="submit"
            variant="outlined"
            size="medium"
            onClick={search}
          >
            Google Search
          </Button>
        </div>
      )}
    </form>
  );
};
