import {AuthContext} from './context/AuthContext'
import {useRoutes} from './routes'
import {useAuth} from './hooks/auth.hook'
import {BrowserRouter as Router} from 'react-router-dom'
import {Navbar} from './components/Navbar'
import 'materialize-css'


function App() {
  const {login, logout, id, password, auth, isAdmin} = useAuth()
  const isAuthenticated = !!auth
  const routes = useRoutes(isAuthenticated, isAdmin)

  return (
    <AuthContext.Provider value={{
      login, logout, id, password, auth, isAdmin
    }}>
    <Router>
    <div className = "back2">
    {isAdmin === false ? (isAuthenticated && <Navbar/> ) : (isAuthenticated && isAdmin)}
      {routes}
    </div>

    </Router>
    </AuthContext.Provider>
  )
}

export default App;
