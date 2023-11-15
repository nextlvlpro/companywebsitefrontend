import React, { useContext, useState } from 'react'
import { UserContext } from '../../UserContext'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Logout() {
    const { user, setUser, setAdmin } = useContext(UserContext)
    const [redir, setRedir] = useState(false)
  
    function logout() {
        axios.post('/logout')
        window.localStorage.clear()
        setRedir(true)
        setUser(null)
        setAdmin(false)
    }
    if(redir) {
        return (
            <Navigate to={'/'} />
        )
         
    }
    if(user) {
        return (
            <div className='flex flex-col items-center justify-center'>
                Logged in as {!!user && (
                    <div>
                        {user.userName} {user.email}
                    </div>
                    
                    )}
                <button type="submit"
                    className="w-md mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={logout}>
                    Logout
                </button>
            </div>
        )
    }
    
    
}
