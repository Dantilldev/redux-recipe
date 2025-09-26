import "../App.css";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {useState, useEffect} from "react";
import {useSearchRecipesQuery} from "../features/recipes/rescipesApi";
import {
  addFavorite,
  removeFavorite,
} from "../features/favorites/favoritesSlice";
import {Link} from "react-router-dom";

function Home() {
  const favorites = useAppSelector((state) => state.favorites.items);
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState("");
  const {data, isFetching, isError, error} = useSearchRecipesQuery({
    q: query,
    limit: 50,
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function isFavorite(id: number) {
    return favorites.some((item) => item.id === id);
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "40px",
        }}
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search recipes..."
        />{" "}
        <Link to="/favorites">Show favorites ({favorites.length})</Link>
      </div>
      {isFetching && <p>Loading...</p>}
      {isError && (
        <p style={{color: "red"}}>
          Fail to fetch recipes
          {error && "status" in error ? ` (Error: ${error.status})` : ""}
        </p>
      )}
      <ul>
        {data?.recipes.map((recipe) => (
          <li key={recipe.id}>
            <div className="card">
              <a
                href={`https://dummyjson.com/recipes/${recipe.id}`}
                target="_blank"
              >
                --&gt; JSON &lt;--
              </a>
              <Link to={`/recipe/${recipe.id}`}>
                <div style={{textAlign: "center"}}>
                  <img src={recipe.image} alt={recipe.name} width={250} />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <strong>{recipe.name}</strong>{" "}
                  <small style={{color: "#ccc"}}>
                    ({recipe.cuisine}, {recipe.difficulty}, {recipe.mealType}){" "}
                  </small>
                </div>
              </Link>
              {isFavorite(recipe.id) ? (
                <button
                  style={{backgroundColor: "red", color: "white"}}
                  onClick={() => dispatch(removeFavorite(recipe.id))}
                >
                  Remove from favorites
                </button>
              ) : (
                <button
                  style={{backgroundColor: "green", color: "white"}}
                  onClick={() =>
                    dispatch(
                      addFavorite({
                        id: recipe.id,
                        title: recipe.name,
                        image: recipe.image,
                        cuisine: recipe.cuisine,
                        difficulty: recipe.difficulty,
                        mealType: recipe.mealType,
                      })
                    )
                  }
                >
                  Add to favorites
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Home;
