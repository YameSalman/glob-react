import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { newsContext } from "../NewsContext";

function SingleCard({ item }) {
  const { addToFavorites, FavoriteList } = useContext(newsContext);
  const handleAddToFavorites = () => {
    addToFavorites(item);
  };

  const isFavorite = FavoriteList.some((favItem) => favItem.url === item.url);

  return (
    <div className="relative flex flex-col flex-1 min-w-[320px] min-h-[150px] max-w-[500] max-h-[300px] border-[1px] border-gray-300 m-0 justify-center items-center text-black rounded-[8px] shadow-lg overflow-hidden">
      <button
        className={`absolute top-2 right-2 ${
          isFavorite ? "text-red-500" : "text-gray-500"
        }`}
        onClick={handleAddToFavorites}
      >
        <FontAwesomeIcon icon={isFavorite ? solidHeart : regularHeart} />
      </button>
      <a
        href={`${item.url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col flex-1 border-[1px] text-black overflow-hidden w-full"
      >
        <div className="w-full h-[65%] bg-blue-500">
          <img
            src={item.urlToImage} // Replace with your image URL
            alt="Your Image"
            className="h-full w-full object-fill"
          />
        </div>
        <div className="w-full h-[35%] flex flex-col text-xs md:text-sm lg:text-base xl:text-lg">
          <span className="text-[14px] font-bold">{item.title}</span>
          <span className="text-[12px]">{item.description}</span>
        </div>
      </a>
    </div>
  );
}
export default SingleCard;
