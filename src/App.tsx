import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import RecipeDetail from "./components/RecipeDetail";
import FavoritesPage from "./components/FavoritePage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/recipe/:id" element={<RecipeDetail />} />
    </Routes>
  );
}

export default App;
