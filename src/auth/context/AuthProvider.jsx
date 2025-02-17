import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { types } from '../types/types'

const init = () =>{
    const user = JSON.parse(localStorage.getItem('user')) || { logged: false };

    return{
        logged: !user,
        user: user
    }
}

export const AuthProvider = ( { children }) => {

    const [authState, dispach] = useReducer(authReducer, {}, init);
    
    const onLogin = ( name = '' ) => {
        const user = { id: 'ABC', name: name };

        const action ={ 
            type: types.login, 
            payload: user
        }

        localStorage.setItem('user', JSON.stringify(user));

        dispach(action);
    }

    const onLogout = () => {
        const action = {
            type: types.logout
        }

        localStorage.removeItem('user');

        dispach(action);
    }

    return (
    <AuthContext.Provider value={{ ...authState, onLogin, onLogout }}>
        { children }
    </AuthContext.Provider>
    )
}
