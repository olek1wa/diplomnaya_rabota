import React, {useContext} from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import {Menu} from './components/Menu'
import {Main} from './components/Main'
import Admin from './components/Admin'
import {AuthContext} from "./context/AuthContext";
import {useAuth} from "./hooks/auth.hook";



export const useRoutes = (isAuthenticated, isAdmin) => {

    console.log(isAdmin)

  if(isAuthenticated && !isAdmin){
    return(
      <Routes>
        <Route path="/menu" element ={<Menu/>}/>
        <Route path="*" element={<Navigate to="/menu"/>}/>
        <Route path = "/admin" element={<Admin/>}/>
      </Routes>
    )
  }

  if(isAuthenticated && isAdmin){
      return (
          <Routes>
              <Route path="*" element={<Navigate to="/admin"/>}/>
              <Route path = "/admin" element={<Admin/>}/>
          </Routes>
      )
  }



  return (
    <>

      <Routes>
        <Route path="/" element ={<Main/>}/>
        <Route path="*" element={<Navigate to=""/>}/>
      </Routes>

    </>

  )
}
