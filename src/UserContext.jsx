
import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
export const UserContext = createContext({})
import Cookies from 'js-cookie';

import React from 'react'

export default function UserContextProvider({children}) {

    const [user,setUser] = useState(null)
    const [ready,setReady] = useState(false)
    const [admin, setAdmin] = useState(false)
    const token = window.localStorage.getItem('token')
    
    
    useEffect(() => {
        if(!user) {
            
            axios.post('/profile',{token}).then(({data}) => {
                setUser(data)
                setReady(true)
                if(setReady && data?.email =='bhanusharma089@gmail.com') {
                    setAdmin(true)
                }
            })
        }
        if(user) {
            
            setReady(true)
            if (user.email === 'b2@g') {
                setAdmin(true)
            }
        }
    },[])
    console.log(admin);
  return (
    <UserContext.Provider value={{user,setUser, ready, admin, setAdmin}} >
        {children}
    </UserContext.Provider>
  )
}
