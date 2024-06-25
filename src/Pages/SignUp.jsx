import style from './Pages.module.css'
import { useState } from 'react'
import RecipeApi from '../Api/Recipes'
import { useNavigate } from 'react-router-dom'

export default function SignUpPage() {
    const [form, setForm] = useState({})
    const [err, setErr] = useState('')
    const navigate = useNavigate()
    async function submitForm(e){
        e.preventDefault()
        try {
            const res = await RecipeApi.registry(form)
            if(res.ok) {
                navigate('/signIn')
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
                <h1 className={style.title}>Sign Up</h1>
                <label htmlFor="name">Name:</label>
                <input className={style.input} name='name' onInput={(e) => setForm({...form, [e.target.name]: e.target.value})} type="text" placeholder="Name" />
                <label htmlFor="email">Email:</label>
                <input className={style.input} name='email' onInput={(e) => setForm({...form, [e.target.name]: e.target.value})} type="email" placeholder="Email" />
                <label htmlFor="password">Password:</label>
                <input className={style.input} name='password' onInput={(e) => setForm({...form, [e.target.name]: e.target.value})}  type="password" placeholder="Password" />
                <p className={style.textErr}>{err}</p>
                <button className={style.button}>Sign Up</button>
            </form>
        </div>
    )
}