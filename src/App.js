import "./App.css";
import { Routes, Route } from "react-router-dom";
import { MainPageView, Weather, News, FavoritesPage } from "./Features";

function App() {
  return (
    <Routes>
      <Route element={<MainPageView />} path="/" />
      <Route element={<Weather />} path="/Weather" />
      <Route element={<News />} path="/News" />
      <Route element={<FavoritesPage />} path="/FavoritesPage" />
    </Routes>
  );
}

export default App;
