import React from "react";
import { Search } from "./Search";
import "./Results.css";

export const Results = (props) => {
  return (
    <div className="results">
      <a className="displayLink" href={props.item.link}>
        {props.item.displayLink}
      </a>
      <a className="diplayTitle" href={props.item.link}>
        <h2>{props.item.title}</h2>
      </a>
      <p>{props.item.snippet}</p>
    </div>
  );
};
