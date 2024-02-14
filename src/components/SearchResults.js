import { useEffect, useState } from "react";
import { API_KEY } from "../utils/constants";
import { useSelector } from "react-redux";
import SearchVideocard from "./SearchVideocard";
import { Link } from "react-router-dom";

const SearchResults = () => {
  const query = useSelector((store) => store.app.searchQuery);
  const [searchResults, setSearchResults] = useState([]);

  const getSearchData = async () => {
    const data = await fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=" +
        query +
        "&type=video&key=" +
        API_KEY
    );
    const json = await data.json();
    setSearchResults(json.items);
  };

  useEffect(() => {
    getSearchData();
  }, []);

  if (searchResults.length == 0) return;

  return (
    <div className="flex-1 overflow-y-scroll">
      {searchResults.map((video) => (
        <Link key={video.id?.videoId} to={"/watch?v=" + video.id.videoId}>
          <SearchVideocard videoData={video} />
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
