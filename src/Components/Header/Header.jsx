import React from 'react'
import Navbar from './Navbar'
import style from './Header.module.css'


 export function Header () {

    return( 
    <section className={style.header}>
                <a href="/" className={style.header__logo}>LOGO</a>
                <Navbar />
        <section className={style.options}>
            <section>
                +3333333333
            </section>
            <section>
                yuliaspynu@gmail.com
            </section>
        </section>

        </section>
    )    
}





