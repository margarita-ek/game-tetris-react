import React from 'react'
import { Header } from './components/Header/Header'
import { AuthContext } from './context/AuthContext'
import { useAuth } from './hooks/auth.hook'
import { useAppRoutes } from './routes'

const App: React.FC = () => {
  const { token, login, logout, userId, userEmail, userName, ready  } = useAuth()
  const isAuthenticated = !!token
  const routes = useAppRoutes(isAuthenticated)
  return (
    <AuthContext.Provider value={{
        token, login, logout, userId, userEmail, userName, ready, isAuthenticated
    }}> 
      { isAuthenticated && <div>
          <Header />
      </div> }
      <div className='wrapper'>
          { routes }
      </div>
    </AuthContext.Provider>         
  )
}

export default App
