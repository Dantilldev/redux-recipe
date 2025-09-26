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
  const {data, isFetching, isError, error} = useSearchRecipesQuery({q: query});

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function isFavorite(id: number) {
    return favorites.some((item) => item.id === id);
  }

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search recipes..."
      />{" "}
      <Link to="/favorites">Show favorites ({favorites.length})</Link>
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
            <div
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Link to={`/recipe/${recipe.id}`}>
                <strong>{recipe.name}</strong> ({recipe.cuisine},{" "}
                {recipe.difficulty}, {recipe.mealType}),{" "}
              </Link>

              <a
                href={`https://dummyjson.com/recipes/${recipe.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Show JSON
              </a>
              <div style={{textAlign: "center", marginBottom: "10px"}}>
                <img src={recipe.image} alt={recipe.name} width={250} />
              </div>
              {isFavorite(recipe.id) ? (
                <button onClick={() => dispatch(removeFavorite(recipe.id))}>
                  Remove from favorites
                </button>
              ) : (
                <button
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
