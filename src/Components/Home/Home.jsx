import style from './Home.module.css'
import home from '../../Assets/img/home.jpg'

export default function Home() {
    return <div className={style.container}>
            <div className={style.home__container}>
                <h1 className={style.home__title}>Hello! My name is Yuliya Spy!</h1>
                <p className={style.home__text}>This is my Sweat Webpage</p>
            </div>
            <img src={home} alt=""></img>
    </div>
}