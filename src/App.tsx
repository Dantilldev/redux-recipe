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

// import "./App.css";
// import {useAppDispatch, useAppSelector} from "./app/hooks";
// import {useState, useEffect} from "react";
// import {useSearchRecipesQuery} from "./features/recipes/rescipesApi";
// import {
//   addFavorite,
//   removeFavorite,
//   clearFavorites,
// } from "./features/favorites/favoritesSlice";
// import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
// import RecipeDetail from "./components/RecipeDetail";

// function App() {
//   const favorites = useAppSelector((state) => state.favorites.items);
//   const dispatch = useAppDispatch();
//   const [query, setQuery] = useState("");
//   const {data, isFetching, isError, error} = useSearchRecipesQuery({q: query});

//   useEffect(() => {
//     localStorage.setItem("favorites", JSON.stringify(favorites));
//   }, [favorites]);

//   function isFavorite(id: number) {
//     return favorites.some((item) => item.id === id);
//   }

//   return (
//     <Router>
//       <div>
//         <input
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Search recipes..."
//         />

//         {isFetching && <p>Loading...</p>}

//         {isError && (
//           <p style={{color: "red"}}>
//             No recipes found
//             {error && "status" in error ? ` (Error: ${error.status})` : ""}
//           </p>
//         )}

//         <ul>
//           {data?.recipes.map((recipe) => (
//             <li key={recipe.id}>
//               <div
//                 style={{
//                   height: "100%",
//                   width: "100%",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "space-between",
//                 }}
//               >
//                 <Link to={`/recipe/${recipe.id}`}>
//                   <strong>{recipe.name}</strong> ({recipe.cuisine},{" "}
//                   {recipe.difficulty}, {recipe.mealType}),{" "}
//                 </Link>

//                 <a
//                   href={`https://dummyjson.com/recipes/${recipe.id}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Show JSON
//                 </a>
//                 <div style={{textAlign: "center", marginBottom: "10px"}}>
//                   <img src={recipe.image} alt={recipe.name} width={250} />
//                 </div>
//                 {isFavorite(recipe.id) ? (
//                   <button onClick={() => dispatch(removeFavorite(recipe.id))}>
//                     Remove from favorites
//                   </button>
//                 ) : (
//                   <button
//                     onClick={() =>
//                       dispatch(
//                         addFavorite({
//                           id: recipe.id,
//                           title: recipe.name,
//                           image: recipe.image,
//                           cuisine: recipe.cuisine,
//                           difficulty: recipe.difficulty,
//                           mealType: recipe.mealType,
//                         })
//                       )
//                     }
//                   >
//                     Add to favorites
//                   </button>
//                 )}
//               </div>
//             </li>
//           ))}
//         </ul>

//         {/* Favorite section */}
//         <h2>Favorites ({favorites.length})</h2>
//         <button onClick={() => dispatch(clearFavorites())}>Clear all</button>
//         <ul>
//           {favorites.map((f) => (
//             <li key={f.id}>
//               <div
//                 style={{
//                   height: "100%",
//                   width: "100%",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "space-between",
//                 }}
//               >
//                 <strong>{f.title}</strong> ({f.cuisine}, {f.difficulty},{" "}
//                 {f.mealType}),{" "}
//                 <a
//                   href={`https://dummyjson.com/recipes/${f.id}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   ShowJSON
//                 </a>{" "}
//                 <div style={{textAlign: "center", marginBottom: "10px"}}>
//                   <img src={f.image} alt={f.title} width={250} />
//                 </div>
//                 <button onClick={() => dispatch(removeFavorite(f.id))}>
//                   Remove
//                 </button>{" "}
//               </div>
//             </li>
//           ))}
//         </ul>
//         <Routes>
//           <Route path="/recipe/:id" element={<RecipeDetail />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }
// export default App;
