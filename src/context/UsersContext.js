import React, { createContext, useReducer } from 'react'
import users from '../data/users'

const UsersContext = createContext({})
const initialState = { users }

const actions = {
    createUser(state,action ){
        const item = action.payload
        return {
            ...state,
            users: [...state.users, item]
        }
    },
    updateUser(state,action){
        const item = action.payload
        return {
            ...state,
            users: state.users.map(u => u.id === item.id ? item : u)
        }
    },
    deleteUser(state, action) {
        const item = action.payload
        return {
            ...state,
            users: state.users.filter(u => u.id !== item.id)
        }
    }
}

export const UsersProvider = props => {

    function reducer(state, action) {
        const fn = actions[action.type]
        return fn ? fn(state, action) : state
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <UsersContext.Provider value={{ state, dispatch }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContext