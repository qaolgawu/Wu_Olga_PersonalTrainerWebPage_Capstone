import style from './Footer.module.css'


export default function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <p className={style.logo}>LOGO</p>
                <p className={style.text}>
                    1213 Jerde WalkStreet North Avenue,
                    California
                    USA, 011234
                </p>
            </div>
            <div className={style.container__link}>
                <p className={style.link}>Link</p>
                <p className={style.link}>Link</p>
                <p className={style.link}>Link</p>
                <p className={style.link}>Link</p>
                <p className={style.link}>Link</p>
                <p className={style.link}>Link</p>
                <p className={style.link}>Link</p>
                <p className={style.link}>Link</p>
            </div>
        </div>
    )
}