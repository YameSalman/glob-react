import React, { useEffect, useContext } from "react";
import { styles } from "./MainPageCSS";
import { Link } from "react-router-dom";
import { newsContext } from "../News/NewsContext";

const MainPageView = () => {
  const { setFavoriteList } = useContext(newsContext);
  useEffect(() => {
    const x = localStorage.getItem("FavoriteList");
    setFavoriteList(JSON.parse(x));
  }, []);
  return (
    <div style={styles.mainStyle}>
      <div class="flex items-center justify-center h-screen w-screen gap-[10%]">
        <Link
          to={`/Weather`}
          class="flex justify-center w-[400px] h-[250px]  rounded-[10px] flex-shrink-0 border-[1px] hover:cursor-pointer items-center text-white text-[24px] font-[500]"
          style={styles.weatherStyle}
        >
          Weather around the World
        </Link>
        <Link
          to={`/News`}
          class="flex justify-center w-[400px] h-[250px]  rounded-[10px] flex-shrink-0 border-[1px] hover:cursor-pointer items-center text-white text-[24px] font-[500]"
          style={styles.newsStyle}
        >
          News around the World
        </Link>
      </div>
    </div>
  );
};

export default MainPageView;
