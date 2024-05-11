import React, { useState, createContext, useEffect } from "react";
import { NewsService } from "./NewServes";

export const newsContext = createContext();
let firstCall = false;
export const NewsContextProvider = ({ children }) => {
  const [weatherNews, setweatherNews] = useState(null);
  const [sportNews, setsportNew] = useState(null);
  const [natureNews, setnatureNews] = useState(null);
  const [palestineNews, setpalestineNews] = useState(null);
  const [listIndex, setlistIndex] = useState(0);
  const [fetchedData, setfetchedData] = useState(null);
  const [textInput, setTextInput] = useState("");
  const [FavoriteList, setFavoriteList] = useState([]);

  const handleInputChange = (event) => {
    const newText = event.target.value;
    setTextInput(newText);
    fetchChosenData();
    console.log("New text:", newText);
  };
  const addToFavorites = (newItem) => {
    const isDuplicate = FavoriteList.some((item) => item.url === newItem.url);
    if (!isDuplicate) {
      setFavoriteList([...FavoriteList, newItem]);
      localStorage.setItem(
        "FavoriteList",
        JSON.stringify([...FavoriteList, newItem])
      );
    }
  };
  const removeFromFavorites = (urlToRemove) => {
    const indexToRemove = FavoriteList.findIndex(
      (item) => item.url === urlToRemove
    );
    if (indexToRemove !== -1) {
      const updatedList = [...FavoriteList];
      updatedList.splice(indexToRemove, 1);
      setFavoriteList(updatedList);
      localStorage.setItem("FavoriteList", JSON.stringify(updatedList));
    }
  };

  const changeIndex = () => {
    switch (listIndex) {
      case 0:
        return weatherNews;
      case 1:
        return sportNews;
      case 2:
        return natureNews;
      case 3:
        return palestineNews;
    }
  };

  const swapIndex = (number) => {
    setTextInput("");
    setfetchedData(null);
    console.log(number);
    setlistIndex(number);
  };

  const fetchNewsCategory = async () => {
    if (firstCall) return;
    console.log(firstCall);
    const x = await Promise.all([
      NewsService.fetchNewsData("weather"),
      NewsService.fetchNewsData("sport"),
      NewsService.fetchNewsData("nature"),
      NewsService.fetchNewsData("palestine"),
    ]);
    setweatherNews(x[0]);
    setsportNew(x[1]);
    setnatureNews(x[2]);
    setpalestineNews(x[3]);
    console.log(x);
    firstCall = true;
    console.log(firstCall);
  };
  const fetchChosenData = async (search) => {
    if (!search || search.length < 3 || search.length > 14) return;
    const data = await NewsService.fetchNewsData(search);
    console.log(data);
    setfetchedData(data);
  };

  return (
    <newsContext.Provider
      value={{
        fetchNewsCategory,
        changeIndex,
        swapIndex,
        fetchedData,
        fetchChosenData,
        textInput,
        handleInputChange,
        setTextInput,
        FavoriteList,
        addToFavorites,
        removeFromFavorites,
        listIndex,
        setFavoriteList,
      }}
    >
      {children}
    </newsContext.Provider>
  );
};
