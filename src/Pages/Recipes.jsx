import Recipes from "../Components/Recipes/Recipes"

export default function RecipesPage({ recipes }) {
    return (
        <div>
            <Recipes recipes={recipes}/>
        </div>
    )
}