import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './pages/Dashboard'
import ProtectedRoutes from './ProtectedRoute'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route
            path="/dashboard"
            element={
              <ProtectedRoutes
                redirectTo="/"
                component={Dashboard}
              />
            }/>
    </Routes>
  )
}

export default App