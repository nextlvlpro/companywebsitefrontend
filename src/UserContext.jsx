
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
            const data = {...localStorage}
            
                if(data) {
                setUser(data)
                setReady(true)
                if(setReady && data?.email =='bhanusharma089@gmail.com') {
                    setAdmin(true)
                } else {
                    setUser(null)
                }
            }
            
        }
        
        if(user) {
            setReady(true)
            if (user.email === 'bhanusharma089@gmail.com') {
                setAdmin(true)
            }
        }
    },[])
    
  return (
    <UserContext.Provider value={{user,setUser, ready, admin, setAdmin}} >
        {children}
    </UserContext.Provider>
  )
}
