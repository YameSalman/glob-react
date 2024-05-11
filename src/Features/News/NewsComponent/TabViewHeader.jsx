import React, { useContext } from "react";
import { newsContext } from "../NewsContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const listOfNews = [
  { name: "Weather", index: 0 },
  { name: "Sport", index: 1 },
  { name: "Nature", index: 2 },
  { name: "Palastine", index: 3 },
];

function TabViewHead() {
  const {
    swapIndex,
    textInput,
    setTextInput,
    fetchChosenData,
    listIndex,
    FavoriteList,
  } = useContext(newsContext);

  const handleInputChanges = (event) => {
    const newText = event.target.value;
    setTextInput(newText);
    // Pass newText to fetchChosenData
    console.log("New text:", newText);
  };
  const handleSearch = () => {
    fetchChosenData(textInput);
  };

  return (
    <div className="flex flex-row justify-evenly items-center w-full">
      <div className="flex flex-row justify-evenly items-center  bg-cyan-400  h-[70px] w-[400px] border-[1px] border-gray-300 rounded-[8px] shadow-lg">
        {listOfNews.map((item, index) => (
          <div
            className={`cursor-pointer font-bold ${
              listIndex === index ? "text-black" : "text-white"
            }`}
            onClick={() => swapIndex(index)}
            key={index}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className="relative">
        <input
          type="text"
          className="w-300px rounded-lg border border-gray-300 px-4 py-2"
          value={textInput}
          onChange={handleInputChanges}
          placeholder="Type something..."
        />
        <button
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-transparent border-none focus:outline-none"
          onClick={handleSearch}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <Link
        to={`/FavoritesPage`}
        className={`flex flex-row justify-center hover:cursor-pointer items-center text-${
          FavoriteList && FavoriteList.length > 0 ? "red-500" : "black"
        } text-[24px] font-[500]`}
      >
        Favorites Page
        <FontAwesomeIcon icon={faHeart} />
      </Link>
    </div>
  );
}
export default TabViewHead;
