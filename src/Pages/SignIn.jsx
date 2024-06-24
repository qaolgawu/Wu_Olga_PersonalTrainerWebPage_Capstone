import style from './Pages.module.css'
import { useState } from 'react'
import RecipeApi from '../Api/Recipes'
import { useNavigate, Link } from 'react-router-dom'

export default function SignInPage() {

    const [form, setForm] = useState({})
    const [err, setErr] = useState('')
    const navigate = useNavigate()
    async function submitForm(e){
        e.preventDefault()
        try {
            const res = await RecipeApi.login(form)
            if(res.ok) {
                const {token} = await res.json()
                localStorage.setItem('token', token)
                navigate('/Profile')
            }else {
                setErr(await res.text())
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={style.overLay}>
            <form className={style.form} onSubmit={submitForm}>
                <h1 className={style.title}>Sign In</h1>
                <label htmlFor="email">Email:</label>
                <input className={style.input} name='email' onInput={(e) => setForm({...form, [e.target.name]: e.target.value})} type="email" placeholder="Email" />
                <label htmlFor="password">Password:</label>
                <input className={style.input} name='password' onInput={(e) => setForm({...form, [e.target.name]: e.target.value})}  type="password" placeholder="Password" />
                <p className={style.textErr}>{err}</p>
                <button className={style.button}>Sign In</button>
            </form>

            <div>Do you have account? Or not - <Link to="/SignUp">Please sign up</Link></div>
        </div>
    )
}