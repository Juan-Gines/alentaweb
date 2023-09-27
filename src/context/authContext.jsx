import { createContext, useContext, useState, useEffect, useReducer } from 'react'
import { api } from '../constants/api'
import axios from 'axios'

const AuthContext = createContext()
const AuthDispatchContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

const createAuth = (newToken) => {
  return {
    headers: {
      'Content-Type': 'application/json',
      // eslint-disable-next-line quote-props
      'Authorization': `Bearer ${newToken}`
    }
  }
}

const initialState = {
  user: null,
  config: null
}

export const AuthProvider = ({ children }) => {
  const [auth, dispatch] = useReducer(authReducer, initialState)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const authToken = globalThis.localStorage.getItem('userAuthToken')
    if (authToken) {
      const config = createAuth(authToken)
      axios.get(api.getUser, config)
        .then((newUser) => dispatch({
          type: 'login',
          payload: {
            config,
            user: newUser.data.data
          }
        }))
        .catch((error) => {
          console.error('usuario no autorizado', error)
          globalThis.localStorage.removeItem('userAuthToken')
          dispatch({
            type: 'logout'
          })
        })
    }
    setLoading(false)
  }
  , [])

  function login ({ token, user }) {
    const config = createAuth(token)
    globalThis.localStorage.setItem('userAuthToken', token)
    dispatch({
      type: 'login',
      payload: {
        config,
        user
      }
    })
  }

  function logout () {
    globalThis.localStorage.removeItem('userAuthToken')
    dispatch({
      type: 'logout'
    })
  }

  const value = {
    auth,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      <AuthDispatchContext.Provider value={dispatch}>
        {!loading && children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  )
}

const authReducer = (auth, action) => {
  const { type, payload } = action
  switch (type) {
    case 'login': {
      return {
        user: payload.user,
        config: payload.config
      }
    }
    case 'logout': {
      return {
        user: null,
        config: null
      }
    }
    default: {
      throw Error('Unknown action: ' + type)
    }
  }
}
