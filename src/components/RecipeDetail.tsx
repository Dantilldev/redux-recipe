import {useGetRecipeByIdQuery} from "../features/recipes/rescipesApi";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";

function RecipeDetail() {
  const {id} = useParams<{id: string}>(); // Hämtar ID från URL
  const {data: recipe, isLoading, error} = useGetRecipeByIdQuery(Number(id));

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div>
      <div style={{display: "flex"}}>
        {" "}
        <Link to="/">Back to Home</Link>
        <h1>RecipeDetail: {recipe.name}</h1>
        <Link to="/favorites">Back to Favorites</Link>
      </div>

      <div>
        <img src={recipe.image} alt={recipe.name} width={600} />
        <p>
          <strong>Cuisine:</strong> {recipe.cuisine}
        </p>
        <p>
          <strong>Difficulty:</strong> {recipe.difficulty}
        </p>
        <p>
          <strong>Meal Type:</strong> {recipe.mealType.join(", ")}
        </p>
      </div>
    </div>
  );
}

export default RecipeDetail;
