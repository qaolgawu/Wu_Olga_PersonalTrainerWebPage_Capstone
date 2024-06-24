import style from './Footer.module.css'


export default function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <a href="" className={style.logo}>LOGO</a>
                <p className={style.text}>
                    1213 Jerde WalkStreet North Avenue,
                    California
                    USA, 011234
                </p>
            </div>
            <div className={style.container__link}>
                <a href="" className={style.link}>Link</a>
                <a href="" className={style.link}>Link</a>
                <a href="" className={style.link}>Link</a>
                <a href="" className={style.link}>Link</a>
                <a href="" className={style.link}>Link</a>
                <a href="" className={style.link}>Link</a>
                <a href="" className={style.link}>Link</a>
                <a href="" className={style.link}>Link</a>
            </div>
        </div>
    )
}