import React, { useContext, useEffect } from "react";
import { newsContext } from "../News/NewsContext";
import SingleCard from "./NewsComponent/SingleCard";
import TabViewHead from "./NewsComponent/TabViewHeader";

function News() {
  const { fetchNewsCategory, changeIndex, fetchedData } =
    useContext(newsContext);

  useEffect(() => {
    fetchNewsCategory();
  }, []);

  return (
    <div className="flex bg-gray-100 w-[100%] h-[100%] pt-[20px] justify-center">
      <div className="flex flex-col">
        <TabViewHead />
        <div className="flex flex-row flex-wrap pt-[20px] gap-x-[1%] gap-y-[20px] justify-start content-start">
          {fetchedData &&
          fetchedData.articles &&
          fetchedData.articles.length !== 0
            ? fetchedData.articles.map((item, index) => (
                <SingleCard key={index} item={item} />
              ))
            : changeIndex()?.articles.map((item, index) => (
                <SingleCard key={index} item={item} />
              ))}
        </div>
      </div>
    </div>
  );
}

export default News;
