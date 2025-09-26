import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import RecipeDetail from "./components/RecipeDetail";
import FavoritesPage from "./components/FavoritePage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
