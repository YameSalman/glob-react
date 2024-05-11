import React, { useContext } from "react";
import { newsContext } from "../News/NewsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

function FavoritesPage() {
  const { FavoriteList, removeFromFavorites } = useContext(newsContext);
  const handleAddToFavorites = (item) => {
    removeFromFavorites(item.url);
  };
  console.log(FavoriteList);

  return (
    <div className="flex flex-row flex-wrap pt-[20px] gap-x-[1%] gap-y-[20px]  bg-gray-100 w-[100%] h-[100%] justify-start content-start">
      {FavoriteList.length > 0 ? (
        FavoriteList?.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col flex-1 min-w-[320px] min-h-[150px] max-w-[50%] max-h-[300px] border-[1px] border-gray-300 m-0 justify-center items-center text-black rounded-[8px] shadow-lg overflow-hidden"
          >
            <button
              className="absolute top-2 right-2 text-red-500"
              onClick={() => handleAddToFavorites(item)}
            >
              <FontAwesomeIcon icon={solidHeart} />
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
        ))
      ) : (
        <div className="flex  items-center justify-center text-[20px] font-bold text-black w-[100%] h-[100vh]">
          No Item in Favourite List
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;
