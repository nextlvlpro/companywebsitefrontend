

import { createContext, useEffect, useState } from 'react'
export const UserContext = createContext({})


import React from 'react'

export default function UserContextProvider({children}) {

    const [user,setUser] = useState(null)
    const [ready,setReady] = useState(false)
    const [admin, setAdmin] = useState(false)
    
    
    useEffect(() => {
        
        if(!user) {
            if(localStorage.length<1) {
                setUser(null)
            } else {
                setUser({...localStorage})
                setReady(true)
                if(setReady && {...localStorage}?.email =='bhanusharma089@gmail.com') {
                    setAdmin(true)
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
