import React from "react";
import styles from './Header.module.css'
import { Link } from "react-router-dom";

export default function Navbar () {
    return (
        <section className={styles.navbar}>
            <Link to="/">HOME</Link>
            <Link to="/recipes">RECIPES</Link>
            <Link to="/Profile">PROFILE</Link>
        </section>
    )

}

