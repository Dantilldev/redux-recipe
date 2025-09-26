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
      <Link to="/">Back to Home</Link>
      <h2>Favorites ({favorites.length})</h2>
      <button onClick={() => dispatch(clearFavorites())}>Clear all</button>
      <ul>
        {favorites.map((f) => (
          <li key={f.id}>
            <Link to={`/recipe/${f.id}`}>
              <strong>{f.title}</strong> ({f.cuisine}, {f.difficulty},{" "}
              {f.mealType})
              <img src={f.image} alt={f.title} width={100} />
            </Link>
            <button onClick={() => dispatch(removeFavorite(f.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoritesPage;
