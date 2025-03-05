import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useMemo,
  useCallback,
} from 'react'
import { AuthService, BrowserUtility } from 'utility'
import { Navigate, useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    AuthService.isAuthenticated(),
  )
  console.log(
    '🚀 ~ user.js:18 ~ AuthProvider ~ isAuthenticated:',
    isAuthenticated,
  )
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  // Use useCallback to memoize setData function
  const setData = useCallback(async () => {
    const authenticated = AuthService.isAuthenticated()
    setIsAuthenticated(authenticated)
    if (authenticated) {
      const user = AuthService.getUser()
      const meUser = await AuthService.me()
      console.log('🚀 ~ user.js:29 ~ setData ~ meUser:', meUser)
      BrowserUtility.saveObj('user', { ...user, ...meUser.data })
      setUser({ ...user, ...meUser.data })
    }
  }, [])

  const loadToken = useCallback(async () => {
    setData()
    setLoading(false)
  }, [setData])

  useEffect(() => {
    loadToken()
  }, [loadToken]) // Add loadToken to the dependency array

  // Use useCallback to memoize login and logout functions
  const login = useCallback(data => {
    AuthService.storeToken(data.accessToken)
    AuthService.storeUser(data)

    setUser(data)
    setIsAuthenticated(true)
  }, [])

  const logout = useCallback(async () => {
    await AuthService.logout()
    setIsAuthenticated(false)
    setUser(null)
    navigate('/home')
  }, [])

  useEffect(() => {
    // const subscriber =
    //   FirebaseService.auth.onAuthStateChanged(onAuthStateChanged)
    // return subscriber // unsubscribe on unmount
  }, [])

  const contextData = useMemo(
    () => ({
      loading,
      user,
      isAuthenticated,
      login,
      logout,
    }),
    [loading, user, isAuthenticated, login, logout], // Ensure login and logout are included
  )

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth()

  return isAuthenticated ? children : <Navigate to="/" />
}
