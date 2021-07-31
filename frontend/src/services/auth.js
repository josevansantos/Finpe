import storage from '../helpers/storage'
import jwt from 'jsonwebtoken'


const API_URL = 'http://localhost:5000'


export const getUser = () => jwt.decode(storage.get('token'))

export const isLogged = () => !!storage.get('token')

export const doLogin = async (email, password) => {
    try {
        const { token } = fetch(`${API_URL}/auth/login`)
            .then(res => res.json())

        storage.set('token', token)

        return getUser()
    
    } catch(err) {
        return { error: err.message }
    }
}

export const logout = () => {
    storage.clear()
    window.location.reload()
}

export default {
    doLogin,
    getUser,
    isLogged
}