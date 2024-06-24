import style from './Pages.module.css'
import { useState, useEffect } from "react"
import RecipeApi from "../Api/Recipes"
import { useNavigate } from "react-router-dom"

export default function ProfilePage() {

    const [author, setAuthor] = useState(false)
    const [user, setUser] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        async function auth () {
            const res = await RecipeApi.getAuthor()
            if(res.ok){
                setAuthor(true) 
                const data = await res.json()
                setUser(data)
            } else {
                navigate('/signIn')
            }  
        }

        auth()
    }, [navigate])

    function exit () {
        localStorage.removeItem('token')
        navigate('/signIn')
    }

    return (
        <div className={style.overLay}>
            {author ? <div>
                <h1>You name: <span>{user.name}</span></h1>
                <h1>You Email: <span>{user.email}</span></h1>
                <button className={style.button} onClick={exit}>Logout</button>
                </div> 
            : <h1>You not authorized</h1>}
        </div>
    )
}