import style from './Recipes.module.css'
import { Link } from 'react-router-dom';

export default function Recipes ({ recipes }) {
    return <div className={style.container}>
        { recipes.map((item, index) => {
            return <Link to={`/recipe/${item._id}`} className={style.recipe} key={index}>
                <h1>{item.name[0].toUpperCase() + item.name.slice(1)}</h1>
                <p>{item.description}</p>
                <img src={item.img} alt=""/>
            </Link>
        })}
    </div>
}