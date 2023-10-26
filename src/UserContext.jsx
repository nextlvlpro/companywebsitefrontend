
import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
export const UserContext = createContext({})

import React from 'react'

export default function UserContextProvider({children}) {

    const [user,setUser] = useState(null)
    const [ready,setReady] = useState(false)
    const [admin, setAdmin] = useState(false)
    
    useEffect(() => {
        if(!user) {
            axios.get('/profile').then(({data}) => {
                setUser(data)
                if(setReady && data?.email === 'b2@g') {
                    console.log(data.email);
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
