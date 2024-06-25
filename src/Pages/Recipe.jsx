import { useParams } from 'react-router-dom'
import style from './Pages.module.css'
import { useEffect, useState } from 'react'
import RecipeApi from '../Api/Recipes'

export default function RecipePage(){
    const [recipe, setRecipe] = useState({})
    const {id} = useParams()

    useEffect(() => {
        RecipeApi.getRecipe(id)
            .then(data => setRecipe(data))
    }, [id])

    return <div className={style.container}>

        {recipe ? <div className={style.recipe}>
            <h1>{recipe.name}</h1>
            <img src={recipe.img} alt=""/>
            <p>{recipe.description}</p>
            <h3>Шаги:</h3>
            <div className={style.step__container}>
                {recipe.step?.map((step, index) => <p key={index}><b>{index + 1}. </b>{step}</p>)}
            </div>
        </div> : 'Рецепт не найден'}

    </div>
}