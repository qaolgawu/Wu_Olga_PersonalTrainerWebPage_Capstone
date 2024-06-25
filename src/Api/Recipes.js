export default class RecipeApi {

    static getRecipes() {
        return fetch(url + `/recipes`).then(res => res.json())
    }

    static getRecipe(id) {
        return fetch(url + `/recipes/${id}`).then(res => res.json())
    }

    static getAuthor() {
        return fetch(url + `/user/me`, {
            headers: {
                'Authorization': `${localStorage.getItem('token')}`
            }
        })
    }

    static login(body) {
        return fetch(url + `/user/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    }

    static registry(body) {
        return fetch(url + `/user/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    }
}

const url = 'https://capstone-backend-github-link.onrender.com'