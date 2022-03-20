import React, { useState, useEffect } from "react";
import API_KEY from "./keys";
import axios from "axios";

const CONTEXT_KEY = "e07ad2bac69b1d6ab";

export const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = (term) => {
      // BUG: something wrong with the url creation,need to fix
      fetch(
        // `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        "https://www.googleapis.com/customsearch/v1?key=AIzaSyA9nPTcyOSPUbDAOHib7ZzCcIKNRHsFNno&cx=e07ad2bac69b1d6ab&q=tesla"
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
      console.log("data i retiurn", data);
    };

    fetchData();
    console.log("I am teram", term);
  }, [term]);

  return { data };
};
