import style from './App.module.css'
import { Header } from '../Header/Header'
import Footer from '../Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../../Pages/Home'
import RecipesPage from '../../Pages/Recipes'
import RecipePage from '../../Pages/Recipe'
import RecipeApi from '../../Api/Recipes'
import SignInPage from '../../Pages/SignIn'
import ProfilePage from '../../Pages/Profile'
import SignUpPage from '../../Pages/SignUp'
import { useEffect, useState } from 'react'


export default function App() {

  const [recipes, setRecipe] = useState({})

  useEffect(() => {
    RecipeApi.getRecipes().then(data => setRecipe(data))
  }, [])

  return <div className={style.wrapper}>
    <Header />
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/Recipes" element={<RecipesPage recipes={recipes} />} />
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/SignIn" element={<SignInPage />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/Recipe/:id" element={<RecipePage />} />
      </ Routes>
    <Footer />
  </div>
}


