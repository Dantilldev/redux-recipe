import {useAppDispatch, useAppSelector} from "../app/hooks";
import {
  removeFavorite,
  clearFavorites,
} from "../features/favorites/favoritesSlice";
import {Link} from "react-router-dom";

function FavoritesPage() {
  const favorites = useAppSelector((state) => state.favorites.items);
  const dispatch = useAppDispatch();

  return (
    <div>
      <Link to="/">To Home</Link>
      <h2>Favorites ({favorites.length})</h2>
      <button onClick={() => dispatch(clearFavorites())}>Clear all</button>
      <ul>
        {favorites.map((f) => (
          <li key={f.id}>
            <div className="card">
              <Link to={`/recipe/${f.id}`}>
                <div className="favorite-title">
                  <strong>{f.title}</strong>
                  <span>
                    ({f.cuisine}, {f.difficulty}, {f.mealType})
                  </span>
                </div>
                <img src={f.image} alt={f.title} width={250} />
              </Link>
              <button
                style={{backgroundColor: "red", color: "white"}}
                onClick={() => dispatch(removeFavorite(f.id))}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoritesPage;
