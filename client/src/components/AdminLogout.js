import React, {useContext} from 'react'
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

export const AdminLogout = () => {
    const history = useNavigate()
    const auth = useContext(AuthContext)
    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }


    return(
        <>
            <button className='btn' onClick={logoutHandler}>выйти</button>
        </>
    )
}
