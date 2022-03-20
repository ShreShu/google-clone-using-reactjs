import React from "react";
import "./SearchResults.css";
import { useGoogleSearch } from "../axios/useGoogleSearch";
import { useDataLayerValue } from "../contextApi/StateProvider";
import { Search } from "./Search";
import response from "../axios/response";
import { Results } from "./Results";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";
export const SearchResults = () => {
  const [{ term }, dispatch] = useDataLayerValue();
  const { data } = useGoogleSearch(term);

  //  const data = response;

  console.log(data);
  return (
    <div>
      <div className="searchPage">
        <div className="searchpage_header">
          <Search hiddenbutton />

          <div className="searchPage_options">
            <div className="searchpageOption_left">
              <div className="searchPage_option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage_option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage_option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage_option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchPage_option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchPage_option">
                <MoreVertIcon />
                <Link to="/news">more</Link>
              </div>
            </div>

            <div className="searchpageOption_right">
              <div className="searchPage_option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage_option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
        {term && (
          <div className="searchPage_results">
            About {data?.searchInformation.formattedTotalResults} results
            {data?.searchInformation.formattedSearchTime} for {term}
            {data?.items.map((item) => (
              //   <a href={item.link}>{item.displayLink}</a>
              <Results key={item.cacheId} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
