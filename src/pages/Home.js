import "./Home.css";
import React from "react";
import { Header } from "../components/Header";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Search } from "../components/Search";

export const Home = () => {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_headerleft">
          <Link to="about">About</Link>
          <Link to="store">Store</Link>
        </div>
        <div className="home_headerRight">
          <Link to="gmail">Gmail</Link>
          <Link to="images">Images</Link>
          <AppsIcon />
          <AccountCircleIcon />
        </div>
      </div>
      <div className="home_body">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <div className="searchContainer">
          {/* searchbar */}
          <Search />
        </div>
      </div>
    </div>
  );
};
